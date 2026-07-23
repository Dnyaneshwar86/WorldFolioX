'use client';

import React from 'react';
import ProjectTracker from '@/components/ProjectTracker';
import { ArrowLeft, ShieldCheck, Database, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import BuildTimer from '@/components/BuildTimer';
import { Toaster } from 'react-hot-toast';

export default function ProjectStatusBoardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 space-y-8 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Toaster position="top-right" />

      {/* Header Bar */}
      <header className="max-w-6xl mx-auto glass-panel p-4 rounded-3xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold text-white">Live Client Project Status Board</h1>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">Synced with Google Sheets API • Village, National & Global Projects</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <BuildTimer />
        </div>
      </header>

      {/* Main Google Sheets Tracker Section */}
      <div className="max-w-6xl mx-auto">
        <ProjectTracker />
      </div>

      {/* Footer Info & WhatsApp Link */}
      <div className="max-w-6xl mx-auto p-6 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center space-x-2">
          <Database className="w-4 h-4 text-emerald-400" />
          <span>Real-time Data Stream • Powered by Google Apps Script JSON API</span>
        </div>

        <a
          href="https://wa.me/919370983235?text=Hello%20Dnyaneshwar,%20I%20want%20to%20check%20my%20project%20status!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors flex items-center space-x-1.5"
        >
          <span>Ask Status on WhatsApp</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </main>
  );
}
