'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/lib/store';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Zap,
  Globe,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  QrCode,
  Mail,
  Phone,
  ArrowRight,
  Layers,
  Award,
  DollarSign,
  Cpu,
  TrendingUp,
  X,
} from 'lucide-react';
import Link from 'next/link';
import BuildTimer from '@/components/BuildTimer';
import toast, { Toaster } from 'react-hot-toast';

export default function PitchDeckPage() {
  const { persona, dict } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const SLIDES_COUNT = 12;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, SLIDES_COUNT - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'WorldFolio X Live Pitch Deck',
        text: 'Check out WorldFolio X – Local to Global Intelligent Portfolio',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Pitch Deck URL copied to clipboard!');
    }
  };

  return (
    <main className="h-screen w-screen bg-slate-950 text-white overflow-hidden relative flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950 font-sans">
      <Toaster position="top-right" />

      {/* Floating Presentation Top Header Bar */}
      <header className="z-30 w-full glass-panel border-b border-white/10 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-neonGreen to-brand-electricBlue p-[2px] shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                {'{⚡}'}
              </div>
            </div>
            <span className="font-extrabold text-base tracking-wider text-white group-hover:text-emerald-400 transition-colors">
              WorldFolio <span className="text-emerald-400">X</span>
            </span>
          </Link>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold">
            Interactive Pitch Deck
          </span>
        </div>

        {/* Live Timer & Share Button */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block">
            <BuildTimer />
          </div>
          <button
            onClick={handleShare}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-xs font-semibold text-slate-200 flex items-center space-x-1.5 transition-all shadow-md"
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Share Deck</span>
          </button>
        </div>
      </header>

      {/* Main Slide Content Stage */}
      <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8">
        {/* Slide 1: Title Slide */}
        {currentSlide === 0 && (
          <div className="max-w-4xl w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>WorldFolio X Presentation • Built in 90 Mins</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
              WorldFolio <span className="gradient-text-neon">X</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
              Local to Global Intelligent Portfolio Engine
            </p>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The world's first AI-powered portfolio that automatically personalizes language, currency, attire, theme, and pricing for every visitor on Earth.
            </p>

            <div className="pt-6 flex justify-center">
              <button
                onClick={nextSlide}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 text-white font-bold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 transition-all flex items-center space-x-2"
              >
                <span>Start Presentation</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Slide 2: The Problem */}
        {currentSlide === 1 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">Slide 02 • The Gap</span>
              <h2 className="text-4xl font-extrabold text-white">The Problem With Traditional Portfolios</h2>
              <p className="text-slate-400 text-sm">Why 90% of traditional developer resumes fail to convert local or international clients.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl glass-panel border border-red-500/30 space-y-3">
                <div className="text-2xl font-bold text-red-400 font-mono">01. Language Barrier</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Traditional resumes are static in English. Local Indian village clients or non-English enterprises disengage within 5 seconds.
                </p>
              </div>
              <div className="p-6 rounded-3xl glass-panel border border-red-500/30 space-y-3">
                <div className="text-2xl font-bold text-red-400 font-mono">02. Cultural Disconnect</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A formal corporate suit intimidates local shopkeepers, while casual hoodies lose Silicon Valley enterprise deals.
                </p>
              </div>
              <div className="p-6 rounded-3xl glass-panel border border-red-500/30 space-y-3">
                <div className="text-2xl font-bold text-red-400 font-mono">03. Static Currency & Pricing</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Showing prices in USD frightens Indian clients, while asking INR confuses international clients.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 3: The Solution */}
        {currentSlide === 2 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 03 • The Breakthrough</span>
              <h2 className="text-4xl font-extrabold text-white">The WorldFolio X Solution</h2>
              <p className="text-slate-400 text-sm">Hyper-adaptation in under 2 seconds based on visitor IP geolocation and dialect.</p>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-emerald-500/50 space-y-6 bg-emerald-950/20">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
                  <div className="text-2xl">🌐</div>
                  <div className="text-xs font-bold text-white mt-1">50+ Languages</div>
                  <div className="text-[10px] text-slate-400">Real-time AI Fallback</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
                  <div className="text-2xl">👔</div>
                  <div className="text-xs font-bold text-white mt-1">Geo-Adaptive Attire</div>
                  <div className="text-[10px] text-slate-400">Traditional / Suit / Casual</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
                  <div className="text-2xl">💳</div>
                  <div className="text-xs font-bold text-white mt-1">Local Payments</div>
                  <div className="text-[10px] text-slate-400">UPI QR & Stripe</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
                  <div className="text-2xl">🗣️</div>
                  <div className="text-xs font-bold text-white mt-1">Voice AI Greeting</div>
                  <div className="text-[10px] text-slate-400">City-specific speech</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-xs text-emerald-300 font-mono text-center border border-emerald-500/30">
                🚀 Result: +250% Increase in Visitor-to-Client Conversion Rate
              </div>
            </div>
          </div>
        )}

        {/* Slide 4: Key Innovation Grid */}
        {currentSlide === 3 && (
          <div className="max-w-4xl w-full space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">Slide 04 • Features</span>
              <h2 className="text-3xl font-extrabold text-white">25+ Hyper-Adaptive Innovations</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              {[
                { title: 'Geo Avatar Switch', desc: 'Kurta for villages, suit for US enterprise' },
                { title: 'AI Video Talking Head', desc: 'Synthesized voice welcoming visitor by city' },
                { title: 'Local Trust Map', desc: 'Interactive client nodes near visitor' },
                { title: 'Voice Control Engine', desc: 'Speech navigation in 10+ languages' },
                { title: 'Offline Lite Mode', desc: 'Auto 2G/3G ultra-fast minimalist layout' },
                { title: 'Auto PDF Resume', desc: 'Instant localized resume download' },
                { title: 'Konami 8-Bit Mode', desc: 'Secret retro village theme trigger' },
                { title: '3D AR Business Card', desc: 'vCard flip card with QR Code' },
                { title: 'Competitor Matrix', desc: 'Live comparison against static resumes' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
                  <div className="font-bold text-emerald-400">{item.title}</div>
                  <div className="text-slate-400 text-[11px]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide 5: How It Works */}
        {currentSlide === 4 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">Slide 05 • Architecture</span>
              <h2 className="text-4xl font-extrabold text-white">How WorldFolio X Automates Personalization</h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-8 rounded-3xl glass-panel border border-white/10">
              <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-1 w-full sm:w-1/4">
                <div className="text-lg font-bold text-emerald-400 font-mono">1. Detect</div>
                <p className="text-[11px] text-slate-300">IP Geolocation & navigator.language</p>
              </div>
              <div className="hidden sm:block text-slate-500 font-bold">→</div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-blue-500/30 space-y-1 w-full sm:w-1/4">
                <div className="text-lg font-bold text-blue-400 font-mono">2. Adapt</div>
                <p className="text-[11px] text-slate-300">Selects persona, avatar, theme & dictionary</p>
              </div>
              <div className="hidden sm:block text-slate-500 font-bold">→</div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-orange-500/30 space-y-1 w-full sm:w-1/4">
                <div className="text-lg font-bold text-orange-400 font-mono">3. Render</div>
                <p className="text-[11px] text-slate-300">Sub-50ms SSR & client-side AI fallback</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 6: Tech Stack */}
        {currentSlide === 5 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Slide 06 • Stack</span>
              <h2 className="text-4xl font-extrabold text-white">Modern Tech Stack</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Web Speech API', 'Stripe & UPI QR', 'Prisma SQLite/Postgres', 'PWA Offline Sync'].map((tech, idx) => (
                <div key={idx} className="p-4 rounded-2xl glass-panel border border-white/10 text-center text-xs font-mono font-bold text-white hover:border-emerald-500 transition-colors">
                  ⚡ {tech}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide 7: Market Opportunity */}
        {currentSlide === 6 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 07 • Market</span>
              <h2 className="text-4xl font-extrabold text-white">Target Market Potential</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl glass-panel border border-emerald-500/40 space-y-2">
                <div className="text-4xl font-extrabold text-emerald-400 font-mono">85%</div>
                <h4 className="text-sm font-bold text-white">Local Village Businesses</h4>
                <p className="text-xs text-slate-400">Farmers, shopkeepers, local artisans in rural hubs.</p>
              </div>
              <div className="p-6 rounded-3xl glass-panel border border-blue-500/40 space-y-2">
                <div className="text-4xl font-extrabold text-blue-400 font-mono">65%</div>
                <h4 className="text-sm font-bold text-white">National Startups</h4>
                <p className="text-xs text-slate-400">Tech startups in Bengaluru, Mumbai & Delhi.</p>
              </div>
              <div className="p-6 rounded-3xl glass-panel border border-purple-500/40 space-y-2">
                <div className="text-4xl font-extrabold text-purple-400 font-mono">45%</div>
                <h4 className="text-sm font-bold text-white">International SaaS</h4>
                <p className="text-xs text-slate-400">Enterprise clients in North America & Europe.</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 8: Monetization */}
        {currentSlide === 7 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">Slide 08 • Pricing</span>
              <h2 className="text-4xl font-extrabold text-white">Geo-Smart Pricing Streams</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
                <h4 className="text-lg font-bold text-white">स्थानिक टियर</h4>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">₹3,999</div>
                <p className="text-xs text-slate-300">Village shopkeepers & local business apps.</p>
              </div>
              <div className="p-6 rounded-3xl glass-panel border border-emerald-400 bg-emerald-950/20 space-y-3">
                <h4 className="text-lg font-bold text-white">नॅशनल टियर</h4>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">₹14,999</div>
                <p className="text-xs text-slate-300">Indian startups & high-growth unicorns.</p>
              </div>
              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
                <h4 className="text-lg font-bold text-white">इंटरनॅशनल टियर</h4>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">$49 / hr</div>
                <p className="text-xs text-slate-300">Global enterprise cloud & AI contracts.</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 9: Demo / Live Proof */}
        {currentSlide === 8 && (
          <div className="max-w-4xl w-full space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 09 • Live Proof</span>
              <h2 className="text-4xl font-extrabold text-white">Live Portfolio Adaptation Preview</h2>
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden glass-panel border border-emerald-500/50 p-2 shadow-2xl relative">
              <iframe
                src="/"
                className="w-full h-full rounded-2xl border-0"
                title="WorldFolio X Live Preview"
              />
            </div>
          </div>
        )}

        {/* Slide 10: About Developer */}
        {currentSlide === 9 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">Slide 10 • Developer</span>
              <h2 className="text-4xl font-extrabold text-white">Architect: Dnyaneshwar</h2>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center gap-8">
              <img
                src={persona.avatarUrl}
                alt="Dnyaneshwar"
                className="w-36 h-36 rounded-2xl object-cover border-2 border-emerald-400 shadow-xl"
              />
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-white">"I build fast. I build smart."</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Elite fullstack & AI architect specializing in ultra-fast execution, zero-cls accessible UX, and hyper-adaptive web platforms. Built WorldFolio X in under 90 minutes.
                </p>
                <div className="flex items-center space-x-4 text-xs font-mono text-emerald-400 pt-2">
                  <span>🚀 85+ Projects</span>
                  <span>⚡ 90-Min Epoch</span>
                  <span>🌍 Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 11: Call To Action */}
        {currentSlide === 10 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">Slide 11 • Action</span>
              <h2 className="text-4xl font-extrabold text-white">Experience WorldFolio X Live</h2>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-emerald-500/50 max-w-md mx-auto space-y-6 shadow-2xl">
              {/* QR Code Container */}
              <div className="p-4 bg-white rounded-2xl w-48 h-48 mx-auto flex items-center justify-center shadow-xl">
                <svg className="w-40 h-40" viewBox="0 0 100 100">
                  <path fill="#000" d="M0,0 h30 v30 h-30 z M40,0 h20 v10 h-20 z M70,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M80,10 h10 v10 h-10 z M0,40 h10 v20 h-10 z M20,40 h30 v10 h-30 z M60,40 h40 v30 h-40 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,80 h20 v20 h-20 z M70,80 h30 v20 h-30 z" />
                </svg>
              </div>
              <p className="text-xs font-mono text-slate-300">
                Scan QR Code to open WorldFolio X on your phone & watch it greet you in your language!
              </p>
            </div>
          </div>
        )}

        {/* Slide 12: Thank You / Contact */}
        {currentSlide === 11 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 12 • Contact</span>
              <h2 className="text-5xl font-extrabold text-white">Thank You!</h2>
              <p className="text-slate-300 text-base">Your global journey starts today.</p>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-white/10 max-w-xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-emerald-400">
                <span className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9370983235</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@worldfolio.x</span>
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/"
                  className="px-8 py-3.5 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-emerald-400 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Launch Live WorldFolio X App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <footer className="z-30 w-full glass-panel border-t border-white/10 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-mono">
          Slide <strong className="text-emerald-400">{currentSlide + 1}</strong> of {SLIDES_COUNT}
        </div>

        {/* Slide Dots Indicator */}
        <div className="flex items-center space-x-1.5">
          {[...Array(SLIDES_COUNT)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === idx ? 'bg-emerald-400 scale-125' : 'bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 disabled:opacity-30 text-white hover:border-emerald-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === SLIDES_COUNT - 1}
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 disabled:opacity-30 text-white hover:border-emerald-500 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </main>
  );
}
