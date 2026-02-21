import Link from 'next/link';

export default function ServiceCard({
  title,
  description,
  features,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl">
      <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mb-6 flex-1 text-slate-600">{description}</p>
      <div className="mt-auto">
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-accent bg-transparent px-6 py-3 text-sm font-bold text-accent transition-all hover:bg-accent hover:text-white"
        >
          <span>Book a Consultation</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
