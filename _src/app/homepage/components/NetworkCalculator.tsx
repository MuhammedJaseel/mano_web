'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorResult {
  gasFeeSaved: string;
  transactionSpeed: string;
  costComparison: string;
}

export default function NetworkCalculator() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [transactions, setTransactions] = useState<string>('100');
  const [result, setResult] = useState<CalculatorResult>({
    gasFeeSaved: '$0',
    transactionSpeed: '0x faster',
    costComparison: '0%'
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    const txCount = parseInt(transactions) || 0;
    const gasFeeSaved = (txCount * 2.5).toFixed(2);
    const speedMultiplier = Math.min(txCount / 10, 50);
    const costSaving = Math.min((txCount / 100) * 85, 95);

    setResult({
      gasFeeSaved: `$${gasFeeSaved}`,
      transactionSpeed: `${speedMultiplier.toFixed(1)}x faster`,
      costComparison: `${costSaving.toFixed(0)}% cheaper`
    });
  }, [transactions, isHydrated]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setTransactions(value);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-card border border-border">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-3/4 mb-6"></div>
          <div className="h-12 bg-muted rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-24 bg-muted rounded"></div>
            <div className="h-24 bg-muted rounded"></div>
            <div className="h-24 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 shadow-card border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="CalculatorIcon" size={32} variant="outline" className="text-primary" />
        <h3 className="text-2xl font-headline font-bold text-foreground">Gas Fee Calculator</h3>
      </div>
      
      <div className="mb-6">
        <label htmlFor="transactions" className="block text-sm font-semibold text-foreground mb-2">
          Number of Transactions per Month
        </label>
        <input
          id="transactions"
          type="text"
          value={transactions}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          placeholder="Enter number of transactions"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-success/10 rounded-lg p-4 border border-success/20">
          <p className="text-xs text-muted-foreground font-medium mb-1">Gas Fees Saved</p>
          <p className="text-2xl font-headline font-bold text-success">{result.gasFeeSaved}</p>
        </div>
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <p className="text-xs text-muted-foreground font-medium mb-1">Transaction Speed</p>
          <p className="text-2xl font-headline font-bold text-primary">{result.transactionSpeed}</p>
        </div>
        <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
          <p className="text-xs text-muted-foreground font-medium mb-1">Cost Comparison</p>
          <p className="text-2xl font-headline font-bold text-accent">{result.costComparison}</p>
        </div>
      </div>
    </div>
  );
}