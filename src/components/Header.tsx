'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { LANGUAGES } from '@/lib/i18n-dictionary';
import { PERSONAS } from '@/lib/geo-context';
import { RegionId } from '@/lib/types';
import { Globe, Mic, Zap, Sparkles, Moon, Sun, Monitor, Smartphone, Video } from 'lucide-react';
import BuildTimer from './BuildTimer';

export default function Header() {
  const {
    persona,
    setRegionById,
    lang,
    setLang,
    theme,
    setTheme,
    dict,
    isLiteMode,
    setIsLiteMode,
    isVoiceActive,
    setIsVoiceActive,
    setIsVideoGreetingOpen,
  } = useApp();

  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo with Morphing Brackets & Lightning/Handshake */}
        <div className="flex items-center space-x-3">
          <div
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-neonGreen via-brand-electricBlue to-brand-vibrantOrange p-[2px] cursor-pointer shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-lg text-emerald-400">
              {isLogoHovered ? (
                <span className="text-2xl animate-bounce" title="Local + Global Handshake">
                  🤝
                </span>
              ) : (
                <div className="flex items-center space-x-0.5">
                  <span className="text-blue-400">{'{'}</span>
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
                  <span className="text-orange-400">{'}'}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-wider text-white">
                WorldFolio <span className="text-emerald-400 font-mono">X</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold uppercase tracking-wider">
                {persona.flag} {persona.country}
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block font-medium">
              "{dict.tagline}"
            </p>
          </div>
        </div>

        {/* Live Timer Widget */}
        <div className="hidden md:block">
          <BuildTimer />
        </div>

        {/* Adaptive Context Controls & Settings */}
        <div className="flex items-center flex-wrap gap-2">
          {/* AI Greeting Video Trigger */}
          <button
            onClick={() => setIsVideoGreetingOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            title="Play Personalized AI Greeting Video"
          >
            <Video className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="hidden sm:inline">AI Greeting</span>
          </button>

          {/* Locale Persona Simulator Selector */}
          <div className="relative group">
            <select
              value={persona.id}
              onChange={(e) => setRegionById(e.target.value as RegionId)}
              className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors cursor-pointer appearance-none pr-7 font-medium"
            >
              {Object.values(PERSONAS).map((p) => (
                <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                  {p.flag} {p.name}
                </option>
              ))}
            </select>
            <Globe className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1.2 pointer-events-none" />
          </div>

          {/* 50+ Language Selector */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 hover:border-blue-500 focus:outline-none cursor-pointer font-medium"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code} className="bg-slate-900 text-white">
                {l.flag} {l.name}
              </option>
            ))}
          </select>

          {/* Voice Navigation Toggle */}
          <button
            onClick={() => setIsVoiceActive(!isVoiceActive)}
            className={`p-2 rounded-lg text-xs border transition-all ${
              isVoiceActive
                ? 'bg-red-500/20 border-red-500 text-red-300 animate-pulse'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title={isVoiceActive ? 'Voice Navigation Active (Listening...)' : 'Enable Voice Control'}
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* Quantum / 8-Bit / Dark Theme Toggle */}
          <button
            onClick={() => {
              if (theme === 'neon_tech') setTheme('quantum');
              else if (theme === 'quantum') setTheme('konami_8bit');
              else setTheme('neon_tech');
            }}
            className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-amber-300 transition-colors"
            title="Toggle Theme Mode (Neon / Quantum / 8-Bit)"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
          </button>

          {/* Lite Mode Toggle */}
          <button
            onClick={() => setIsLiteMode(!isLiteMode)}
            className={`p-2 rounded-lg text-xs border transition-colors ${
              isLiteMode
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Toggle Offline Lite Mode (2G/3G low bandwidth)"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
