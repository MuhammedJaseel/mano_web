'use client';

import { useState } from 'react';
import NetworkStatsCard from './NetworkStatsCard';
import NetworkHealthIndicator from './NetworkHealthIndicator';
import TransactionViewer from './TransactionViewer';
import PerformanceChart from './PerformanceChart';
import ValidatorStats from './ValidatorStats';
import ComparativeAnalytics from './ComparativeAnalytics';
import CurrencyConverter from './CurrencyConverter';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: string;
  status: 'success' | 'pending' | 'failed';
  gasUsed: string;
}

interface ChartDataPoint {
  time: string;
  tps: number;
  gasPrice: number;
  activeNodes: number;
}

interface ValidatorInfo {
  totalValidators: number;
  activeValidators: number;
  totalStaked: string;
  averageAPY: string;
  minStake: string;
}

interface NetworkComparison {
  network: string;
  tps: number;
  gasPrice: number;
  blockTime: number;
  tvl: number;
}

interface CurrencyRate {
  currency: string;
  symbol: string;
  rate: number;
  change24h: number;
}

export default function NetworkDashboardInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const networkStats = [
    {
      title: 'Total Transactions',
      value: '2,847,392',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: '📊',
      subtitle: '24h volume'
    },
    {
      title: 'Active Addresses',
      value: '184,293',
      change: '+8.3%',
      changeType: 'positive' as const,
      icon: '👥',
      subtitle: 'Unique wallets'
    },
    {
      title: 'Network TPS',
      value: '3,847',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: '⚡',
      subtitle: 'Current throughput'
    },
    {
      title: 'Avg Gas Price',
      value: '0.8 Gwei',
      change: '-23.4%',
      changeType: 'positive' as const,
      icon: '⛽',
      subtitle: 'Lower is better'
    },
    {
      title: 'Total Value Locked',
      value: '$4.2B',
      change: '+18.7%',
      changeType: 'positive' as const,
      icon: '💰',
      subtitle: 'Across all DApps'
    },
    {
      title: 'Market Cap',
      value: '$8.9B',
      change: '+5.6%',
      changeType: 'positive' as const,
      icon: '📈',
      subtitle: 'Fully diluted'
    }
  ];

  const mockTransactions: Transaction[] = [
    {
      hash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      to: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
      value: '2.5 ETH',
      timestamp: '2 mins ago',
      status: 'success',
      gasUsed: '21,000'
    },
    {
      hash: '0x3c7fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      from: '0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c',
      to: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      value: '0.8 ETH',
      timestamp: '5 mins ago',
      status: 'success',
      gasUsed: '45,230'
    },
    {
      hash: '0x9a2fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      from: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      to: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      value: '15.3 ETH',
      timestamp: '8 mins ago',
      status: 'pending',
      gasUsed: '32,100'
    },
    {
      hash: '0x5e8fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      from: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      value: '5.7 ETH',
      timestamp: '12 mins ago',
      status: 'success',
      gasUsed: '28,450'
    },
    {
      hash: '0x1b4fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      from: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      to: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      value: '1.2 ETH',
      timestamp: '15 mins ago',
      status: 'failed',
      gasUsed: '19,800'
    }
  ];

  const performanceData: ChartDataPoint[] = [
    { time: '00:00', tps: 2800, gasPrice: 1.2, activeNodes: 450 },
    { time: '04:00', tps: 3200, gasPrice: 0.9, activeNodes: 465 },
    { time: '08:00', tps: 3600, gasPrice: 1.1, activeNodes: 478 },
    { time: '12:00', tps: 4100, gasPrice: 0.8, activeNodes: 492 },
    { time: '16:00', tps: 3900, gasPrice: 0.7, activeNodes: 485 },
    { time: '20:00', tps: 3500, gasPrice: 0.9, activeNodes: 470 },
    { time: '23:59', tps: 3847, gasPrice: 0.8, activeNodes: 488 }
  ];

  const validatorInfo: ValidatorInfo = {
    totalValidators: 1247,
    activeValidators: 1189,
    totalStaked: '8.4M CVT',
    averageAPY: '12.5%',
    minStake: '32,000 CVT'
  };

  const comparisonData: NetworkComparison[] = [
    { network: 'CryptoVault EVM', tps: 3847, gasPrice: 0.8, blockTime: 2.1, tvl: 4.2 },
    { network: 'Ethereum', tps: 15, gasPrice: 25.3, blockTime: 13.0, tvl: 45.8 },
    { network: 'Polygon', tps: 65, gasPrice: 30.2, blockTime: 2.3, tvl: 1.2 },
    { network: 'BSC', tps: 160, gasPrice: 5.1, blockTime: 3.0, tvl: 3.8 }
  ];

  const currencyRates: CurrencyRate[] = [
    { currency: 'USD', symbol: '$', rate: 2.45, change24h: 5.6 },
    { currency: 'ETH', symbol: 'Ξ', rate: 0.00089, change24h: -2.3 },
    { currency: 'BTC', symbol: '₿', rate: 0.000056, change24h: 3.8 }
  ];

  return (
    <div className="space-y-8">
      {/* Network Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {networkStats.map((stat) => (
          <NetworkStatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            subtitle={stat.subtitle}
          />
        ))}
      </div>

      {/* Network Health */}
      <NetworkHealthIndicator
        status="healthy"
        uptime="99.98%"
        lastBlock="#8,472,394"
        blockTime="2.1s"
      />

      {/* Performance Chart */}
      <PerformanceChart data={performanceData} />

      {/* Validator Stats */}
      <ValidatorStats validatorInfo={validatorInfo} />

      {/* Transaction Viewer */}
      <TransactionViewer transactions={mockTransactions} />

      {/* Comparative Analytics */}
      <ComparativeAnalytics comparisonData={comparisonData} />

      {/* Currency Converter */}
      <CurrencyConverter rates={currencyRates} tokenSymbol="CVT" />
    </div>
  );
}