'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchResult {
  title: string;
  category: string;
  url: string;
}

export default function SearchBar() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const mockSearchData: SearchResult[] = [
    { title: 'Getting Started Guide', category: 'Documentation', url: '/developer-portal' },
    { title: 'Smart Contract Deployment', category: 'Documentation', url: '/developer-portal' },
    { title: 'Network Statistics', category: 'Dashboard', url: '/network-dashboard' },
    { title: 'DeFi Projects', category: 'Ecosystem', url: '/ecosystem-overview' },
    { title: 'Staking Guide', category: 'Documentation', url: '/developer-portal' },
    { title: 'Gas Fee Optimization', category: 'Documentation', url: '/developer-portal' },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    if (searchQuery.length > 0) {
      const filtered = mockSearchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery, isHydrated]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  if (!isHydrated) {
    return (
      <div className="relative w-full max-w-2xl">
        <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Icon 
          name="MagnifyingGlassIcon" 
          size={20} 
          variant="outline" 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search documentation, projects, or features..."
          className="w-full pl-12 pr-4 py-3 bg-card border border-input rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-cta-primary max-h-80 overflow-y-auto z-50">
          {results.map((result, index) => (
            <a
              key={index}
              href={result.url}
              onClick={handleResultClick}
              className="flex items-center justify-between p-4 hover:bg-muted transition-colors duration-200 border-b border-border last:border-b-0"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{result.title}</p>
                <p className="text-xs text-muted-foreground">{result.category}</p>
              </div>
              <Icon name="ChevronRightIcon" size={16} variant="outline" className="text-muted-foreground" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}