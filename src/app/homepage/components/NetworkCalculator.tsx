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
      <div className="bg-[#ffffff] rounded-xl p-8 shadow-[#ffffff] border border-[#e2e8f0]">
        <div className="animate-pulse">
          <div className="h-8 bg-[#e2e8f0] rounded w-3/4 mb-6"></div>
          <div className="h-12 bg-[#e2e8f0] rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-24 bg-[#e2e8f0] rounded"></div>
            <div className="h-24 bg-[#e2e8f0] rounded"></div>
            <div className="h-24 bg-[#e2e8f0] rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#ffffff] rounded-xl p-8 shadow-[#ffffff] border border-[#e2e8f0]">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="CalculatorIcon" size={32} variant="outline" className="text-[#0066ff]" />
        <h3 className="text-2xl font-headline font-bold text-[#0f172a]">Gas Fee Calculator</h3>
      </div>
      
      <div className="mb-6">
        <label htmlFor="transactions" className="block text-sm font-semibold text-[#0f172a] mb-2">
          Number of Transactions per Month
        </label>
        <input
          id="transactions"
          type="text"
          value={transactions}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition-all duration-300"
          placeholder="Enter number of transactions"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#059669]/10 rounded-lg p-4 border border-[#059669]/20">
          <p className="text-xs text-[#475569] font-medium mb-1">Gas Fees Saved</p>
          <p className="text-2xl font-headline font-bold text-[#059669]">{result.gasFeeSaved}</p>
        </div>
        <div className="bg-[#0066ff]/10 rounded-lg p-4 border border-[#0066ff]/20">
          <p className="text-xs text-[#475569] font-medium mb-1">Transaction Speed</p>
          <p className="text-2xl font-headline font-bold text-[#0066ff]">{result.transactionSpeed}</p>
        </div>
        <div className="bg-[#3b82f6]/10 rounded-lg p-4 border border-[#3b82f6]/20">
          <p className="text-xs text-[#475569] font-medium mb-1">Cost Comparison</p>
          <p className="text-2xl font-headline font-bold text-[#3b82f6]">{result.costComparison}</p>
        </div>
      </div>
    </div>
  );
}