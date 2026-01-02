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
    <div className="bg-[#ffffff] rounded-xl p-6 shadow-[#ffffff] hover:shadow-cta-[#0066ff] transition-all duration-300 border border-[#e2e8f0]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
            <span className="text-2xl">{metric.icon}</span>
          </div>
          <div>
            <p className="text-sm text-[#475569] font-medium">{metric.label}</p>
            <p className="text-2xl font-headline font-bold text-[#0f172a] mt-1">{metric.value}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`text-sm font-semibold ${metric.trend === 'up' ? 'text-[#059669]' : 'text-[#dc2626]'}`}>
          {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
        </span>
        <span className="text-xs text-[#475569]">vs last 24h</span>
      </div>
    </div>
  );
}