import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import NetworkDashboardInteractive from './components/NetworkDashboardInteractive';

export const metadata: Metadata = {
  title: 'Network Dashboard - CryptoVault EVM',
  description: 'Live showcase of CryptoVault EVM network performance and adoption metrics with real-time blockchain data, transaction viewer, and comprehensive network statistics.',
};

export default function NetworkDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h1 className="text-4xl font-headline font-bold text-foreground">
                  Network Dashboard
                </h1>
                <p className="text-lg text-muted-foreground mt-1">
                  Real-time performance metrics and blockchain analytics
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <span>Live Data</span>
              </div>
              <span>•</span>
              <span>Updated every 2 seconds</span>
              <span>•</span>
              <span>Block Height: #8,472,394</span>
            </div>
          </div>

          {/* Interactive Dashboard Components */}
          <NetworkDashboardInteractive />

          {/* Footer Info */}
          <div className="mt-12 bg-card rounded-lg p-6 shadow-card border border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-lg font-headline font-bold text-foreground mb-2">
                  Need More Detailed Analytics?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Access advanced network metrics, historical data, and custom reports through our developer portal.
                </p>
              </div>
              <a
                href="/developer-portal"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-bold hover:bg-cta-blue transition-all duration-300 shadow-card hover:shadow-cta-primary whitespace-nowrap"
              >
                Explore Developer Tools
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="8" fill="var(--color-brand-primary)" />
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
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} CryptoVault EVM. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="/developer-portal" className="hover:text-primary transition-colors duration-300">
                Documentation
              </a>
              <a href="/ecosystem-overview" className="hover:text-primary transition-colors duration-300">
                Ecosystem
              </a>
              <a href="/homepage" className="hover:text-primary transition-colors duration-300">
                Home
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}