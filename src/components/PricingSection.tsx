'use client';

import React from 'react';
import { useApp } from '@/lib/store';
import { SERVICE_TIERS } from '@/lib/data';
import { CheckCircle2, Zap, ShieldCheck, ArrowRight, CreditCard, QrCode } from 'lucide-react';

export default function PricingSection() {
  const { persona, dict, setIsPaymentOpen, setSelectedTierId } = useApp();

  const formatPrice = (inr: number, usd: number) => {
    if (persona.currency === 'INR') {
      return `₹${inr.toLocaleString('en-IN')}`;
    } else if (persona.currency === 'EUR') {
      return `€${Math.round(usd * 0.92).toLocaleString('en-US')}`;
    } else if (persona.currency === 'GBP') {
      return `£${Math.round(usd * 0.78).toLocaleString('en-US')}`;
    } else if (persona.currency === 'JPY') {
      return `¥${Math.round(usd * 155).toLocaleString('en-US')}`;
    }
    return `$${usd.toLocaleString('en-US')}`;
  };

  return (
    <section id="pricing" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>Dynamic Currency Pricing • {persona.currency}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          {dict.pricingHeader}
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Tailored rates auto-converted for {persona.country} ({persona.currency}). Instant booking with local payment gateways.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICE_TIERS.map((tier) => {
          const isPopular = tier.popular;
          return (
            <div
              key={tier.id}
              className={`p-8 rounded-3xl glass-panel border transition-all duration-300 flex flex-col justify-between space-y-6 relative shadow-2xl ${
                isPopular
                  ? 'border-emerald-400 bg-emerald-950/30 scale-105 ring-2 ring-emerald-500/40 z-10'
                  : 'border-white/10 hover:border-slate-700'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 text-slate-950 text-xs font-mono font-bold tracking-wider uppercase shadow-md">
                  Most Popular for {persona.country}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{tier.tagline}</p>
                </div>

                <div className="py-2 border-y border-white/10">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {formatPrice(tier.inrPrice, tier.usdPrice)}
                  </span>
                  <span className="text-xs text-slate-400 font-mono"> / project</span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedTierId(tier.id);
                  setIsPaymentOpen(true);
                }}
                className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 ${
                  isPopular
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'glass-button text-white hover:border-emerald-500'
                }`}
              >
                {persona.currency === 'INR' ? (
                  <>
                    <QrCode className="w-4 h-4" />
                    <span>{dict.payWithUpi}</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>{dict.payWithStripe}</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
