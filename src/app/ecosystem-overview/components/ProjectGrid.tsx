import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  logoAlt: string;
  status: 'live' | 'testnet' | 'development';
  tvl: string;
  transactions: string;
  users: string;
  website: string;
  featured: boolean;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-[#2ecc71]/10 text-[#2ecc71] border-[#2ecc71]/30';
      case 'testnet':
        return 'bg-[#d97706]/10 text-[#d97706] border-[#d97706]/30';
      case 'development':
        return 'bg-[#e2e8f0] text-[#475569] border-[#e2e8f0]';
      default:
        return 'bg-[#e2e8f0] text-[#475569] border-[#e2e8f0]';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'DeFi':
        return 'CurrencyDollarIcon';
      case 'NFT':
        return 'PhotoIcon';
      case 'Gaming':
        return 'PuzzlePieceIcon';
      case 'Infrastructure':
        return 'ServerIcon';
      case 'Governance':
        return 'ShieldCheckIcon';
      case 'Social':
        return 'ChatBubbleLeftRightIcon';
      default:
        return 'CubeIcon';
    }
  };

  if (projects.length === 0) {
    return (
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center py-16">
            <Icon name="MagnifyingGlassIcon" size={64} variant="outline" className="mx-auto text-[#475569] mb-4" />
            <h3 className="text-2xl font-headline font-bold text-[#0f172a] mb-2">No Projects Found</h3>
            <p className="text-[#475569]">Try adjusting your filters or search query</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-[#0f172a] mb-4">
            Ecosystem Projects
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Discover the innovative DApps and protocols building on CryptoVault EVM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-[#ffffff] border rounded-xl overflow-hidden hover:shadow-cta-[#0066ff] transition-all duration-300 group ${
                project.featured ? 'border-[#0066ff]/50 shadow-[#ffffff]' : 'border-[#e2e8f0]'
              }`}
            >
              {/* Project Logo */}
              <div className="relative h-48 overflow-hidden bg-[#e2e8f0]">
                <AppImage
                  src={project.logo}
                  alt={project.logoAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-[#0066ff] text-[#ffffff] px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Icon name="StarIcon" size={14} variant="solid" />
                    <span>Featured</span>
                  </div>
                )}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-headline font-bold text-[#0f172a] group-hover:text-[#0066ff] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-1 px-2 py-1 bg-[#e2e8f0] rounded-lg">
                    <Icon name={getCategoryIcon(project.category) as any} size={16} variant="outline" className="text-[#0066ff]" />
                    <span className="text-xs font-medium text-[#475569]">{project.category}</span>
                  </div>
                </div>

                <p className="text-sm text-[#475569] mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-[#e2e8f0]">
                  <div>
                    <p className="text-xs text-[#475569] mb-1">TVL</p>
                    <p className="text-sm font-bold text-[#0f172a]">{project.tvl}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#475569] mb-1">Transactions</p>
                    <p className="text-sm font-bold text-[#0f172a]">{project.transactions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#475569] mb-1">Users</p>
                    <p className="text-sm font-bold text-[#0f172a]">{project.users}</p>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-[#0066ff] hover:bg-[#0052cc] text-[#ffffff] rounded-lg font-cta font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>View Project</span>
                  <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;