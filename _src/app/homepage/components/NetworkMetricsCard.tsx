interface NetworkMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

interface NetworkMetricsCardProps {
  metric: NetworkMetric;
}

export default function NetworkMetricsCard({ metric }: NetworkMetricsCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-cta-primary transition-all duration-300 border border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-2xl">{metric.icon}</span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
            <p className="text-2xl font-headline font-bold text-foreground mt-1">{metric.value}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`text-sm font-semibold ${metric.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
          {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
        </span>
        <span className="text-xs text-muted-foreground">vs last 24h</span>
      </div>
    </div>
  );
}