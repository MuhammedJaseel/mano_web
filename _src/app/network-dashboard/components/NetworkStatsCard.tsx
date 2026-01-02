interface NetworkStatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
  subtitle?: string;
}

export default function NetworkStatsCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon,
  subtitle 
}: NetworkStatsCardProps) {
  const changeColorClass = {
    positive: 'text-success',
    negative: 'text-destructive',
    neutral: 'text-muted-foreground'
  }[changeType];

  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-cta-primary transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-headline font-bold text-foreground">{value}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`text-sm font-semibold ${changeColorClass}`}>{change}</span>
        <span className="text-xs text-muted-foreground">vs last 24h</span>
      </div>
    </div>
  );
}