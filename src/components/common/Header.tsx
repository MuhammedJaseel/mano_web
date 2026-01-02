'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Developer Portal', href: '/developer-portal', icon: 'CodeBracketIcon' },
    { label: 'Network Dashboard', href: '/network-dashboard', icon: 'ChartBarIcon' },
    { label: 'Ecosystem', href: '/ecosystem-overview', icon: 'CubeTransparentIcon' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#ffffff] shadow-md ${className}`}>
      <div className="flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <rect width="40" height="40" rx="8" fill="#0066ff" />
            <path
              d="M20 10L28 15V25L20 30L12 25V15L20 10Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 20L28 15M20 20L12 15M20 20V30"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-headline font-bold text-[#0f172a] hidden sm:block">
            MANO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0f172a] hover:bg-[#e2e8f0] hover:text-[#0066ff] transition-all duration-300"
            >
              <Icon name={item.icon as any} size={20} variant="outline" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/developer-portal"
            className="px-4 py-2 text-sm font-cta font-semibold text-[#0066ff] hover:text-[#0052cc] transition-colors duration-300"
          >
            Documentation
          </Link>
          <Link
            href="/network-dashboard"
            className="px-6 py-2 bg-[#0066ff] text-[#ffffff] rounded-lg text-sm font-cta font-bold hover:bg-[#0052cc] transition-all duration-300 shadow-[#ffffff] hover:shadow-cta-[#0066ff]"
          >
            Start Building
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-lg hover:bg-[#e2e8f0] transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          <Icon
            name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
            size={24}
            variant="outline"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff] border-t border-[#e2e8f0]">
          <nav className="flex flex-col px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-[#0f172a] hover:bg-[#e2e8f0] hover:text-[#0066ff] transition-all duration-300"
              >
                <Icon name={item.icon as any} size={20} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-[#e2e8f0]">
              <Link
                href="/developer-portal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center text-sm font-cta font-semibold text-[#0066ff] hover:bg-[#e2e8f0] rounded-lg transition-all duration-300"
              >
                Documentation
              </Link>
              <Link
                href="/network-dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 bg-[#0066ff] text-[#ffffff] text-center rounded-lg text-sm font-cta font-bold hover:bg-[#0052cc] transition-all duration-300 shadow-[#ffffff]"
              >
                Start Building
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;