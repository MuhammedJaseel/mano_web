'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Icon from '@/components/ui/AppIcon';

interface NetworkComparison {
  network: string;
  tps: number;
  gasPrice: number;
  blockTime: number;
  tvl: number;
}

interface ComparativeAnalyticsProps {
  comparisonData: NetworkComparison[];
}

export default function ComparativeAnalytics({ comparisonData }: ComparativeAnalyticsProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeComparison, setActiveComparison] = useState<'tps' | 'gasPrice' | 'blockTime' | 'tvl'>('tps');

  useState(() => {
    setIsHydrated(true);
  });

  const comparisonConfig = {
    tps: {
      label: 'Transactions Per Second',
      dataKey: 'tps',
      unit: 'TPS',
      color: '#0066FF'
    },
    gasPrice: {
      label: 'Average Gas Price',
      dataKey: 'gasPrice',
      unit: 'Gwei',
      color: '#00D4AA'
    },
    blockTime: {
      label: 'Block Time',
      dataKey: 'blockTime',
      unit: 'seconds',
      color: '#FF6B35'
    },
    tvl: {
      label: 'Total Value Locked',
      dataKey: 'tvl',
      unit: 'Billion USD',
      color: '#2ECC71'
    }
  };

  const currentConfig = comparisonConfig[activeComparison];

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-6 shadow-card border border-border">
        <div className="h-96 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading comparison...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h3 className="text-lg font-headline font-bold text-foreground mb-1">Network Comparison</h3>
          <p className="text-sm text-muted-foreground">CryptoVault EVM vs Other Networks</p>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
          {Object.entries(comparisonConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setActiveComparison(key as typeof activeComparison)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                activeComparison === key
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-96" aria-label={`${currentConfig.label} Comparison Chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis 
              dataKey="network" 
              stroke="#8892B0"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#8892B0"
              style={{ fontSize: '12px' }}
              label={{ value: currentConfig.unit, angle: -90, position: 'insideLeft', style: { fill: '#8892B0' } }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#FFFFFF', 
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: '#0F172A', fontWeight: 'bold' }}
            />
            <Legend />
            <Bar 
              dataKey={currentConfig.dataKey} 
              fill={currentConfig.color}
              name={currentConfig.label}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {comparisonData.map((network) => (
          <div 
            key={network.network}
            className={`rounded-lg p-4 border-2 transition-all duration-300 ${
              network.network === 'CryptoVault EVM' ?'bg-primary/5 border-primary' :'bg-muted/30 border-border'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-foreground">{network.network}</p>
              {network.network === 'CryptoVault EVM' && (
                <Icon name="CheckBadgeIcon" size={16} variant="solid" className="text-primary" />
              )}
            </div>
            <p className="text-2xl font-bold text-foreground">
              {/* {network[currentConfig.dataKey]} */}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{currentConfig.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}