'use client';

import React from 'react';
import { CheckCircle2, XCircle, Zap, ShieldCheck } from 'lucide-react';

export default function CompetitorVanquisher() {
  const COMPARISONS = [
    { feature: 'Geo & Locale Personalization', traditional: 'Static / Single Language', worldfolio: 'Dynamic Geolocation & Persona Switch' },
    { feature: 'Multi-Language Support', traditional: 'Manual Google Translate widget', worldfolio: '50+ Languages with AI Real-Time Fallback' },
    { feature: 'Attire & Visual Adaptation', traditional: 'One static headshot', worldfolio: 'Adaptive AI Avatars (Traditional, Corporate, Casual)' },
    { feature: 'Build & Deploy Verification', traditional: 'No proof of speed', worldfolio: 'Live Count-Up Timer & 90-Min Build Replay' },
    { feature: 'Payment Gateway Adaptation', traditional: 'Generic contact form', worldfolio: 'Local UPI QR Code & Stripe International' },
    { feature: 'Voice & Multilingual AI Chat', traditional: 'None', worldfolio: 'Integrated Web Speech & Localized Chatbot' },
    { feature: 'Low-Bandwidth Offline Lite Mode', traditional: 'Heavy JavaScript lag', worldfolio: 'Auto-switches to 2G/3G ultra-lite text' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>Competitor Vanquisher Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Traditional Portfolio vs. WorldFolio X
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Why hyper-adaptive personalization converts visitors up to 4.8x higher than static resumes.
        </p>
      </div>

      <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 text-slate-300 font-mono border-b border-white/10 uppercase tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">Feature Capability</th>
                <th className="p-4 sm:p-5 text-slate-500">Traditional Portfolios</th>
                <th className="p-4 sm:p-5 text-emerald-400 font-bold bg-emerald-950/20">WorldFolio X ⚡</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {COMPARISONS.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-white">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-slate-400 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{row.traditional}</span>
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-emerald-950/10 border-l border-emerald-500/20">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{row.worldfolio}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
