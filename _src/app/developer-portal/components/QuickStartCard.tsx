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
    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-headline font-bold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-primary font-bold text-sm mt-0.5">
              {index + 1}.
            </span>
            <span className="text-sm text-foreground">{step}</span>
          </div>
        ))}
      </div>
      <a
        href={ctaLink}
        className="inline-block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-semibold hover:bg-cta-blue transition-all duration-300"
      >
        {ctaText}
      </a>
    </div>
  );
}