import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  name: string;
  category: string;
  status: string;
  tvl: string;
  transactions: string;
  users: string;
}

interface EcosystemStatsProps {
  projects: Project[];
}

const EcosystemStats = ({ projects }: EcosystemStatsProps) => {
  const liveProjects = projects.filter(p => p.status === 'live').length;
  
  const totalTVL = projects.reduce((sum, project) => {
    const tvlValue = project.tvl.replace(/[$M,]/g, '');
    return sum + (tvlValue !== 'N/A' && tvlValue !== '0' ? parseFloat(tvlValue) : 0);
  }, 0);
  
  const totalTransactions = projects.reduce((sum, project) => {
    const txValue = project.transactions.replace(/[M,K]/g, '');
    const multiplier = project.transactions.includes('M') ? 1000000 : project.transactions.includes('K') ? 1000 : 1;
    return sum + (txValue !== '0' ? parseFloat(txValue) * multiplier : 0);
  }, 0);
  
  const totalUsers = projects.reduce((sum, project) => {
    const userValue = project.users.replace(/[K,]/g, '');
    return sum + (userValue !== '0' ? parseFloat(userValue) * 1000 : 0);
  }, 0);

  const stats = [
    {
      icon: 'CubeIcon',
      label: 'Live DApps',
      value: liveProjects.toString(),
      change: '+12 this month',
      color: 'text-[#0066ff]'
    },
    {
      icon: 'CurrencyDollarIcon',
      label: 'Total Value Locked',
      value: `$${totalTVL.toFixed(1)}M`,
      change: '+23% growth',
      color: 'text-[#2ecc71]'
    },
    {
      icon: 'ArrowPathIcon',
      label: 'Total Transactions',
      value: `${(totalTransactions / 1000000).toFixed(1)}M`,
      change: '+45% this week',
      color: 'text-[#00d4aa]'
    },
    {
      icon: 'UsersIcon',
      label: 'Active Users',
      value: `${(totalUsers / 1000).toFixed(0)}K`,
      change: '+18% monthly',
      color: 'text-conversion-[#3b82f6]'
    }
  ];

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#ffffff] border border-[#e2e8f0] rounded-xl p-6 hover:shadow-[#ffffff] transition-all duration-300 hover:border-[#0066ff]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-[#e2e8f0] ${stat.color}`}>
                  <Icon name={stat.icon as any} size={24} variant="solid" />
                </div>
              </div>
              <h3 className="text-3xl font-headline font-bold text-[#0f172a] mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-[#475569] mb-2">{stat.label}</p>
              <div className="flex items-center space-x-1 text-xs text-[#2ecc71]">
                <Icon name="ArrowTrendingUpIcon" size={14} variant="solid" />
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemStats;