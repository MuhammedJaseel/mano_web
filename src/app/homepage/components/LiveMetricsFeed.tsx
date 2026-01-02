"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/ui/AppIcon";
import { getTransactions } from "@/lib/api/scan";
import { shortenHash } from "@/lib/utils/hex";
import { timeAgo } from "@/lib/utils/time";
import { ethers } from "ethers";

interface Transaction {
  id: string;
  type: string;
  amount: string;
  time: string;
  status: "success" | "pending";
}

export default function LiveMetricsFeed() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setIsHydrated(true);
    getTransactions().then((res) => {
      const txns: Transaction[] = [];
      for (let it of res.data.data)
        txns.push({
          id: shortenHash(it.th),
          type: "Coin Transfer",
          amount: Number(ethers.formatEther(it.v)).toFixed(3) + " MANO",
          time: timeAgo(it.ts),
          status: "success",
        });
      setTransactions(txns);
    });

    // setTransactions([
    //   {
    //     id: "0x7a8f...3d2e",
    //     type: "Swap",
    //     amount: "1,250 CVLT",
    //     time: "2s ago",
    //     status: "success",
    //   },
    //   {
    //     id: "0x9b2c...5f1a",
    //     type: "Transfer",
    //     amount: "500 CVLT",
    //     time: "5s ago",
    //     status: "success",
    //   },
    //   {
    //     id: "0x4e6d...8c9b",
    //     type: "Stake",
    //     amount: "10,000 CVLT",
    //     time: "8s ago",
    //     status: "pending",
    //   },
    //   {
    //     id: "0x1f3a...7d4c",
    //     type: "Bridge",
    //     amount: "2,500 CVLT",
    //     time: "12s ago",
    //     status: "success",
    //   },
    // ]);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-[#ffffff] rounded-xl p-6 shadow-[#ffffff] border border-[#e2e8f0]">
        <div className="animate-pulse">
          <div className="h-6 bg-[#e2e8f0] rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-[#e2e8f0] rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#ffffff] rounded-xl p-6 shadow-[#ffffff] border border-[#e2e8f0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-headline font-bold text-[#0f172a]">
          Live Transactions
        </h3>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-[#059669] rounded-full animate-pulse"></span>
          <span className="text-xs text-[#059669] font-semibold">LIVE</span>
        </div>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-lg hover:bg-[#e2e8f0] transition-colors duration-200"
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <Icon
                name={tx.status === "success" ? "CheckCircleIcon" : "ClockIcon"}
                size={20}
                variant="solid"
                className={
                  tx.status === "success" ? "text-[#059669]" : "text-[#d97706]"
                }
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0f172a] truncate">
                  {tx.id}
                </p>
                <p className="text-xs text-[#475569]">{tx.type}</p>
              </div>
            </div>
            <div className="text-right ml-4">
              <p className="text-sm font-bold text-[#0f172a]">{tx.amount}</p>
              <p className="text-xs text-[#475569]">{tx.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
