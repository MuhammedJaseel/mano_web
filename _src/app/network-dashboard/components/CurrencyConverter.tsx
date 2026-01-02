'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CurrencyRate {
  currency: string;
  symbol: string;
  rate: number;
  change24h: number;
}

interface CurrencyConverterProps {
  rates: CurrencyRate[];
  tokenSymbol: string;
}

export default function CurrencyConverter({ rates, tokenSymbol }: CurrencyConverterProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [amount, setAmount] = useState('1');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  useState(() => {
    setIsHydrated(true);
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isHydrated) return;
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleCurrencyChange = (currency: string) => {
    if (!isHydrated) return;
    setSelectedCurrency(currency);
  };

  const selectedRate = rates.find(r => r.currency === selectedCurrency);
  const convertedAmount = selectedRate && amount ? (parseFloat(amount) * selectedRate.rate).toFixed(2) : '0.00';

  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-headline font-bold text-foreground">Token Price Converter</h3>
        <Icon name="CurrencyDollarIcon" size={24} variant="outline" className="text-primary" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Amount in {tokenSymbol}
          </label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg text-foreground font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              placeholder="0.00"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
              {tokenSymbol}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Icon name="ArrowsUpDownIcon" size={20} variant="outline" className="text-muted-foreground" />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Converted Amount
          </label>
          <div className="relative">
            <div className="w-full px-4 py-3 bg-primary/5 border-2 border-primary rounded-lg text-foreground font-bold text-2xl">
              {isHydrated ? convertedAmount : '0.00'}
            </div>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-primary">
              {selectedCurrency}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {rates.map((rate) => (
            <button
              key={rate.currency}
              onClick={() => handleCurrencyChange(rate.currency)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCurrency === rate.currency
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
              }`}
            >
              {rate.symbol} {rate.currency}
            </button>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-3 gap-4">
            {rates.map((rate) => (
              <div key={rate.currency} className="text-center">
                <p className="text-xs text-muted-foreground mb-1">{rate.currency}</p>
                <p className="text-sm font-bold text-foreground">
                  {rate.symbol}{rate.rate.toLocaleString()}
                </p>
                <p className={`text-xs font-semibold ${rate.change24h >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {rate.change24h >= 0 ? '+' : ''}{rate.change24h}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}