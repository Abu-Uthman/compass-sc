'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';

import { sendEnquiry } from '@/app/contact/actions';
import { SITE_CONFIG } from '@/lib/constants';
import {
  ENQUIRY_LIMITS,
  NDIS_PARTICIPANT_OPTIONS,
  PLAN_MANAGEMENT_OPTIONS,
  normaliseEnquiry,
  validateEnquiry,
  type EnquiryErrors,
} from '@/lib/enquiry';

const initialForm = {
  fullName: '',
  phoneNumber: '',
  email: '',
  planManagementType: 'Not sure',
  isNDISParticipant: '',
  message: '',
  // Spam trap: hidden from people, so it stays empty. See actions.ts.
  hp_check: '',
};

const inputBorder = (message?: string) => (message ? 'border-red-300 focus:ring-red-500' : 'border-slate-200');

/** Lets a screen reader read the message under a field together with the field. */
const describedBy = (name: keyof EnquiryErrors, errors: EnquiryErrors) => ({
  'aria-invalid': Boolean(errors[name]),
  'aria-describedby': errors[name] ? `${name}-error` : undefined,
});

function FieldError({ name, message }: { name: string; message?: string }) {
  if (!message) return null;
  return <p id={`${name}-error`} className="text-red-500 text-xs mt-1">{message}</p>;
}

/** Moves the keyboard and the screen reader to the first field that needs fixing. */
function focusFirstInvalid(form: HTMLFormElement | null, errors: EnquiryErrors) {
  const first = Object.keys(errors)[0];
  form?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
}

// The browser cuts off text beyond a field's maxLength without telling the visitor. So the phone
// field allows more than the rule does, and the message field has no cut-off: the rule's own
// message then tells the visitor what to fix.
const PHONE_FIELD_MAX = 30;

// True only in the browser, once the page's scripts are running. Until then the Send button is
// off, so a visitor cannot "send" from a page that is not ready to send.
const subscribeToNothing = () => () => {};
const useScriptsReady = () => useSyncExternalStore(subscribeToNothing, () => true, () => false);

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);

  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const scriptsReady = useScriptsReady();
  const formRef = useRef<HTMLFormElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const wasSubmitting = useRef(false);

  useEffect(() => {
    // The fields are locked while a message is sent, and a locked field drops the keyboard focus.
    // When sending ends, put the focus back on the Send button.
    if (wasSubmitting.current && !isSubmitting) sendButtonRef.current?.focus();
    wasSubmitting.current = isSubmitting;
  }, [isSubmitting]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const field = name as keyof EnquiryErrors;
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitStatus('idle');
    // The same rules run again on the server, so the form and the server always agree.
    const enquiry = normaliseEnquiry(formData);
    const validationErrors = validateEnquiry(enquiry);
    if (Object.keys(validationErrors).length > 0) {
      // Show the messages first, then move to the first wrong field, so it is read out with its message.
      flushSync(() => setErrors(validationErrors));
      focusFirstInvalid(formRef.current, validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEnquiry({ ...enquiry, hp_check: formData.hp_check });
      if (!result.ok) {
        setSubmitStatus('error');
        return;
      }
      setSubmitStatus('success');
      setFormData(initialForm);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      
      {/* method="post" keeps what was typed out of the page address if the scripts fail to load */}
      <form ref={formRef} method="post" onSubmit={handleSubmit} className="relative z-10">
        <noscript>
          <p className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
            This form needs JavaScript to send your message. Please call us on {SITE_CONFIG.phone} or email {SITE_CONFIG.email}.
          </p>
        </noscript>
        {/* While a message is being sent the fields are locked, so a late change cannot be lost */}
        <fieldset disabled={isSubmitting} className="space-y-6 min-w-0">
        <input
          type="text"
          name="hp_check"
          value={formData.hp_check}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                maxLength={ENQUIRY_LIMITS.fullName}
                {...describedBy('fullName', errors)}
                className={`block w-full pl-10 rounded-lg border ${inputBorder(errors.fullName)} bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 shadow-sm sm:text-sm`}
                placeholder="Enter your full name"
              />
            </div>
            <FieldError name="fullName" message={errors.fullName} />
          </div>

          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-slate-900">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                maxLength={PHONE_FIELD_MAX}
                {...describedBy('phoneNumber', errors)}
                className={`block w-full pl-10 rounded-lg border ${inputBorder(errors.phoneNumber)} bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 shadow-sm sm:text-sm`}
                placeholder="04XX XXX XXX"
              />
            </div>
            <FieldError name="phoneNumber" message={errors.phoneNumber} />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={ENQUIRY_LIMITS.email}
              {...describedBy('email', errors)}
              className={`block w-full pl-10 rounded-lg border ${inputBorder(errors.email)} bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 shadow-sm sm:text-sm`}
              placeholder="you@example.com"
            />
          </div>
          <FieldError name="email" message={errors.email} />
        </div>

        <div className="space-y-2">
          <span id="planManagementType-label" className="block text-sm font-semibold text-slate-900">
            Plan Management Type
          </span>
          <div role="radiogroup" aria-labelledby="planManagementType-label" className="space-y-3">
            {PLAN_MANAGEMENT_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <input
                  name="planManagementType"
                  type="radio"
                  value={option}
                  checked={formData.planManagementType === option}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <span id="isNDISParticipant-label" className="block text-sm font-semibold text-slate-900">
            Are you an NDIS participant? <span className="text-red-500">*</span>
          </span>
          <div
            role="radiogroup"
            aria-labelledby="isNDISParticipant-label"
            {...describedBy('isNDISParticipant', errors)}
            className="flex flex-wrap gap-6"
          >
            {NDIS_PARTICIPANT_OPTIONS.map((option) => (
              <label key={option} className="inline-flex items-center cursor-pointer">
                <input
                  name="isNDISParticipant"
                  type="radio"
                  value={option}
                  checked={formData.isNDISParticipant === option}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="ml-2 text-slate-700">{option}</span>
              </label>
            ))}
          </div>
          <FieldError name="isNDISParticipant" message={errors.isNDISParticipant} />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
            How can we help you? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            {...describedBy('message', errors)}
            className={`block w-full rounded-lg border ${inputBorder(errors.message)} bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 px-4 shadow-sm sm:text-sm resize-none`}
            placeholder="Tell us a bit about your needs..."
          ></textarea>
          <FieldError name="message" message={errors.message} />
        </div>

        <div className="pt-2">
          <button
            ref={sendButtonRef}
            type="submit"
            disabled={isSubmitting || !scriptsReady}
            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
          <p className="mt-2 text-xs text-slate-500">
            Your details are sent to Compass SC by email so we can reply to you. Please do not put private health details in this form.
          </p>
        </div>
        </fieldset>

        {/* This region is always on the page, so screen readers announce the message when it appears */}
        <div role="status">
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-center">
              <p className="font-semibold">Thank you! We&apos;ll be in touch shortly.</p>
              <p className="text-sm">Our team will respond within 1 business day.</p>
            </div>
          )}
        </div>
        {submitStatus === 'error' && (
          <div role="alert" className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-center">
            <p>Sorry, your message could not be sent. Please call us on {SITE_CONFIG.phone} or email {SITE_CONFIG.email}.</p>
          </div>
        )}
      </form>
    </div>
  );
}