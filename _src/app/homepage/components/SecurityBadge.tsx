import Icon from '@/components/ui/AppIcon';

interface SecurityAudit {
  name: string;
  status: string;
  icon: string;
}

interface SecurityBadgeProps {
  audit: SecurityAudit;
}

export default function SecurityBadge({ audit }: SecurityBadgeProps) {
  return (
    <div className="flex items-center space-x-3 bg-success/10 rounded-lg px-4 py-3 border border-success/20">
      <Icon name={audit.icon as any} size={24} variant="solid" className="text-success" />
      <div>
        <p className="text-sm font-semibold text-foreground">{audit.name}</p>
        <p className="text-xs text-success">{audit.status}</p>
      </div>
    </div>
  );
}