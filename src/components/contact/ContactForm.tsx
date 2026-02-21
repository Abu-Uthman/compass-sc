'use client';

import { useState } from 'react';

const resending = false;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    planManagementType: 'Not sure',
    isNDISParticipant: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.isNDISParticipant) newErrors.isNDISParticipant = 'Please select yes/no/not sure';
    if (!formData.message.trim()) newErrors.message = 'How can we help is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Log to console for now (will integrate with Resend API)
      console.log('Form submitted:', formData);
      
      // In production, this would be:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        planManagementType: 'Not sure',
        isNDISParticipant: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
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
                className={`block w-full pl-10 rounded-lg border ${
                  errors.fullName ? 'border-red-300 focus:ring-red-500' : 'border-slate-200'
                } bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 shadow-sm sm:text-sm`}
                placeholder="Enter your full name"
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
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
                className={`block w-full pl-10 rounded-lg border ${
                  errors.phoneNumber ? 'border-red-300 focus:ring-red-500' : 'border-slate-200'
                } bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 shadow-sm sm:text-sm`}
                placeholder="04XX XXX XXX"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
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
              className="block w-full pl-10 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 shadow-sm sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="planManagementType" className="block text-sm font-semibold text-slate-900">
            Plan Management Type
          </label>
          <div className="space-y-3">
            {[
              { value: 'Self-managed', label: 'Self-managed' },
              { value: 'Plan-managed', label: 'Plan-managed' },
              { value: 'Agency-managed', label: 'Agency-managed' },
              { value: 'Not sure', label: 'Not sure' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <input
                  name="planManagementType"
                  type="radio"
                  value={option.value}
                  checked={formData.planManagementType === option.value}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="text-slate-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <span className="block text-sm font-semibold text-slate-900">
            Are you an NDIS participant? <span className="text-red-500">*</span>
          </span>
          <div className="flex flex-wrap gap-6">
            {['Yes', 'No', 'Not Sure'].map((option) => (
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
          {errors.isNDISParticipant && (
            <p className="text-red-500 text-xs mt-1">{errors.isNDISParticipant}</p>
          )}
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
            className={`block w-full rounded-lg border ${
              errors.message ? 'border-red-300 focus:ring-red-500' : 'border-slate-200'
            } bg-slate-50 text-slate-900 focus:ring-primary focus:border-primary py-3 px-4 shadow-sm sm:text-sm resize-none`}
            placeholder="Tell us a bit about your needs..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
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
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-center">
            <p className="font-semibold">Thank you! We'll be in touch shortly.</p>
            <p className="text-sm">Our team will respond within 1 business day.</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-center">
            <p>Something went wrong. Please try again or call us directly.</p>
          </div>
        )}
      </form>
    </div>
  );
}