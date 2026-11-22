// Rules for a contact form enquiry.
// The browser form and the server action both use these rules, so the form can tell a
// visitor which field to fix, and the server gives the same answer.

export const PLAN_MANAGEMENT_OPTIONS = ['NDIA-managed', 'Plan-managed', 'Self-managed', 'Not sure'];
export const NDIS_PARTICIPANT_OPTIONS = ['Yes', 'No', 'Not sure'];

export const ENQUIRY_LIMITS = { fullName: 100, phoneNumber: 20, email: 254, message: 2000 };

export type Enquiry = {
  fullName: string;
  phoneNumber: string;
  email: string;
  planManagementType: string;
  isNDISParticipant: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

// Line breaks and other control characters. In an email they can fake extra lines, so a name
// must not contain them. This includes tabs and the "next line" character.
const CONTROL_OR_LINE_BREAK = /[\u0000-\u001F\u007F-\u009F\u2028\u2029]/;
// Invisible marks that change the direction of text. Text copied from a phone often carries
// them, so they are removed instead of rejected.
const DIRECTION_MARKS = /[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g;
// Control characters that a message must not keep. Tabs and line breaks stay.
const CONTROL_EXCEPT_TAB_AND_NEWLINE = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g;
// Every invisible format character, and every kind of dash. Built from text because this
// project compiles to ES2017, which does not accept these patterns written directly.
const FORMAT_CHARACTERS = new RegExp('\\p{Cf}', 'gu');
const ANY_DASH = new RegExp('\\p{Pd}', 'gu');

const PHONE_SHAPE = /^[\d +()-]{6,20}$/;
// Parts separated by single dots; each domain label starts and ends with a letter or a digit.
const EMAIL_SHAPE =
  /^[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?$/i;

function text(value: unknown) {
  return typeof value === 'string' ? value : '';
}

function isValidPhone(phone: string) {
  return PHONE_SHAPE.test(phone) && (phone.match(/\d/g) ?? []).length >= 6;
}

function isValidEmail(email: string) {
  return email.length <= ENQUIRY_LIMITS.email && EMAIL_SHAPE.test(email);
}

/**
 * Tidy what was typed before it is checked. Pasted text often holds things nobody can see:
 * special spaces, direction marks, long dashes. These are fixed here, not rejected.
 */
export function normaliseEnquiry(input: Partial<Record<keyof Enquiry, unknown>>): Enquiry {
  return {
    fullName: text(input.fullName).replace(DIRECTION_MARKS, '').trim(),
    phoneNumber: text(input.phoneNumber)
      .replace(FORMAT_CHARACTERS, '')
      .replace(ANY_DASH, '-')
      .replace(/\s/g, ' ')
      .trim(),
    email: text(input.email).replace(FORMAT_CHARACTERS, '').trim(),
    planManagementType: text(input.planManagementType),
    isNDISParticipant: text(input.isNDISParticipant),
    message: text(input.message)
      .replace(/\r\n?|[\u2028\u2029]/g, '\n')
      .replace(DIRECTION_MARKS, '')
      .replace(CONTROL_EXCEPT_TAB_AND_NEWLINE, '')
      .trim(),
  };
}

// One rule for each field. A rule returns the message to show, or nothing when the value is fine.
const RULES: Record<keyof Enquiry, (value: string) => string | undefined> = {
  fullName(value) {
    if (!value) return 'Full name is required';
    const tooLongOrUnsafe = value.length > ENQUIRY_LIMITS.fullName || CONTROL_OR_LINE_BREAK.test(value);
    return tooLongOrUnsafe ? 'Please enter your name on one line, up to 100 characters' : undefined;
  },
  phoneNumber(value) {
    if (!value) return 'Phone number is required';
    return isValidPhone(value) ? undefined : 'Please enter a phone number using digits, spaces and + ( ) - only';
  },
  email(value) {
    // The email is optional.
    return !value || isValidEmail(value) ? undefined : 'Please enter a valid email address';
  },
  planManagementType(value) {
    return PLAN_MANAGEMENT_OPTIONS.includes(value) ? undefined : 'Please choose one option';
  },
  isNDISParticipant(value) {
    return NDIS_PARTICIPANT_OPTIONS.includes(value) ? undefined : 'Please select yes/no/not sure';
  },
  message(value) {
    if (!value) return 'How can we help is required';
    return value.length > ENQUIRY_LIMITS.message ? 'Please keep your message under 2000 characters' : undefined;
  },
};

/** Returns one message for each field that is wrong. An empty object means the enquiry is fine. */
export function validateEnquiry(enquiry: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  for (const field of Object.keys(RULES) as (keyof Enquiry)[]) {
    const message = RULES[field](enquiry[field]);
    if (message) errors[field] = message;
  }
  return errors;
}
