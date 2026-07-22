'use client';

import React from 'react';
import { useApp } from '@/lib/store';
import { Sparkles, MapPin, ShieldCheck, Zap } from 'lucide-react';

export default function GeoAdaptiveAvatar() {
  const { persona } = useApp();

  return (
    <div className="relative group flex flex-col items-center">
      {/* Glow aura background */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-neonGreen via-brand-electricBlue to-brand-vibrantOrange opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow-pulse" />

      {/* Main Avatar Card Container */}
      <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl glass-panel overflow-hidden border border-white/20 shadow-2xl flex flex-col justify-end p-4 transition-all duration-500">
        {/* Dynamic Image */}
        <img
          src={persona.avatarUrl}
          alt={persona.avatarCaption}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 transform group-hover:scale-105"
        />

        {/* Overlay Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Dynamic Badge & Cultural Persona Tag */}
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/50 backdrop-blur-md text-emerald-400 text-xs font-semibold shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>{persona.avatarCaption}</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-1 text-xs text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{persona.locationName}</span>
            </div>
            <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified AI Avatar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Caption indicator below */}
      <p className="text-xs text-slate-400 mt-3 font-mono flex items-center space-x-1">
        <Zap className="w-3 h-3 text-amber-400" />
        <span>Auto-adapted attire for: <strong className="text-emerald-400">{persona.country}</strong></span>
      </p>
    </div>
  );
}
