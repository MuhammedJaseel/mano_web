import Icon from '@/components/ui/AppIcon';

interface ValidatorInfo {
  totalValidators: number;
  activeValidators: number;
  totalStaked: string;
  averageAPY: string;
  minStake: string;
}

interface ValidatorStatsProps {
  validatorInfo: ValidatorInfo;
}

export default function ValidatorStats({ validatorInfo }: ValidatorStatsProps) {
  const stats = [
    {
      label: 'Total Validators',
      value: validatorInfo.totalValidators.toLocaleString(),
      icon: 'ServerIcon',
      color: 'text-primary'
    },
    {
      label: 'Active Validators',
      value: validatorInfo.activeValidators.toLocaleString(),
      icon: 'CheckBadgeIcon',
      color: 'text-success'
    },
    {
      label: 'Total Staked',
      value: validatorInfo.totalStaked,
      icon: 'CurrencyDollarIcon',
      color: 'text-accent'
    },
    {
      label: 'Average APY',
      value: validatorInfo.averageAPY,
      icon: 'ChartBarIcon',
      color: 'text-warning'
    }
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-headline font-bold text-foreground">Validator Network</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-semibold hover:bg-cta-blue transition-all duration-300 shadow-card">
          <Icon name="PlusIcon" size={16} variant="outline" />
          <span>Become Validator</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name={stat.icon as any} size={20} variant="outline" className={stat.color} />
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Minimum Stake Requirement</p>
            <p className="text-sm text-muted-foreground">
              To become a validator, you need to stake a minimum of <span className="font-bold text-primary">{validatorInfo.minStake}</span> tokens. 
              Validators earn rewards for securing the network and processing transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}