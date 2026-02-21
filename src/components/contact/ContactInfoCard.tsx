export default function ContactInfoCard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Info Box 1: Phone */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
        <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
          <p className="text-slate-600 text-sm mb-1">Mon-Fri from 9am to 5pm</p>
          <a
            href="tel:0432405388"
            className="text-primary font-semibold hover:underline text-lg"
          >
            0432 405 388
          </a>
        </div>
      </div>

      {/* Info Box 2: Email */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
        <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
          <p className="text-slate-600 text-sm mb-1">Send us your query anytime</p>
          <a
            href="mailto:info@compasssc.com.au"
            className="text-primary font-semibold hover:underline break-all"
          >
            info@compasssc.com.au
          </a>
        </div>
      </div>

      {/* Info Box 3: Location */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
        <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
          <p className="text-slate-600 text-sm">
            Melbourne, VIC
            <br />
            <span className="text-slate-500 text-xs mt-1 block">Serving all Metro areas</span>
          </p>
        </div>
      </div>

      {/* Info Box 4: Languages */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
        <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 mb-1">Languages Spoken</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700">
              English
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700">
              Somali
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700">
              Arabic
            </span>
          </div>
        </div>
      </div>

      {/* Friendly Note */}
      <div className="mt-4 p-4 rounded-lg bg-accent/10 border border-accent/20 flex items-center gap-3">
        <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-slate-700 font-medium">
          We value your time. Our team typically responds within{' '}
          <span className="font-bold text-primary">1 business day</span>.
        </p>
      </div>
    </div>
  );
}
