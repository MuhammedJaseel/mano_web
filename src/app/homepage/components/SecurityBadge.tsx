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
    <div className="flex items-center space-x-3 bg-[#059669]/10 rounded-lg px-4 py-3 border border-[#059669]/20">
      <Icon name={audit.icon as any} size={24} variant="solid" className="text-[#059669]" />
      <div>
        <p className="text-sm font-semibold text-[#0f172a]">{audit.name}</p>
        <p className="text-xs text-[#059669]">{audit.status}</p>
      </div>
    </div>
  );
}