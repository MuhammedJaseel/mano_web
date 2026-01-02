import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'CryptoVault EVM - The Future of Decentralized Infrastructure',
  description: 'Experience Ethereum compatibility without limitations. Lightning-fast transactions, ultra-low fees, and enterprise-grade security for the next generation of DeFi applications.',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HomepageInteractive />
      </main>
    </>
  );
}