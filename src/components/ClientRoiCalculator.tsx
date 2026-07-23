'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { Calculator, MessageSquare, Clock, ShieldCheck, Sparkles, Zap, ArrowRight, X } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ClientRoiCalculator() {
  const { persona } = useApp();
  const [projectType, setProjectType] = useState<'shop' | 'startup' | 'enterprise'>('shop');
  const [pagesCount, setPagesCount] = useState<number>(3);
  const [needAi, setNeedAi] = useState<boolean>(true);
  const [needPwa, setNeedPwa] = useState<boolean>(true);
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [clientLocation, setClientLocation] = useState<string>('');

  // Calculate dynamic price & delivery estimate
  const basePriceINR = projectType === 'shop' ? 3999 : projectType === 'startup' ? 14999 : 49999;
  const basePriceUSD = projectType === 'shop' ? 49 : projectType === 'startup' ? 199 : 699;

  const calculatedPriceINR = basePriceINR + (pagesCount - 1) * 1000 + (needAi ? 2500 : 0) + (needPwa ? 1500 : 0);
  const calculatedPriceUSD = Math.round(basePriceUSD + (pagesCount - 1) * 20 + (needAi ? 40 : 0) + (needPwa ? 30 : 0));

  const estimatedDays = Math.max(1, Math.ceil(pagesCount / 2) + (needAi ? 1 : 0));

  const handleSendWhatsappQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const isINR = persona.currency === 'INR';
    const quotePrice = isINR ? `₹${calculatedPriceINR.toLocaleString('en-IN')}` : `$${calculatedPriceUSD}`;
    
    const message = `Hello Dnyaneshwar! I calculated a project quote on WorldFolio X:
- Name: ${clientName || 'Visitor'}
- Location: ${clientLocation || persona.locationName}
- Project: ${projectType.toUpperCase()} (${pagesCount} Pages)
- Features: ${needAi ? 'AI Smart' : ''} ${needPwa ? 'PWA Offline' : ''}
- Est. Price: ${quotePrice}
- Est. Time: ${estimatedDays} Days

Can we discuss deployment?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919370983235?text=${encoded}`, '_blank');
    toast.success('Generated 1-Click WhatsApp Quotation!');
    setIsWhatsappModalOpen(false);
  };

  return (
    <section className="py-16 px-4 lg:px-8 max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Client ROI & Time Estimator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Cost & Delivery Calculator
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Configure your requirements and get instant price estimates & delivery timeline in real-time.
        </p>
      </div>

      <div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-2xl">
        {/* Left Column: Interactive Controls */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-300">Project Type</label>
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setProjectType('shop')}
                className={`py-2.5 px-3 rounded-xl border transition-all ${
                  projectType === 'shop'
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                    : 'bg-slate-900 border-slate-700 text-slate-300'
                }`}
              >
                Local Shop
              </button>
              <button
                type="button"
                onClick={() => setProjectType('startup')}
                className={`py-2.5 px-3 rounded-xl border transition-all ${
                  projectType === 'startup'
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                    : 'bg-slate-900 border-slate-700 text-slate-300'
                }`}
              >
                Startup MVP
              </button>
              <button
                type="button"
                onClick={() => setProjectType('enterprise')}
                className={`py-2.5 px-3 rounded-xl border transition-all ${
                  projectType === 'enterprise'
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                    : 'bg-slate-900 border-slate-700 text-slate-300'
                }`}
              >
                Global SaaS
              </button>
            </div>
          </div>

          {/* Slider for Pages */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Total Pages / Screens</span>
              <span className="text-emerald-400 font-bold">{pagesCount} Screens</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={pagesCount}
              onChange={(e) => setPagesCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          {/* Checkbox Toggles */}
          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <label className="flex items-center space-x-2 cursor-pointer p-3 rounded-xl bg-slate-900 border border-slate-800">
              <input
                type="checkbox"
                checked={needAi}
                onChange={(e) => setNeedAi(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
              />
              <span className="text-slate-200">AI Integration</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 rounded-xl bg-slate-900 border border-slate-800">
              <input
                type="checkbox"
                checked={needPwa}
                onChange={(e) => setNeedPwa(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-500 accent-emerald-500"
              />
              <span className="text-slate-200">PWA Offline Mode</span>
            </label>
          </div>
        </div>

        {/* Right Column: Instant Live Quotation Box */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/40 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold tracking-wider">
              Estimated Instant Quotation
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-black text-white font-mono">
                {persona.currency === 'INR' ? `₹${calculatedPriceINR.toLocaleString('en-IN')}` : `$${calculatedPriceUSD}`}
              </span>
              <span className="text-xs text-slate-400">estimated total</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center space-x-3 text-xs text-emerald-300 font-mono">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Est. Delivery: <strong>{estimatedDays} Business Days</strong></span>
            </div>
          </div>

          <button
            onClick={() => setIsWhatsappModalOpen(true)}
            className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send 1-Click WhatsApp Quote</span>
          </button>
        </div>
      </div>

      {/* WhatsApp Inquiry Modal */}
      {isWhatsappModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setIsWhatsappModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Direct WhatsApp Inquiry</h3>
                <p className="text-xs text-slate-400">Send pre-formatted quote directly to Dnyaneshwar</p>
              </div>
            </div>

            <form onSubmit={handleSendWhatsappQuote} className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-mono text-slate-400">Your Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Rajesh Patil / Alex Vance"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400">Your City / Location</label>
                <input
                  type="text"
                  value={clientLocation}
                  onChange={(e) => setClientLocation(e.target.value)}
                  placeholder={persona.locationName}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp & Send Quote</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
