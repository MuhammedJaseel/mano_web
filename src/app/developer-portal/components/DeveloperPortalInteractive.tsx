'use client';

import { useState } from 'react';
import QuickStartCard from './QuickStartCard';
import DocumentationSection from './DocumentationSection';
import CodeExample from './CodeExample';
import APIExplorer from './APIExplorer';
import ResourceCard from './ResourceCard';
import GrantProgramCard from './GrantProgramCard';
import TestnetSetup from './TestnetSetup';
import Icon from '@/components/ui/AppIcon';

interface QuickStartData {
  title: string;
  description: string;
  icon: string;
  steps: string[];
  ctaText: string;
  ctaLink: string;
}

interface DocItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface APIEndpoint {
  method: string;
  endpoint: string;
  description: string;
  parameters: {name: string;type: string;required: boolean;}[];
  response: string;
}

interface ResourceData {
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  readTime: string;
  link: string;
}

interface GrantData {
  title: string;
  amount: string;
  description: string;
  requirements: string[];
  deadline: string;
  applicants: number;
}

interface SetupStep {
  title: string;
  description: string;
  command?: string;
  completed: boolean;
}

export default function DeveloperPortalInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('documentation');

  useState(() => {
    setIsHydrated(true);
  });

  const quickStartData: QuickStartData[] = [
  {
    title: "Smart Contract Deployment",
    description: "Deploy your first smart contract to CryptoVault EVM testnet in minutes",
    icon: "📝",
    steps: [
    "Install development environment",
    "Configure network settings",
    "Write and compile contract",
    "Deploy to testnet"],

    ctaText: "Start Deploying",
    ctaLink: "#deploy"
  },
  {
    title: "Web3 Integration",
    description: "Connect your dApp to CryptoVault EVM using Web3.js or Ethers.js",
    icon: "🔌",
    steps: [
    "Install Web3 library",
    "Configure provider",
    "Connect wallet",
    "Interact with contracts"],

    ctaText: "View Integration Guide",
    ctaLink: "#integration"
  },
  {
    title: "API Access",
    description: "Access blockchain data through our comprehensive REST and WebSocket APIs",
    icon: "🚀",
    steps: [
    "Get API credentials",
    "Review documentation",
    "Make first API call",
    "Implement in production"],

    ctaText: "Get API Key",
    ctaLink: "#api"
  }];


  const documentationSections = [
  {
    title: "Core Documentation",
    items: [
    {
      title: "Getting Started",
      description: "Complete guide to building on CryptoVault EVM from scratch",
      icon: "BookOpenIcon",
      link: "#getting-started"
    },
    {
      title: "Network Configuration",
      description: "RPC endpoints, chain IDs, and network parameters",
      icon: "Cog6ToothIcon",
      link: "#network-config"
    },
    {
      title: "Smart Contracts",
      description: "Deploy and interact with Solidity smart contracts",
      icon: "DocumentTextIcon",
      link: "#smart-contracts"
    },
    {
      title: "Web3 Libraries",
      description: "Integration guides for Web3.js, Ethers.js, and more",
      icon: "CodeBracketSquareIcon",
      link: "#web3-libraries"
    },
    {
      title: "Wallet Integration",
      description: "Connect MetaMask, WalletConnect, and other wallets",
      icon: "WalletIcon",
      link: "#wallet-integration"
    },
    {
      title: "Gas Optimization",
      description: "Best practices for reducing transaction costs",
      icon: "BoltIcon",
      link: "#gas-optimization"
    }]

  },
  {
    title: "Advanced Topics",
    items: [
    {
      title: "Cross-Chain Bridges",
      description: "Transfer assets between CryptoVault EVM and other chains",
      icon: "ArrowsRightLeftIcon",
      link: "#bridges"
    },
    {
      title: "Oracle Integration",
      description: "Connect smart contracts to real-world data feeds",
      icon: "SignalIcon",
      link: "#oracles"
    },
    {
      title: "Security Best Practices",
      description: "Audit guidelines and vulnerability prevention",
      icon: "ShieldCheckIcon",
      link: "#security"
    }]

  }];


  const codeExamples = [
  {
    title: "Connect to CryptoVault EVM",
    language: "JavaScript",
    code: `import { ethers } from 'ethers'
;\n\n// Connect to CryptoVault EVM mainnet\nconst provider = new ethers.JsonRpcProvider(\n  'https://rpc.cryptovault-evm.io'\n);\n\n// Get network information\nconst network = await provider.getNetwork();\nconsole.log('Connected to:', network.name);\nconsole.log('Chain ID:', network.chainId);\n\n// Get latest block\nconst blockNumber = await provider.getBlockNumber();\nconsole.log('Latest block:', blockNumber);`
  },
  {
    title: "Deploy Smart Contract",
    language: "Solidity",
    code: `// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\ncontract SimpleStorage {\n    uint256 private storedData;\n    \n    event DataStored(uint256 data);\n    \n    function set(uint256 x) public {\n        storedData = x;\n        emit DataStored(x);\n    }\n    \n    function get() public view returns (uint256) {\n        return storedData;\n    }\n}`
  },
  {
    title: "Interact with Contract",
    language: "JavaScript",
    code: `// Contract ABI and address\nconst contractABI = [...];\nconst contractAddress = '0x...';\n\n// Create contract instance\nconst contract = new ethers.Contract(\n  contractAddress,\n  contractABI,\n  provider\n);\n\n// Read from contract\nconst value = await contract.get();\nconsole.log('Stored value:', value);\n\n// Write to contract (requires signer)\nconst signer = await provider.getSigner();\nconst contractWithSigner = contract.connect(signer);\nconst tx = await contractWithSigner.set(42);\nawait tx.wait();\nconsole.log('Transaction confirmed!');`
  }];


  const apiEndpoints: APIEndpoint[] = [
  {
    method: "GET",
    endpoint: "/api/v1/blocks/latest",
    description: "Get the latest block information",
    parameters: [
    { name: "include_txs", type: "boolean", required: false }],

    response: `{\n  "number": 1234567,\n  "hash": "0xabc...",\n  "timestamp": 1704067161,\n  "transactions": 42,\n  "gasUsed": "8500000",\n  "gasLimit": "30000000"\n}`
  },
  {
    method: "GET",
    endpoint: "/api/v1/transactions/{hash}",
    description: "Get transaction details by hash",
    parameters: [
    { name: "hash", type: "string", required: true }],

    response: `{\n  "hash": "0xdef...",\n  "from": "0x123...",\n  "to": "0x456...",\n  "value": "1000000000000000000",\n  "gasPrice": "20000000000",\n  "status": "success",\n  "blockNumber": 1234567\n}`
  },
  {
    method: "GET",
    endpoint: "/api/v1/address/{address}/balance",
    description: "Get account balance",
    parameters: [
    { name: "address", type: "string", required: true }],

    response: `{\n  "address": "0x789...",\n  "balance": "5000000000000000000",\n  "balanceUSD": 10250.50,\n  "nonce": 15\n}`
  },
  {
    method: "POST",
    endpoint: "/api/v1/transactions/send",
    description: "Broadcast a signed transaction",
    parameters: [
    { name: "signedTx", type: "string", required: true }],

    response: `{\n  "txHash": "0xghi...",\n  "status": "pending",\n  "message": "Transaction submitted successfully"\n}`
  }];


  const resources: ResourceData[] = [
  {
    title: "Building a DeFi Protocol on CryptoVault EVM",
    description: "Learn how to create a decentralized lending protocol with automated market making capabilities",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b9cfc75-1764651774193.png",
    alt: "Abstract digital financial network visualization with blue and purple glowing nodes and connections",
    category: "Tutorial",
    readTime: "15 min read",
    link: "#defi-tutorial"
  },
  {
    title: "Gas Optimization Techniques",
    description: "Advanced strategies to reduce transaction costs and improve smart contract efficiency",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
    alt: "Close-up of computer code on dark screen showing optimization algorithms",
    category: "Best Practices",
    readTime: "10 min read",
    link: "#gas-optimization"
  },
  {
    title: "NFT Marketplace Development",
    description: "Step-by-step guide to building a fully functional NFT marketplace with royalties",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ff3d6a0-1766511958579.png",
    alt: "Colorful digital art NFT gallery display with multiple artworks on virtual walls",
    category: "Tutorial",
    readTime: "20 min read",
    link: "#nft-marketplace"
  },
  {
    title: "Security Audit Checklist",
    description: "Comprehensive checklist for auditing smart contracts before mainnet deployment",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a16261dd-1766504953407.png",
    alt: "Security shield icon on laptop screen with code in background",
    category: "Security",
    readTime: "8 min read",
    link: "#security-audit"
  },
  {
    title: "Cross-Chain Bridge Integration",
    description: "Connect your dApp to multiple blockchains using CryptoVault's bridge protocol",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a15e607b-1764643782417.png",
    alt: "Abstract visualization of interconnected blockchain networks with glowing bridges",
    category: "Integration",
    readTime: "12 min read",
    link: "#bridge-integration"
  },
  {
    title: "Web3 Authentication Patterns",
    description: "Implement secure wallet-based authentication in your decentralized applications",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_177d031cd-1765552528277.png",
    alt: "Digital wallet interface showing authentication and security features",
    category: "Authentication",
    readTime: "10 min read",
    link: "#web3-auth"
  }];


  const grants: GrantData[] = [
  {
    title: "Infrastructure Grant",
    amount: "$50,000",
    description: "Build critical infrastructure tools like block explorers, indexers, or developer tooling",
    requirements: [
    "Open-source project",
    "Detailed technical proposal",
    "Team experience in blockchain development",
    "Milestone-based delivery plan"],

    deadline: "March 31, 2025",
    applicants: 23
  },
  {
    title: "DeFi Innovation Grant",
    amount: "$30,000",
    description: "Create novel DeFi protocols or improve existing financial primitives on CryptoVault EVM",
    requirements: [
    "Unique value proposition",
    "Security audit plan",
    "Go-to-market strategy",
    "Community engagement plan"],

    deadline: "April 15, 2025",
    applicants: 41
  },
  {
    title: "Gaming & NFT Grant",
    amount: "$25,000",
    description: "Develop blockchain games or NFT platforms that showcase CryptoVault's capabilities",
    requirements: [
    "Playable prototype or MVP",
    "User acquisition strategy",
    "Tokenomics design",
    "Community building plan"],

    deadline: "May 1, 2025",
    applicants: 18
  }];


  const testnetSteps: SetupStep[] = [
  {
    title: "Add Network to MetaMask",
    description: "Configure your wallet to connect to CryptoVault EVM testnet",
    command: "Network Name: CryptoVault Testnet | RPC URL: https://testnet-rpc.cryptovault-evm.io | Chain ID: 9999",
    completed: false
  },
  {
    title: "Get Testnet Tokens",
    description: "Request free testnet tokens from our faucet to start testing",
    command: "curl -X POST https://faucet.cryptovault-evm.io/api/claim -d '{\"address\":\"YOUR_ADDRESS\"}'",
    completed: false
  },
  {
    title: "Deploy Test Contract",
    description: "Deploy your first smart contract to the testnet",
    command: "npx hardhat run scripts/deploy.js --network cryptovault-testnet",
    completed: false
  },
  {
    title: "Verify Contract",
    description: "Verify your contract on the testnet block explorer",
    command: "npx hardhat verify --network cryptovault-testnet DEPLOYED_CONTRACT_ADDRESS",
    completed: false
  }];


  const tabs = [
  { id: 'documentation', label: 'Documentation', icon: 'BookOpenIcon' },
  { id: 'api', label: 'API Explorer', icon: 'CommandLineIcon' },
  { id: 'tutorials', label: 'Tutorials', icon: 'AcademicCapIcon' },
  { id: 'grants', label: 'Grants', icon: 'CurrencyDollarIcon' }];


  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a0e1a] via-[#1e293b] to-[#0a0e27] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-white mb-4">
              Developer Portal
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale on CryptoVault EVM. From documentation to grants, we support developers at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="DocumentTextIcon" size={24} variant="outline" className="text-[#00d4aa]" />
                <h3 className="text-lg font-headline font-bold text-white">
                  Comprehensive Docs
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Detailed guides, API references, and code examples
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="RocketLaunchIcon" size={24} variant="outline" className="text-[#00d4aa]" />
                <h3 className="text-lg font-headline font-bold text-white">
                  Quick Start
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Deploy your first contract in under 10 minutes
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="CurrencyDollarIcon" size={24} variant="outline" className="text-[#00d4aa]" />
                <h3 className="text-lg font-headline font-bold text-white">
                  Developer Grants
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Up to $50,000 in funding for innovative projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-[#0f172a] mb-4">
              Quick Start Guides
            </h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Choose your path and start building on CryptoVault EVM today
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickStartData.map((item, index) =>
            <QuickStartCard key={index} {...item} />
            )}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#e2e8f0]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) =>
            <button
              key={tab.id}
              onClick={() => isHydrated && setActiveTab(tab.id)}
              disabled={!isHydrated}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-cta font-semibold transition-all duration-300 disabled:opacity-50 ${
              activeTab === tab.id ?
              'bg-[#0066ff] text-[#ffffff] shadow-md' :
              'bg-[#ffffff] text-[#0f172a] hover:bg-[#ffffff]/80 border border-[#e2e8f0]'}`
              }>

                <Icon name={tab.icon as any} size={20} variant="outline" />
                <span>{tab.label}</span>
              </button>
            )}
          </div>

          {activeTab === 'documentation' &&
          <div>
              {documentationSections.map((section, index) =>
            <DocumentationSection key={index} {...section} />
            )}
            </div>
          }

          {activeTab === 'api' &&
          <div className="space-y-8">
              <APIExplorer endpoints={apiEndpoints} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {codeExamples.slice(0, 2).map((example, index) =>
              <CodeExample key={index} {...example} />
              )}
              </div>
            </div>
          }

          {activeTab === 'tutorials' &&
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) =>
            <ResourceCard key={index} {...resource} />
            )}
            </div>
          }

          {activeTab === 'grants' &&
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {grants.map((grant, index) =>
            <GrantProgramCard key={index} {...grant} />
            )}
            </div>
          }
        </div>
      </section>

      {/* Testnet Setup Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-[#0f172a] mb-4">
              Testnet Setup
            </h2>
            <p className="text-lg text-[#475569]">
              Get started with CryptoVault EVM testnet in 4 simple steps
            </p>
          </div>
          <TestnetSetup steps={testnetSteps} />
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#e2e8f0]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-[#0f172a] mb-4">
              Code Examples
            </h2>
            <p className="text-lg text-[#475569]">
              Copy-paste ready code snippets to accelerate your development
            </p>
          </div>
          <div className="space-y-6">
            {codeExamples.map((example, index) =>
            <CodeExample key={index} {...example} />
            )}
          </div>
        </div>
      </section>

      {/* Community & Support Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-[#0f172a] mb-4">
              Community & Support
            </h2>
            <p className="text-lg text-[#475569]">
              Join thousands of developers building the future of DeFi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#discord"
              className="group bg-[#ffffff] rounded-xl p-6 border border-[#e2e8f0] hover:border-[#0066ff] transition-all duration-300 text-center">

              <div className="w-16 h-16 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ChatBubbleLeftRightIcon" size={32} variant="outline" className="text-[#0066ff]" />
              </div>
              <h3 className="text-lg font-headline font-bold text-[#0f172a] mb-2 group-hover:text-[#0066ff] transition-colors duration-300">
                Discord
              </h3>
              <p className="text-sm text-[#475569]">
                Join 10,000+ developers
              </p>
            </a>
            <a
              href="#github"
              className="group bg-[#ffffff] rounded-xl p-6 border border-[#e2e8f0] hover:border-[#0066ff] transition-all duration-300 text-center">

              <div className="w-16 h-16 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CodeBracketIcon" size={32} variant="outline" className="text-[#0066ff]" />
              </div>
              <h3 className="text-lg font-headline font-bold text-[#0f172a] mb-2 group-hover:text-[#0066ff] transition-colors duration-300">
                GitHub
              </h3>
              <p className="text-sm text-[#475569]">
                Contribute to open source
              </p>
            </a>
            <a
              href="#forum"
              className="group bg-[#ffffff] rounded-xl p-6 border border-[#e2e8f0] hover:border-[#0066ff] transition-all duration-300 text-center">

              <div className="w-16 h-16 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserGroupIcon" size={32} variant="outline" className="text-[#0066ff]" />
              </div>
              <h3 className="text-lg font-headline font-bold text-[#0f172a] mb-2 group-hover:text-[#0066ff] transition-colors duration-300">
                Forum
              </h3>
              <p className="text-sm text-[#475569]">
                Ask questions & share
              </p>
            </a>
            <a
              href="#support"
              className="group bg-[#ffffff] rounded-xl p-6 border border-[#e2e8f0] hover:border-[#0066ff] transition-all duration-300 text-center">

              <div className="w-16 h-16 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="LifebuoyIcon" size={32} variant="outline" className="text-[#0066ff]" />
              </div>
              <h3 className="text-lg font-headline font-bold text-[#0f172a] mb-2 group-hover:text-[#0066ff] transition-colors duration-300">
                Support
              </h3>
              <p className="text-sm text-[#475569]">
                Get technical help
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-[#0066ff] to-[#0052cc]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Deploy your first smart contract to CryptoVault EVM testnet today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#testnet"
              className="px-8 py-4 bg-white text-[#0066ff] rounded-lg text-lg font-cta font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg">

              Access Testnet
            </a>
            <a
              href="#docs"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-cta font-bold hover:bg-white/10 transition-all duration-300">

              Read Documentation
            </a>
          </div>
        </div>
      </section>
    </div>);

}