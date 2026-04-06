'use client';
import { useActionState } from 'react';
import { submitContactForm, type FormState } from './actions';

const initialState: FormState = { success: false, message: '' };

const inputClass =
  'w-full px-4 py-3 bg-dark-300 border border-copper-900 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-colors text-sm';

const errorClass = 'text-red-400 text-xs mt-1';

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="space-y-5">
      {/* Success Message */}
      {state.success && (
        <div className="p-4 bg-green-900/30 border border-green-700 rounded-xl text-green-400 text-sm">
          ✅ {state.message}
        </div>
      )}
      {/* Error Message */}
      {!state.success && state.message && (
        <div className="p-4 bg-red-900/20 border border-red-800 rounded-xl text-red-400 text-sm">
          {state.message}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-1.5">
          Full Name <span className="text-copper-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          className={inputClass}
          required
        />
        {state.errors?.name && <p className={errorClass}>{state.errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-1.5">
          Email Address <span className="text-copper-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className={inputClass}
          required
        />
        {state.errors?.email && <p className={errorClass}>{state.errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-white/70 text-sm font-medium mb-1.5">
          Phone Number <span className="text-copper-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 9876543210"
          className={inputClass}
          required
        />
        {state.errors?.phone && <p className={errorClass}>{state.errors.phone}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-1.5">
          Message <span className="text-copper-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your requirements..."
          className={`${inputClass} resize-none`}
          required
        />
        {state.errors?.message && <p className={errorClass}>{state.errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 bg-copper-500 hover:bg-copper-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all duration-300 shadow-copper hover:shadow-copper-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
