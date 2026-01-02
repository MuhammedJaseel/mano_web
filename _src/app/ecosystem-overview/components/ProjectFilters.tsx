'use client';

import Icon from '@/components/ui/AppIcon';

interface ProjectFiltersProps {
  categories: string[];
  statuses: string[];
  selectedCategory: string;
  selectedStatus: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
  onSearchChange: (query: string) => void;
}

const ProjectFilters = ({
  categories,
  statuses,
  selectedCategory,
  selectedStatus,
  searchQuery,
  onCategoryChange,
  onStatusChange,
  onSearchChange
}: ProjectFiltersProps) => {
  return (
    <section className="py-8 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Search */}
          <div className="w-full lg:w-96">
            <div className="relative">
              <Icon
                name="MagnifyingGlassIcon"
                size={20}
                variant="outline"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-2">Category:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-card'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-2">Status:</span>
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedStatus === status
                    ? 'bg-primary text-primary-foreground shadow-card'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;