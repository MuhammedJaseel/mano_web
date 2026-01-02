import Icon from '@/components/ui/AppIcon';

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-cta-primary transition-all duration-300 border border-border group">
      <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon name={feature.icon as any} size={32} variant="outline" className="text-white" />
      </div>
      <h3 className="text-xl font-headline font-bold text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  );
}