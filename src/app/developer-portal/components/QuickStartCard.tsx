interface QuickStartCardProps {
  title: string;
  description: string;
  icon: string;
  steps: string[];
  ctaText: string;
  ctaLink: string;
}

export default function QuickStartCard({
  title,
  description,
  icon,
  steps,
  ctaText,
  ctaLink,
}: QuickStartCardProps) {
  return (
    <div className="bg-[#ffffff] rounded-xl p-6 border border-[#e2e8f0] hover:border-[#0066ff] transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-[#0066ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-headline font-bold text-[#0f172a] mb-2">
            {title}
          </h3>
          <p className="text-sm text-[#475569]">{description}</p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-[#0066ff] font-bold text-sm mt-0.5">
              {index + 1}.
            </span>
            <span className="text-sm text-[#0f172a]">{step}</span>
          </div>
        ))}
      </div>
      <a
        href={ctaLink}
        className="inline-block w-full text-center px-4 py-2 bg-[#0066ff] text-[#ffffff] rounded-lg text-sm font-cta font-semibold hover:bg-[#0052cc] transition-all duration-300"
      >
        {ctaText}
      </a>
    </div>
  );
}