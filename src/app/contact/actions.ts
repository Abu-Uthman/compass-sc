'use server';

// Sends a contact form enquiry by email through Resend.
// API reference: https://resend.com/docs/api-reference/emails/send-email
//
// Server environment variables:
//   RESEND_API_KEY      Required. Without it nothing is sent and the form shows its error message.
//   CONTACT_TO_EMAIL    Optional. Where enquiries go. Default: SITE_CONFIG.email.
//   CONTACT_FROM_EMAIL  Optional. The sender. Default: Resend's test sender, which only delivers
//                       to the Resend account owner's own address until a domain is verified.
import { SITE_CONFIG } from '@/lib/constants';
import { normaliseEnquiry, validateEnquiry, type Enquiry } from '@/lib/enquiry';

const RESEND_EMAILS_URL = 'https://api.resend.com/emails';
const DEFAULT_FROM = 'Compass SC website <onboarding@resend.dev>';
const ENQUIRY_FIELDS = ['fullName', 'phoneNumber', 'email', 'planManagementType', 'isNDISParticipant', 'message'] as const;

type SendResult = { ok: boolean };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** Never log what the visitor typed: only the reason and the HTTP status. */
function failure(reason: string, status?: number): SendResult {
  console.error(`Contact form: ${reason}${status === undefined ? '' : ' ' + status}`);
  return { ok: false };
}

/** The input comes from the public internet. Accept it only when every field is text and passes the rules. */
function readEnquiry(input: Record<string, unknown>): Enquiry | null {
  for (const field of ENQUIRY_FIELDS) {
    const value = input[field];
    const emailLeftOut = field === 'email' && value === undefined;
    if (typeof value !== 'string' && !emailLeftOut) return null;
  }
  const enquiry = normaliseEnquiry(input);
  return Object.keys(validateEnquiry(enquiry)).length === 0 ? enquiry : null;
}

function emailText(enquiry: Enquiry) {
  return [
    `Name: ${enquiry.fullName}`,
    `Phone: ${enquiry.phoneNumber}`,
    `Email: ${enquiry.email || 'Not provided'}`,
    `Plan management: ${enquiry.planManagementType}`,
    `NDIS participant: ${enquiry.isNDISParticipant}`,
    `Message: ${enquiry.message}`,
  ].join('\n');
}

/**
 * Stops an accidental double send. The same enquiry, sent again within the same ten minutes
 * (for example after a slow answer), gets the same key, so Resend returns the first result and
 * does not send a second email. Later on, the same words are sent again as a new email.
 */
async function idempotencyKey(parts: string[]) {
  const tenMinuteWindow = Math.floor(Date.now() / 600_000);
  const data = new TextEncoder().encode([tenMinuteWindow, ...parts].join('\n'));
  const digest = await crypto.subtle.digest('SHA-256', data);
  const hex = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `contact-form/${hex.slice(0, 40)}`;
}

async function deliver(enquiry: Enquiry, apiKey: string): Promise<SendResult> {
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;
  const to = process.env.CONTACT_TO_EMAIL || SITE_CONFIG.email;
  const text = emailText(enquiry);
  const response = await fetch(RESEND_EMAILS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      // Resend rejects direct HTTP requests that have no User-Agent (403, error 1010).
      'User-Agent': 'compass-sc-website/1.0',
      'Idempotency-Key': await idempotencyKey([from, to, text]),
    },
    signal: AbortSignal.timeout(10_000),
    // Plain text only, never html, so nothing the visitor typed can become markup.
    body: JSON.stringify({
      from,
      to: [to],
      subject: 'New enquiry from the Compass SC website',
      text,
      ...(enquiry.email && { reply_to: [enquiry.email] }),
    }),
  });
  if (!response.ok) return failure('email service returned', response.status);

  const receipt: unknown = await response.json();
  if (!isRecord(receipt) || typeof receipt.id !== 'string' || !receipt.id.trim()) {
    return failure('missing email receipt', response.status);
  }
  return { ok: true };
}

export async function sendEnquiry(input: unknown): Promise<SendResult> {
  try {
    if (!isRecord(input)) return failure('invalid enquiry');

    // Spam trap: a hidden field that a real visitor never fills. If it is filled, nothing is sent.
    // The form then shows its error message with the phone number, so a real person whose browser
    // filled the field by mistake is told to call, and is never dropped without knowing.
    if (input.hp_check !== undefined && input.hp_check !== '') return failure('spam trap');

    const enquiry = readEnquiry(input);
    if (!enquiry) return failure('invalid enquiry');

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) return failure('missing email configuration');

    return await deliver(enquiry, apiKey);
  } catch {
    return failure('email request failed');
  }
}
