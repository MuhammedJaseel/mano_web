interface NetworkHealthIndicatorProps {
  status: 'healthy' | 'warning' | 'critical';
  uptime: string;
  lastBlock: string;
  blockTime: string;
}

export default function NetworkHealthIndicator({ 
  status, 
  uptime, 
  lastBlock, 
  blockTime 
}: NetworkHealthIndicatorProps) {
  const statusConfig = {
    healthy: {
      color: 'bg-[#059669]',
      text: 'Operational',
      textColor: 'text-[#059669]'
    },
    warning: {
      color: 'bg-[#d97706]',
      text: 'Degraded',
      textColor: 'text-[#d97706]'
    },
    critical: {
      color: 'bg-[#dc2626]',
      text: 'Critical',
      textColor: 'text-[#dc2626]'
    }
  }[status];

  return (
    <div className="bg-[#ffffff] rounded-lg p-6 shadow-[#ffffff] border border-[#e2e8f0]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-headline font-bold text-[#0f172a]">Network Health</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${statusConfig.color} animate-pulse`}></div>
          <span className={`text-sm font-semibold ${statusConfig.textColor}`}>
            {statusConfig.text}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#e2e8f0]/30 rounded-lg p-4">
          <p className="text-xs text-[#475569] mb-1">Uptime</p>
          <p className="text-lg font-bold text-[#0f172a]">{uptime}</p>
        </div>
        <div className="bg-[#e2e8f0]/30 rounded-lg p-4">
          <p className="text-xs text-[#475569] mb-1">Last Block</p>
          <p className="text-lg font-bold text-[#0f172a]">{lastBlock}</p>
        </div>
        <div className="bg-[#e2e8f0]/30 rounded-lg p-4">
          <p className="text-xs text-[#475569] mb-1">Block Time</p>
          <p className="text-lg font-bold text-[#0f172a]">{blockTime}</p>
        </div>
      </div>
    </div>
  );
}