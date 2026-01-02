import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import DeveloperPortalInteractive from './components/DeveloperPortalInteractive';

export const metadata: Metadata = {
  title: 'Developer Portal - MANO',
  description: 'Comprehensive technical documentation, APIs, SDKs, testnet access, and developer grants for building on CryptoVault EVM blockchain network.',
};

export default function DeveloperPortalPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <DeveloperPortalInteractive />
      </main>
    </>
  );
}