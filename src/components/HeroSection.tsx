'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import GeoAdaptiveAvatar from './GeoAdaptiveAvatar';
import { Zap, Play, ArrowRight, Phone, Award, ShieldCheck, Sparkles, Volume2 } from 'lucide-react';

export default function HeroSection() {
  const { persona, dict, setIsVideoGreetingOpen, setIsPaymentOpen, setSelectedTierId } = useApp();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const playLocalAudioGreeting = () => {
    setIsPlayingAudio(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(persona.greetingAudioText);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 3000);
    }
  };

  return (
    <section className="relative pt-8 pb-16 px-4 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Column - Hero Content & Localized Personalization */}
      <div className="flex-1 space-y-6 text-left">
        {/* RPG Power Level Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-mono text-amber-300 shadow-lg shadow-amber-950/30">
          <Award className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
          <span>Dev Level 99 • 85+ Global Projects • 100% Satisfaction</span>
        </div>

        {/* Dynamic Personal Greeting Title */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {persona.greetingTitle}{' '}
            <span className="block gradient-text-neon font-black mt-1">
              I'm Dnyaneshwar
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-emerald-400 font-mono">
            {persona.greetingSubtitle}
          </p>
        </div>

        {/* Description & Geo-Context Notice */}
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
          Empowering clients from local Indian villages to Silicon Valley corporations with hyper-adaptive AI systems, Next.js 14 platforms, and ultra-scalable web architectures.
        </p>

        {/* Interactive Voice Audio Greeting Player */}
        <div className="p-4 rounded-xl glass-panel border border-emerald-500/30 flex items-center justify-between gap-4 max-w-xl">
          <div className="flex items-center space-x-3">
            <button
              onClick={playLocalAudioGreeting}
              className={`p-3 rounded-full ${
                isPlayingAudio ? 'bg-amber-500 animate-ping' : 'bg-emerald-500 hover:bg-emerald-400'
              } text-slate-950 font-bold transition-all shadow-md`}
              title="Listen to localized voice greeting"
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI Localized Voice Greeting</h4>
              <p className="text-xs text-slate-400">"{persona.greetingAudioText.slice(0, 55)}..."</p>
            </div>
          </div>
          <button
            onClick={() => setIsVideoGreetingOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-indigo-600/40 hover:bg-indigo-600/70 border border-indigo-400/30 text-indigo-200 text-xs font-semibold flex items-center space-x-1"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Video AI</span>
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => {
              setSelectedTierId('tier_pro');
              setIsPaymentOpen(true);
            }}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 text-white font-bold text-sm tracking-wide shadow-xl hover:shadow-emerald-500/25 transition-all hover:scale-105 flex items-center space-x-2"
          >
            <span>{dict.ctaHire}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={persona.paymentPrimary === 'whatsapp' ? `https://wa.me/${persona.whatsappNumber}` : '#contact'}
            className="px-6 py-3.5 rounded-xl glass-button text-white font-semibold text-sm flex items-center space-x-2 border border-white/20"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{dict.ctaBookCall}</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center space-x-6 pt-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>AAA Accessibility</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Sub-50ms Response</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>50+ Languages</span>
          </div>
        </div>
      </div>

      {/* Right Column - Adaptive Photo Avatar */}
      <div className="flex-shrink-0">
        <GeoAdaptiveAvatar />
      </div>
    </section>
  );
}
