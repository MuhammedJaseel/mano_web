import AppImage from '@/components/ui/AppImage';

interface EcosystemProject {
  name: string;
  category: string;
  description: string;
  logo: string;
  alt: string;
  tvl: string;
}

interface EcosystemProjectCardProps {
  project: EcosystemProject;
}

export default function EcosystemProjectCard({ project }: EcosystemProjectCardProps) {
  return (
    <div className="bg-[#ffffff] rounded-xl p-6 shadow-[#ffffff] hover:shadow-cta-[#0066ff] transition-all duration-300 border border-[#e2e8f0]">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#e2e8f0]">
          <AppImage 
            src={project.logo} 
            alt={project.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-headline font-bold text-[#0f172a] mb-1 truncate">{project.name}</h4>
          <span className="inline-block px-3 py-1 bg-[#0066ff]/10 text-[#0066ff] text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <p className="text-sm text-[#475569] mb-4 line-clamp-2">{project.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0]">
        <span className="text-xs text-[#475569] font-medium">Total Value Locked</span>
        <span className="text-sm font-bold text-[#059669]">{project.tvl}</span>
      </div>
    </div>
  );
}