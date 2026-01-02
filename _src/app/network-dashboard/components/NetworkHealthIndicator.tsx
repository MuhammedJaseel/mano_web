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
      color: 'bg-success',
      text: 'Operational',
      textColor: 'text-success'
    },
    warning: {
      color: 'bg-warning',
      text: 'Degraded',
      textColor: 'text-warning'
    },
    critical: {
      color: 'bg-destructive',
      text: 'Critical',
      textColor: 'text-destructive'
    }
  }[status];

  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-headline font-bold text-foreground">Network Health</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${statusConfig.color} animate-pulse`}></div>
          <span className={`text-sm font-semibold ${statusConfig.textColor}`}>
            {statusConfig.text}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Uptime</p>
          <p className="text-lg font-bold text-foreground">{uptime}</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Last Block</p>
          <p className="text-lg font-bold text-foreground">{lastBlock}</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Block Time</p>
          <p className="text-lg font-bold text-foreground">{blockTime}</p>
        </div>
      </div>
    </div>
  );
}