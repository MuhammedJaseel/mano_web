'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


interface ChartDataPoint {
  time: string;
  tps: number;
  gasPrice: number;
  activeNodes: number;
}

interface PerformanceChartProps {
  data: ChartDataPoint[];
}

export default function PerformanceChart({ data }: PerformanceChartProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeMetric, setActiveMetric] = useState<'tps' | 'gasPrice' | 'activeNodes'>('tps');

  useState(() => {
    setIsHydrated(true);
  });

  const metricConfig = {
    tps: {
      label: 'Transactions Per Second',
      color: '#0066FF',
      dataKey: 'tps',
      unit: 'TPS'
    },
    gasPrice: {
      label: 'Average Gas Price',
      color: '#00D4AA',
      dataKey: 'gasPrice',
      unit: 'Gwei'
    },
    activeNodes: {
      label: 'Active Validator Nodes',
      color: '#FF6B35',
      dataKey: 'activeNodes',
      unit: 'Nodes'
    }
  };

  const currentConfig = metricConfig[activeMetric];

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-6 shadow-card border border-border">
        <div className="h-80 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading chart...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <h3 className="text-lg font-headline font-bold text-foreground">Network Performance</h3>
        <div className="flex items-center space-x-2">
          {Object.entries(metricConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setActiveMetric(key as typeof activeMetric)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeMetric === key
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
              }`}
            >
              {config.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="h-80" aria-label={`${currentConfig.label} Chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${activeMetric}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={currentConfig.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={currentConfig.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis 
              dataKey="time" 
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
            <Area
              type="monotone"
              dataKey={currentConfig.dataKey}
              stroke={currentConfig.color}
              strokeWidth={2}
              fill={`url(#gradient-${activeMetric})`}
              name={currentConfig.label}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Current {currentConfig.unit}</p>
          <p className="text-2xl font-bold text-foreground">
            {/* {data[data.length - 1][currentConfig.dataKey]} */}
          </p>
        </div>
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">24h Average</p>
          <p className="text-2xl font-bold text-foreground">
            {/* {Math.round(data.reduce((sum, d) => sum + d[currentConfig.dataKey], 0) / data.length)} */}
          </p>
        </div>
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">24h Peak</p>
          <p className="text-2xl font-bold text-foreground">
            {/* {Math.max(...data.map(d => d[currentConfig.dataKey]))} */}
          </p>
        </div>
      </div>
    </div>
  );
}