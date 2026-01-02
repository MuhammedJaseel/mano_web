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
    positive: 'text-[#059669]',
    negative: 'text-[#dc2626]',
    neutral: 'text-[#475569]'
  }[changeType];

  return (
    <div className="bg-[#ffffff] rounded-lg p-6 shadow-[#ffffff] border border-[#e2e8f0] hover:shadow-cta-[#0066ff] transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-[#475569] mb-1">{title}</p>
          <h3 className="text-3xl font-headline font-bold text-[#0f172a]">{value}</h3>
          {subtitle && (
            <p className="text-xs text-[#475569] mt-1">{subtitle}</p>
          )}
        </div>
        <div className="w-12 h-12 rounded-lg bg-[#0066ff]/10 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`text-sm font-semibold ${changeColorClass}`}>{change}</span>
        <span className="text-xs text-[#475569]">vs last 24h</span>
      </div>
    </div>
  );
}