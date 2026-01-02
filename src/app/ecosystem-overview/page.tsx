import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EcosystemInteractive from './components/EcosystemInteractive';

export const metadata: Metadata = {
  title: 'Ecosystem Overview - CryptoVault EVM',
  description: 'Explore the comprehensive ecosystem of DApps, partnerships, and integrations built on CryptoVault EVM network with live metrics and project showcases.',
};

export default function EcosystemOverviewPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      <EcosystemInteractive />
    </main>
  );
}