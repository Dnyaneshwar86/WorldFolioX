'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { ShieldCheck, Globe, Zap, ExternalLink, Search, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
  const { persona } = useApp();
  const router = useRouter();
  const [tokenInput, setTokenInput] = useState('');

  const handleTrackToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    router.push(`/client/${tokenInput.trim()}`);
  };

  return (
    <footer className="border-t border-white/10 py-10 px-4 lg:px-8 bg-slate-950/80 text-xs text-slate-400 space-y-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
        {/* Token Tracker Search Form */}
        <form onSubmit={handleTrackToken} className="flex items-center space-x-2 w-full md:w-auto">
          <span className="text-xs text-slate-300 font-mono flex items-center space-x-1 font-bold">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Project Token Tracker:</span>
          </span>
          <input
            type="text"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Enter token (e.g. patil-sangamner-7788)"
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono w-60"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors font-mono"
          >
            Track Status
          </button>
        </form>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <Link href="/status" className="text-amber-400 hover:underline">
            Live Status Board (/status)
          </Link>
          <span>•</span>
          <Link href="/admin" className="text-emerald-400 hover:underline">
            Admin CRM (/admin)
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="font-extrabold text-sm text-white">
            WorldFolio <span className="text-emerald-400 font-mono">X</span>
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
            v2.6 ClientFlow CRM
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
