'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import NetworkMetricsCard from './NetworkMetricsCard';
import FeatureCard from './FeatureCard';
import EcosystemProjectCard from './EcosystemProjectCard';
import SecurityBadge from './SecurityBadge';
import NetworkCalculator from './NetworkCalculator';
import LiveMetricsFeed from './LiveMetricsFeed';
import SearchBar from './SearchBar';

interface NetworkMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface EcosystemProject {
  name: string;
  category: string;
  description: string;
  logo: string;
  alt: string;
  tvl: string;
}

interface SecurityAudit {
  name: string;
  status: string;
  icon: string;
}

export default function HomepageInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [tokenPrice, setTokenPrice] = useState('$0.00');

  useEffect(() => {
    setIsHydrated(true);
    setTokenPrice('$2.47');
  }, []);

  const networkMetrics: NetworkMetric[] = [
  { label: 'Total Value Locked', value: '$1.3B', change: '+12.5%', trend: 'up', icon: '💰' },
  { label: 'Active Validators', value: '2,847', change: '+8.3%', trend: 'up', icon: '🔐' },
  { label: 'Daily Transactions', value: '4.2M', change: '+15.7%', trend: 'up', icon: '⚡' },
  { label: 'Network TPS', value: '12,500', change: '+5.2%', trend: 'up', icon: '🚀' }];


  const features: Feature[] = [
  {
    title: 'EVM Compatible',
    description: 'Seamlessly deploy your existing Ethereum smart contracts without any modifications. Full compatibility with Solidity and all EVM tools.',
    icon: 'CodeBracketIcon',
    color: 'bg-primary'
  },
  {
    title: 'Lightning Fast',
    description: 'Experience sub-second finality with our optimized consensus mechanism. Process thousands of transactions per second with minimal latency.',
    icon: 'BoltIcon',
    color: 'bg-warning'
  },
  {
    title: 'Ultra Low Fees',
    description: 'Save up to 95% on gas fees compared to Ethereum mainnet. Make DeFi accessible to everyone with transaction costs under $0.01.',
    icon: 'CurrencyDollarIcon',
    color: 'bg-success'
  },
  {
    title: 'Enterprise Security',
    description: 'Built with security-first architecture. Multiple audits by leading firms, bug bounty program, and continuous monitoring.',
    icon: 'ShieldCheckIcon',
    color: 'bg-destructive'
  }];


  const ecosystemProjects: EcosystemProject[] = [
  {
    name: 'VaultSwap DEX',
    category: 'DeFi',
    description: 'Leading decentralized exchange with automated market making and yield farming opportunities.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11f6a69de-1764666384923.png",
    alt: 'Abstract blue and purple gradient representing decentralized exchange trading interface',
    tvl: '$245M'
  },
  {
    name: 'CryptoLend Protocol',
    category: 'Lending',
    description: 'Decentralized lending and borrowing platform with competitive interest rates and instant liquidity.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe73325e-1765318888016.png",
    alt: 'Digital financial chart with green growth indicators showing lending protocol performance',
    tvl: '$182M'
  },
  {
    name: 'NFT Marketplace',
    category: 'NFT',
    description: 'Premier marketplace for digital collectibles with zero platform fees and creator royalties.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_187dfce94-1764853230512.png",
    alt: 'Colorful digital art gallery showcasing NFT marketplace collection interface',
    tvl: '$98M'
  }];


  const securityAudits: SecurityAudit[] = [
  { name: 'CertiK Audit', status: 'Verified', icon: 'ShieldCheckIcon' },
  { name: 'Quantstamp', status: 'Passed', icon: 'CheckBadgeIcon' },
  { name: 'Trail of Bits', status: 'Approved', icon: 'LockClosedIcon' }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-screen bg-muted"></div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Utility Bar */}
      <div className="sticky top-16 z-40 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-foreground">Network Status: Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CurrencyDollarIcon" size={16} variant="solid" className="text-primary" />
                <span className="text-sm font-semibold text-foreground">CVLT: {tokenPrice}</span>
                <span className="text-xs text-success">+5.2%</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/network-dashboard" className="text-sm font-semibold text-primary hover:text-cta-blue transition-colors duration-300">
                View Dashboard
              </Link>
              <Link href="/developer-portal" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-bold hover:bg-cta-blue transition-all duration-300">
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
              The Future of <span className="text-primary">Decentralized</span> Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Ethereum compatibility without the limitations. Built for the next generation of DeFi with lightning-fast transactions and ultra-low fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/developer-portal" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-cta font-bold hover:bg-cta-blue transition-all duration-300 shadow-cta-primary">
                Get Started
              </Link>
              <Link href="/ecosystem-overview" className="px-8 py-4 bg-card text-foreground border-2 border-primary rounded-lg text-lg font-cta font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Explore Ecosystem
              </Link>
            </div>
            <div className="flex justify-center">
              <SearchBar />
            </div>
          </div>

          {/* Network Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {networkMetrics.map((metric, index) =>
            <NetworkMetricsCard key={index} metric={metric} />
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-headline font-bold text-foreground mb-4">
              Why Choose CryptoVault EVM?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built by developers, for developers. Experience the perfect balance of performance, security, and compatibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) =>
            <FeatureCard key={index} feature={feature} />
            )}
          </div>
        </div>
      </section>

      {/* Network Calculator Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-headline font-bold text-foreground mb-4">
              Calculate Your Savings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how much you can save on gas fees by switching to CryptoVault EVM
            </p>
          </div>
          <NetworkCalculator />
        </div>
      </section>

      {/* Ecosystem Projects Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-5xl font-headline font-bold text-foreground mb-4">
                Thriving Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground">
                Join 500+ projects building the future of DeFi
              </p>
            </div>
            <Link href="/ecosystem-overview" className="hidden lg:flex items-center space-x-2 text-primary hover:text-cta-blue font-semibold transition-colors duration-300">
              <span>View All Projects</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {ecosystemProjects.map((project, index) =>
            <EcosystemProjectCard key={index} project={project} />
            )}
          </div>
          <div className="text-center lg:hidden">
            <Link href="/ecosystem-overview" className="inline-flex items-center space-x-2 text-primary hover:text-cta-blue font-semibold transition-colors duration-300">
              <span>View All Projects</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live Metrics & Security Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LiveMetricsFeed />
            <div>
              <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
                Enterprise-Grade Security
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our network has undergone rigorous security audits by industry-leading firms. We maintain the highest standards of security with continuous monitoring and a robust bug bounty program.
              </p>
              <div className="space-y-4 mb-6">
                {securityAudits.map((audit, index) =>
                <SecurityBadge key={index} audit={audit} />
                )}
              </div>
              <Link href="/developer-portal" className="inline-flex items-center space-x-2 text-primary hover:text-cta-blue font-semibold transition-colors duration-300">
                <span>View Security Reports</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-headline font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of developers building on the most advanced EVM-compatible network. Get started in minutes with our comprehensive documentation and developer tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/developer-portal" className="px-8 py-4 bg-white text-primary rounded-lg text-lg font-cta font-bold hover:bg-gray-100 transition-all duration-300 shadow-cta-primary">
              Start Building Now
            </Link>
            <Link href="/network-dashboard" className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg text-lg font-cta font-bold hover:bg-white hover:text-primary transition-all duration-300">
              View Network Stats
            </Link>
          </div>
        </div>
      </section>
    </div>);

}