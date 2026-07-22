'use client';

import React from 'react';
import { useApp } from '@/lib/store';
import { ShieldCheck, Globe, Zap, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { persona } = useApp();

  return (
    <footer className="border-t border-white/10 py-10 px-4 lg:px-8 bg-slate-950/80 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="font-extrabold text-sm text-white">
            WorldFolio <span className="text-emerald-400 font-mono">X</span>
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
            v2.6 Hyper-Adaptive
          </span>
        </div>

        <div className="flex items-center space-x-4 font-mono text-[11px]">
          <span className="flex items-center space-x-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>IPFS Snapshot: QmX87b...3f9a</span>
          </span>
          <span>•</span>
          <span>Detected: {persona.locationName}</span>
        </div>

        <p className="text-[11px] text-slate-500 font-mono">
          © 2026 Dnyaneshwar. Built & Deployed in under 90 minutes.
        </p>
      </div>
    </footer>
  );
}
