'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: string;
  status: 'success' | 'pending' | 'failed';
  gasUsed: string;
}

interface TransactionViewerProps {
  transactions: Transaction[];
}

export default function TransactionViewer({ transactions }: TransactionViewerProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedTx, setSelectedTx] = useState<string | null>(null);

  useState(() => {
    setIsHydrated(true);
  });

  const statusConfig = {
    success: { color: 'text-[#059669]', bg: 'bg-[#059669]/10', icon: 'CheckCircleIcon' },
    pending: { color: 'text-[#d97706]', bg: 'bg-[#d97706]/10', icon: 'ClockIcon' },
    failed: { color: 'text-[#dc2626]', bg: 'bg-[#dc2626]/10', icon: 'XCircleIcon' }
  };

  const truncateHash = (hash: string) => {
    if (!isHydrated) return hash;
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
  };

  return (
    <div className="bg-[#ffffff] rounded-lg shadow-[#ffffff] border border-[#e2e8f0] overflow-hidden">
      <div className="p-6 border-b border-[#e2e8f0]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-headline font-bold text-[#0f172a]">Recent Transactions</h3>
          <button className="flex items-center space-x-2 text-sm font-medium text-[#0066ff] hover:text-[#0052cc] transition-colors duration-300">
            <span>View All</span>
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#e2e8f0]/30">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase tracking-wider">
                Transaction Hash
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase tracking-wider">
                From
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase tracking-wider">
                To
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase tracking-wider">
                Gas Used
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            {transactions.map((tx) => {
              const config = statusConfig[tx.status];
              return (
                <tr 
                  key={tx.hash}
                  className="hover:bg-[#e2e8f0]/20 transition-colors duration-200 cursor-pointer"
                  onClick={() => isHydrated && setSelectedTx(tx.hash)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono text-[#0066ff] hover:underline">
                      {truncateHash(tx.hash)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono text-[#0f172a]">
                      {truncateHash(tx.from)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono text-[#0f172a]">
                      {truncateHash(tx.to)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-[#0f172a]">{tx.value}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
                      <Icon name={config.icon as any} size={14} variant="solid" />
                      <span className="capitalize">{tx.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-[#475569]">{tx.gasUsed}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}