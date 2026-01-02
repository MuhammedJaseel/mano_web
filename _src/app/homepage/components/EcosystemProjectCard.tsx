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
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-cta-primary transition-all duration-300 border border-border">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
          <AppImage 
            src={project.logo} 
            alt={project.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-headline font-bold text-foreground mb-1 truncate">{project.name}</h4>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground font-medium">Total Value Locked</span>
        <span className="text-sm font-bold text-success">{project.tvl}</span>
      </div>
    </div>
  );
}