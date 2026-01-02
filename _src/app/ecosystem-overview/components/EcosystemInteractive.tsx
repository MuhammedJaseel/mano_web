'use client';

import { useState, useEffect } from 'react';
import EcosystemHero from './EcosystemHero';
import EcosystemStats from './EcosystemStats';
import ProjectFilters from './ProjectFilters';
import ProjectGrid from './ProjectGrid';
import PartnershipTimeline from './PartnershipTimeline';
import TestimonialSection from './TestimonialSection';
import IndustryRecognition from './IndustryRecognition';
import PartnershipInquiry from './PartnershipInquiry';

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  logoAlt: string;
  status: 'live' | 'testnet' | 'development';
  tvl: string;
  transactions: string;
  users: string;
  website: string;
  featured: boolean;
}

interface Partnership {
  id: number;
  partner: string;
  type: string;
  date: string;
  description: string;
  logo: string;
  logoAlt: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  quote: string;
  rating: number;
}

interface Recognition {
  id: number;
  title: string;
  source: string;
  date: string;
  type: 'media' | 'award' | 'conference';
  image: string;
  imageAlt: string;
  link: string;
}

const EcosystemInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects: Project[] = [
  {
    id: 1,
    name: 'VaultSwap DEX',
    category: 'DeFi',
    description: 'Leading decentralized exchange with automated market making and liquidity pools offering the lowest fees on CryptoVault EVM.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d693957d-1767194657584.png",
    logoAlt: 'Blue and purple gradient abstract logo representing decentralized exchange',
    status: 'live',
    tvl: '$45.2M',
    transactions: '2.3M',
    users: '125K',
    website: 'https://vaultswap.example',
    featured: true
  },
  {
    id: 2,
    name: 'CryptoLend Protocol',
    category: 'DeFi',
    description: 'Decentralized lending and borrowing platform with competitive interest rates and collateralized loans.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d172c71e-1767194659277.png",
    logoAlt: 'Green circular logo with interconnected nodes representing lending protocol',
    status: 'live',
    tvl: '$32.8M',
    transactions: '890K',
    users: '67K',
    website: 'https://cryptolend.example',
    featured: true
  },
  {
    id: 3,
    name: 'NFT Marketplace Pro',
    category: 'NFT',
    description: 'Premier NFT marketplace for digital art, collectibles, and gaming assets with zero gas fees for listings.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_187dfce94-1764853230512.png",
    logoAlt: 'Colorful hexagonal logo with digital art motifs for NFT marketplace',
    status: 'live',
    tvl: '$18.5M',
    transactions: '1.5M',
    users: '89K',
    website: 'https://nftpro.example',
    featured: true
  },
  {
    id: 4,
    name: 'GameVault Studios',
    category: 'Gaming',
    description: 'Play-to-earn gaming ecosystem with multiple blockchain games and in-game asset trading.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_189a0b452-1767194660370.png",
    logoAlt: 'Orange and black gaming controller logo for blockchain gaming platform',
    status: 'live',
    tvl: '$12.3M',
    transactions: '3.2M',
    users: '156K',
    website: 'https://gamevault.example',
    featured: false
  },
  {
    id: 5,
    name: 'StableVault',
    category: 'DeFi',
    description: 'Algorithmic stablecoin protocol maintaining peg through innovative collateralization mechanisms.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15691c6ab-1767194658321.png",
    logoAlt: 'Silver shield logo representing stable cryptocurrency protocol',
    status: 'testnet',
    tvl: '$8.7M',
    transactions: '450K',
    users: '34K',
    website: 'https://stablevault.example',
    featured: false
  },
  {
    id: 6,
    name: 'CrossChain Bridge',
    category: 'Infrastructure',
    description: 'Secure cross-chain bridge enabling seamless asset transfers between CryptoVault EVM and other networks.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c11ba954-1767194659783.png",
    logoAlt: 'Teal bridge icon connecting two blockchain networks',
    status: 'live',
    tvl: '$56.4M',
    transactions: '678K',
    users: '45K',
    website: 'https://bridge.example',
    featured: true
  },
  {
    id: 7,
    name: 'DAO Governance Hub',
    category: 'Governance',
    description: 'Comprehensive DAO management platform with proposal creation, voting, and treasury management.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17712b42e-1767194658002.png",
    logoAlt: 'Purple circular logo with voting symbols for DAO governance',
    status: 'live',
    tvl: '$23.1M',
    transactions: '234K',
    users: '28K',
    website: 'https://daohub.example',
    featured: false
  },
  {
    id: 8,
    name: 'MetaVault Wallet',
    category: 'Infrastructure',
    description: 'Next-generation non-custodial wallet with built-in DApp browser and hardware wallet support.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_149e59688-1764643919491.png",
    logoAlt: 'Blue wallet icon with security lock for cryptocurrency wallet',
    status: 'live',
    tvl: 'N/A',
    transactions: '5.6M',
    users: '234K',
    website: 'https://metavault.example',
    featured: true
  },
  {
    id: 9,
    name: 'YieldFarm Aggregator',
    category: 'DeFi',
    description: 'Automated yield optimization platform aggregating best farming opportunities across the ecosystem.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_146543535-1767194657961.png",
    logoAlt: 'Green plant growth logo representing yield farming',
    status: 'development',
    tvl: '$0',
    transactions: '0',
    users: '0',
    website: 'https://yieldfarm.example',
    featured: false
  },
  {
    id: 10,
    name: 'Insurance Protocol',
    category: 'DeFi',
    description: 'Decentralized insurance coverage for smart contract risks and protocol failures.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b0c38730-1767194660687.png",
    logoAlt: 'Red shield with checkmark for insurance protocol',
    status: 'testnet',
    tvl: '$4.2M',
    transactions: '12K',
    users: '3.5K',
    website: 'https://insurance.example',
    featured: false
  },
  {
    id: 11,
    name: 'Social DApp Network',
    category: 'Social',
    description: 'Decentralized social media platform with token-gated communities and NFT profile pictures.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4a52f63-1767194657983.png",
    logoAlt: 'Pink chat bubble logo for decentralized social network',
    status: 'live',
    tvl: 'N/A',
    transactions: '4.8M',
    users: '178K',
    website: 'https://socialdapp.example',
    featured: false
  },
  {
    id: 12,
    name: 'Analytics Dashboard',
    category: 'Infrastructure',
    description: 'Real-time blockchain analytics and data visualization platform for developers and traders.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13fb8a6c9-1767194656468.png",
    logoAlt: 'Blue chart and graph logo for analytics platform',
    status: 'live',
    tvl: 'N/A',
    transactions: '890K',
    users: '56K',
    website: 'https://analytics.example',
    featured: false
  }];


  const partnerships: Partnership[] = [
  {
    id: 1,
    partner: 'Chainlink',
    type: 'Oracle Integration',
    date: '2025-01-15',
    description: 'Integrated Chainlink price feeds for reliable DeFi oracle data across the ecosystem.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11842cb6c-1767194657979.png",
    logoAlt: 'Blue hexagonal Chainlink oracle network logo'
  },
  {
    id: 2,
    partner: 'Binance',
    type: 'Exchange Listing',
    date: '2024-11-20',
    description: 'Native token listed on Binance with multiple trading pairs and staking support.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13656b148-1766555252519.png",
    logoAlt: 'Gold and black Binance cryptocurrency exchange logo'
  },
  {
    id: 3,
    partner: 'Ledger',
    type: 'Hardware Wallet',
    date: '2024-10-05',
    description: 'Full integration with Ledger hardware wallets for secure asset storage.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14f9b76cb-1766978013486.png",
    logoAlt: 'Black Ledger hardware wallet device logo'
  },
  {
    id: 4,
    partner: 'The Graph',
    type: 'Indexing Protocol',
    date: '2024-09-12',
    description: 'Subgraph support for efficient blockchain data querying and indexing.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19367bb07-1767194658601.png",
    logoAlt: 'Purple gradient The Graph protocol logo'
  },
  {
    id: 5,
    partner: 'Coinbase Wallet',
    type: 'Wallet Integration',
    date: '2024-08-28',
    description: 'Native support in Coinbase Wallet for seamless user onboarding.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a482f5ac-1764870211152.png",
    logoAlt: 'Blue Coinbase wallet application logo'
  },
  {
    id: 6,
    partner: 'Certik',
    type: 'Security Audit',
    date: '2024-07-15',
    description: 'Comprehensive security audit of core protocol and smart contracts.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e686578f-1767194659046.png",
    logoAlt: 'Red shield Certik security audit logo'
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Lead Developer',
    company: 'VaultSwap DEX',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1554dff02-1763296711868.png",
    imageAlt: 'Asian woman with long black hair in white shirt smiling at camera in modern office',
    quote: 'CryptoVault EVM has been a game-changer for our DEX. The low gas fees and fast finality allow us to provide the best trading experience in DeFi. Migration from Ethereum was seamless thanks to full EVM compatibility.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Founder & CEO',
    company: 'GameVault Studios',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11409ffe9-1763296244865.png",
    imageAlt: 'Hispanic man with short dark hair in black blazer smiling confidently',
    quote: 'Building our play-to-earn games on CryptoVault EVM was the best decision. The network handles millions of microtransactions daily without breaking a sweat. Our players love the instant confirmations and negligible fees.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Thompson',
    role: 'CTO',
    company: 'NFT Marketplace Pro',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1cf02ab-1763294013918.png",
    imageAlt: 'Caucasian woman with blonde hair in blue business suit smiling professionally',
    quote: 'The developer tools and documentation are outstanding. We launched our NFT marketplace in record time. The community support and grant program helped us scale faster than we imagined possible.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Protocol Architect',
    company: 'CryptoLend Protocol',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a41f60e-1763294900500.png",
    imageAlt: 'Asian man with glasses in gray sweater looking thoughtful in office setting',
    quote: 'CryptoVault EVM offers the perfect balance of security, speed, and cost-efficiency. Our lending protocol processes thousands of transactions daily with zero issues. The validator network is incredibly reliable.',
    rating: 5
  }];


  const recognitions: Recognition[] = [
  {
    id: 1,
    title: 'Top 10 Emerging Blockchain Networks of 2024',
    source: 'CoinDesk',
    date: '2024-12-15',
    type: 'media',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e389a75-1767092088385.png",
    imageAlt: 'Newspaper and coffee on wooden desk representing media coverage',
    link: 'https://coindesk.example'
  },
  {
    id: 2,
    title: 'Best EVM-Compatible Network Award',
    source: 'Blockchain Summit 2024',
    date: '2024-11-08',
    type: 'award',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10ea757d7-1764677057503.png",
    imageAlt: 'Gold trophy award on black pedestal with spotlight',
    link: 'https://blockchainsummit.example'
  },
  {
    id: 3,
    title: 'Featured Speaker at ETHGlobal Conference',
    source: 'ETHGlobal',
    date: '2024-10-22',
    type: 'conference',
    image: "https://images.unsplash.com/photo-1625638877505-b7a3fc705b67",
    imageAlt: 'Large conference hall with audience and stage presentation',
    link: 'https://ethglobal.example'
  },
  {
    id: 4,
    title: 'Breakthrough Technology in Blockchain Scalability',
    source: 'Forbes Crypto',
    date: '2024-09-30',
    type: 'media',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    imageAlt: 'Modern office desk with laptop showing financial charts and graphs',
    link: 'https://forbes.example'
  },
  {
    id: 5,
    title: 'Innovation Excellence Award',
    source: 'Crypto Innovation Awards',
    date: '2024-08-18',
    type: 'award',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5b634fe-1766561523358.png",
    imageAlt: 'Team celebrating with trophy in modern office space',
    link: 'https://cryptoawards.example'
  },
  {
    id: 6,
    title: 'Keynote: The Future of Decentralized Finance',
    source: 'DeFi Summit Asia',
    date: '2024-07-05',
    type: 'conference',
    image: "https://images.unsplash.com/photo-1590674680695-8b9efe9b764d",
    imageAlt: 'Speaker presenting on stage with large screen behind showing blockchain graphics',
    link: 'https://defisummit.example'
  }];


  const categories = ['all', 'DeFi', 'NFT', 'Gaming', 'Infrastructure', 'Governance', 'Social'];
  const statuses = ['all', 'live', 'testnet', 'development'];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    const searchMatch = searchQuery === '' ||
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && statusMatch && searchMatch;
  });

  if (!isHydrated) {
    return (
      <div className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="h-32 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-64 bg-muted rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="pt-16">
      <EcosystemHero />
      <EcosystemStats projects={projects} />
      <ProjectFilters
        categories={categories}
        statuses={statuses}
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onStatusChange={setSelectedStatus}
        onSearchChange={setSearchQuery} />

      <ProjectGrid projects={filteredProjects} />
      <PartnershipTimeline partnerships={partnerships} />
      <TestimonialSection testimonials={testimonials} />
      <IndustryRecognition recognitions={recognitions} />
      <PartnershipInquiry />
    </div>);

};

export default EcosystemInteractive;