'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/lib/store';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Sparkles,
  Globe,
  TrendingUp,
  Award,
  Layers,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import BuildTimer from '@/components/BuildTimer';
import toast, { Toaster } from 'react-hot-toast';

export default function PitchDeckPage() {
  const { persona } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const SLIDES_COUNT = 13;

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
        text: 'Check out WorldFolio X – Local to Global Intelligent Portfolio Strategy',
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

      {/* Presentation Top Header Bar */}
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
            Slide Deck (13 Slides)
          </span>
        </div>

        {/* Live Timer & Share */}
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
        
        {/* Slide 1: Title */}
        {currentSlide === 0 && (
          <div className="max-w-4xl w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Slide 01 • Built in 90 Minutes</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
              WorldFolio <span className="gradient-text-neon">X</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-emerald-400">
              स्थानिक ते जागतिकः जगातील पहिले इंटेलिजेंट पोर्टफोलिओ इंजिन जे तुमची ओळख ग्लोबल करते.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
              LOCAL TO GLOBAL INTELLIGENT PORTFOLIO
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

        {/* Slide 2: The Vision */}
        {currentSlide === 1 && (
          <div className="max-w-4xl w-full space-y-8 text-center animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 02 • Vision</span>
              <h2 className="text-5xl font-extrabold text-white">The Vision</h2>
              <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-emerald-500/40 bg-emerald-950/20 max-w-2xl mx-auto shadow-2xl">
              <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed">
                प्रत्येक डेव्हलपरला स्थानिक गावपातळीपासून ते आंतरराष्ट्रीय मार्केटपर्यंत जोडणारी आधुनिक प्रणाली.
              </p>
            </div>
          </div>
        )}

        {/* Slide 3: The Gap We Bridge */}
        {currentSlide === 2 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">Slide 03 • Market Gap</span>
              <h2 className="text-4xl font-extrabold text-white">The Gap We Bridge</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl glass-panel border border-red-500/30 space-y-3">
                <div className="p-3 rounded-2xl bg-red-500/20 text-red-400 w-fit">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">संवादातील अडथळा</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  स्थानिक भाषा आणि जागतिक बिझनेस लँग्वेज यातील दरीमुळे अनेक टॅレントेड डेव्हलपर्स मागे पडतात.
                </p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-emerald-500/50 bg-emerald-950/20 space-y-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 w-fit">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">WorldFolio X सोल्यूशन</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ऑटो-डिटेक्टिंग मल्टी-लँग्वेज आणि जिओ-अडॅप्टिव्ह UI द्वारे जगातील प्रत्येक युजरला त्याच्या भाषेत प्रेझेंटेशन.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 4: Impact Metrics */}
        {currentSlide === 3 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 04 • Impact</span>
              <h2 className="text-4xl font-extrabold text-white">Impact Metrics</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="text-6xl sm:text-7xl font-black text-emerald-400 font-mono">250%</div>
                <h3 className="text-2xl font-bold text-white">कन्व्हर्जन दरात वाढ</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  स्थानिक भाषेत माहिती दिल्याने युजरचा विश्वास वाढतो आणि प्रोजेक्ट मिळण्याची शक्यता २.५ पटीने वाढते.
                </p>
              </div>

              <div className="aspect-video rounded-3xl glass-panel border border-white/10 p-6 flex flex-col justify-end bg-slate-900/80 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="relative z-10 space-y-1">
                  <span className="text-xs font-mono text-emerald-400 font-bold">Workspace Ecosystem</span>
                  <h4 className="text-lg font-bold text-white">Professional Tech Workspace</h4>
                  <p className="text-xs text-slate-400">Optimized for high-trust client conversions.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 5: The Polyglot Engine */}
        {currentSlide === 4 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">Slide 05 • AI Engine</span>
              <h2 className="text-4xl font-extrabold text-white">The Polyglot Engine</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold w-fit">
                  मराठी & हिंदी
                </div>
                <h3 className="text-lg font-bold text-white">स्थानिक आपुलकी</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  स्थानिक गाव आणि जिल्हा स्तरावरील क्लायंट्ससाठी विश्वासार्ह संवाद आणि आपुलकीचे दर्शन.
                </p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
                <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold w-fit">
                  English & More
                </div>
                <h3 className="text-lg font-bold text-white">Global Reach</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  आंतरराष्ट्रीय स्तरावरील प्रोफेशनलिझम आणि हाय-टेक सादरीकरण (German, Spanish ready).
                </p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-emerald-500/50 bg-emerald-950/20 space-y-3">
                <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold w-fit">
                  Auto-Detection
                </div>
                <h3 className="text-lg font-bold text-white">Auto Personalization</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  युजरच्या लोकेशननुसार भाषा आणि करन्सी आपोआप बदलण्याची इंटेलिजेंट सिस्टीम.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 6: Geo-Smart Pricing */}
        {currentSlide === 5 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">Slide 06 • Pricing</span>
              <h2 className="text-4xl font-extrabold text-white">Geo-Smart Pricing</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
                <h3 className="text-lg font-bold text-white">स्थानिक टियर</h3>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">₹३,९९९</div>
                <p className="text-xs text-slate-300">गाव आणि तालुका व्यापारी</p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-emerald-400 bg-emerald-950/20 space-y-3">
                <h3 className="text-lg font-bold text-white">नॅशनल टियर</h3>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">₹१४,९९९</div>
                <p className="text-xs text-slate-300">भारतीय स्टार्टअप्स</p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
                <h3 className="text-lg font-bold text-white">इंटरनॅशनल टियर</h3>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">$49 / $30</div>
                <p className="text-xs text-slate-300">प्रति तास (ग्लोबल क्लायंट्स)</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 7: Scaling Globally */}
        {currentSlide === 6 && (
          <div className="max-w-4xl w-full space-y-8 text-center animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 07 • Scale</span>
              <h2 className="text-4xl font-extrabold text-white">Scaling Globally</h2>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-emerald-500/40 bg-emerald-950/20 max-w-3xl mx-auto space-y-4 shadow-2xl">
              <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                जगात आजवर कोणीही न बनवलेली ही सिस्टीम तुमच्या कौशल्याला सीमा ओलांडून जगभर पोहचवते.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                स्थानिक टच (Local Touch) राखून जागतिक प्रभाव (Global Impact) पाडणे हेच या पोर्टफोलिओचे मुख्य वैशिष्ट्य आहे.
              </p>
            </div>
          </div>
        )}

        {/* Slide 8: Target Market Potential */}
        {currentSlide === 7 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Slide 08 • Market</span>
              <h2 className="text-4xl font-extrabold text-white">Target Market Potential</h2>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-1">
                  <span>Local Businesses</span>
                  <span className="text-emerald-400">85% Reach</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-white/10">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-1">
                  <span>National Startups</span>
                  <span className="text-blue-400">65% Reach</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-white/10">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '65%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-1">
                  <span>International SaaS</span>
                  <span className="text-purple-400">45% Reach</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-white/10">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono text-center pt-2">
              WorldFolio X मुळे मार्केट कव्हरेजमध्ये लक्षणीय वाढ होते.
            </p>
          </div>
        )}

        {/* Slide 9: Revenue Streams */}
        {currentSlide === 8 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 09 • Revenue</span>
              <h2 className="text-4xl font-extrabold text-white">Revenue Streams</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl glass-panel border border-emerald-500/40 space-y-2">
                <div className="text-4xl font-bold text-emerald-400 font-mono">30%</div>
                <h3 className="text-lg font-bold text-white">Local Projects</h3>
                <p className="text-xs text-slate-400">गाव आणि तालुका व्यावसायिक</p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-blue-500/40 space-y-2">
                <div className="text-4xl font-bold text-blue-400 font-mono">40%</div>
                <h3 className="text-lg font-bold text-white">National Tech</h3>
                <p className="text-xs text-slate-400">भारतीय तंत्रज्ञान स्टार्टअप्स</p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-amber-500/40 space-y-2">
                <div className="text-4xl font-bold text-amber-400 font-mono">30%</div>
                <h3 className="text-lg font-bold text-white">International SaaS</h3>
                <p className="text-xs text-slate-400">जागतिक क्लायंट्स</p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 10: Deployment Roadmap */}
        {currentSlide === 9 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">Slide 10 • Roadmap</span>
              <h2 className="text-4xl font-extrabold text-white">Deployment Roadmap</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
                <div className="text-xs font-mono font-bold text-emerald-400">Min 0–20</div>
                <h4 className="text-sm font-bold text-white">AI Engine & UI Setup</h4>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
                <div className="text-xs font-mono font-bold text-blue-400">Min 20–50</div>
                <h4 className="text-sm font-bold text-white">Language Matrix & Logic</h4>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
                <div className="text-xs font-mono font-bold text-amber-400">Min 50–70</div>
                <h4 className="text-sm font-bold text-white">Geo-Detection Integration</h4>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-emerald-500/50 bg-emerald-950/20 space-y-1">
                <div className="text-xs font-mono font-bold text-emerald-300">Min 70–90</div>
                <h4 className="text-sm font-bold text-white">Live Global Deployment</h4>
              </div>
            </div>
          </div>
        )}

        {/* Slide 11: Quote */}
        {currentSlide === 10 && (
          <div className="max-w-4xl w-full space-y-8 text-center animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Slide 11 • Quote</span>
            </div>

            <div className="p-10 rounded-3xl glass-panel border border-emerald-500/40 bg-emerald-950/20 max-w-2xl mx-auto space-y-4 shadow-2xl">
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-relaxed italic">
                "तंत्रज्ञान जेव्हा भाषेचे आणि भूगोलाचे अडथळे तोडते, तेव्हा खरी प्रगती सुरू होते."
              </p>
              <p className="text-sm font-mono text-emerald-400 font-bold">
                — WorldFolio X Team
              </p>
            </div>
          </div>
        )}

        {/* Slide 12: Contact Us */}
        {currentSlide === 11 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">Slide 12 • Contact</span>
              <h2 className="text-5xl font-extrabold text-white">Contact Us</h2>
              <p className="text-slate-300 text-base">तुमचा जागतिक प्रवास आजच सुरू करा.</p>
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

              <div className="text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
                BUILT IN 90 MINUTES
              </div>
            </div>
          </div>
        )}

        {/* Slide 13: Image Sources */}
        {currentSlide === 12 && (
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Slide 13 • Attributions</span>
              <h2 className="text-4xl font-extrabold text-white">Image Sources</h2>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-white/10 max-w-xl mx-auto space-y-4 text-xs font-mono text-slate-300 text-left">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-emerald-400 font-bold">Source 1:</span> stockcake.com
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-blue-400 font-bold">Source 2:</span> themeforest.net
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-amber-400 font-bold">Source 3:</span> vecteezy.com
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
        <div className="flex items-center space-x-1.5 overflow-x-auto max-w-[50%] py-1">
          {[...Array(SLIDES_COUNT)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${
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
