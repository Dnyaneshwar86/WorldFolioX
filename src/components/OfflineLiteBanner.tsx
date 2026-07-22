'use client';

import React from 'react';
import { useApp } from '@/lib/store';
import { Smartphone, Zap, X } from 'lucide-react';

export default function OfflineLiteBanner() {
  const { isLiteMode, setIsLiteMode } = useApp();

  if (!isLiteMode) return null;

  return (
    <div className="bg-amber-500/20 border-b border-amber-500/40 px-4 py-2 text-amber-300 text-xs font-mono flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Smartphone className="w-4 h-4 text-amber-400 animate-pulse" />
        <span>
          ⚡ <strong>Offline Lite Mode Active:</strong> Low bandwidth / 2G-3G detected. High-speed text layout enabled.
        </span>
      </div>
      <button
        onClick={() => setIsLiteMode(false)}
        className="px-2 py-0.5 rounded bg-amber-500/30 hover:bg-amber-500/50 text-white font-bold text-[10px]"
      >
        Switch Full Mode
      </button>
    </div>
  );
}
