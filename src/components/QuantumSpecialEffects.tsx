'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/lib/store';
import { Sparkles, ShieldCheck, Zap, Camera, Award, Smartphone, RefreshCw, Layers } from 'lucide-react';
import toast from 'react-hot-toast';

export default function QuantumSpecialEffects() {
  const { lang, setLang, theme, setTheme, persona } = useApp();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);
  const [showPwaInstall, setShowPwaInstall] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // 1. Scroll Progress Bar & Active Section Tracker (#16, #17)
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);

      const sections = ['hero', 'trust-map', 'projects', 'testimonials', 'story', 'pricing', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 100) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Custom Glowing Neon Cursor (#15)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Quantum Entanglement Cross-Tab Broadcast (#38)
  useEffect(() => {
    if (typeof BroadcastChannel !== 'undefined') {
      const bc = new BroadcastChannel('worldfolio_x_quantum_sync');
      
      bc.onmessage = (event) => {
        if (event.data.type === 'SYNC_LANG') {
          setLang(event.data.lang);
          toast.success(`Quantum Sync: Switched language to ${event.data.lang.toUpperCase()} from secondary tab!`);
        } else if (event.data.type === 'SYNC_THEME') {
          setTheme(event.data.theme);
          toast.success(`Quantum Sync: Switched theme to ${event.data.theme} from secondary tab!`);
        }
      };

      return () => bc.close();
    }
  }, [setLang, setTheme]);

  // 4. Haptic Feedback Trigger (#22)
  const triggerHaptic = () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(20);
    }
  };

  // 5. Emotion Adaptive UI Camera Modal (#33)
  const handleStartEmotionDetection = () => {
    setIsCameraActive(true);
    setDetectedEmotion('Analyzing Face...');
    setTimeout(() => {
      setDetectedEmotion('😊 Enthusiastic & Happy (98% Confidence)');
      toast.success('Emotion Detected: High Engagement! Tailoring UI to high-energy mode.');
      triggerHaptic();
    }, 2000);
  };

  const SECTIONS = [
    { id: 'hero', label: 'Top' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'story', label: 'Odyssey' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* 1. Scroll Progress Bar at very top of screen */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-900 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-orange-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Custom Glowing Neon Cursor Follower (Desktop) */}
      <div
        className="fixed z-[55] w-8 h-8 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(59,130,246,0.1) 70%, transparent 100%)',
          boxShadow: '0 0 15px rgba(16,185,129,0.5)',
        }}
      />

      {/* 3. Floating Navigation Dots (Right Side) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3 p-2 rounded-full glass-panel border border-white/10">
        {SECTIONS.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={triggerHaptic}
            className={`w-3 h-3 rounded-full transition-all group relative flex items-center justify-center ${
              activeSection === sec.id ? 'bg-emerald-400 scale-125 shadow-lg shadow-emerald-500/50' : 'bg-slate-700 hover:bg-slate-400'
            }`}
            title={sec.label}
          >
            <span className="absolute right-6 px-2 py-1 rounded bg-slate-900 text-white text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
              {sec.label}
            </span>
          </a>
        ))}
      </div>

      {/* 4. Floating Action Widget (Emotion Camera & Blockchain Badge Trigger) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center space-x-2">
        <button
          onClick={handleStartEmotionDetection}
          className="p-2.5 rounded-full glass-panel border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 transition-all shadow-xl flex items-center space-x-2 text-xs font-mono"
          title="Trigger AI Emotion-Adaptive Camera Analysis"
        >
          <Camera className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="hidden sm:inline">AI Emotion UI</span>
        </button>
      </div>

      {/* 5. Emotion Detection Modal Overlay */}
      {isCameraActive && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/40 rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4 text-center">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-purple-400 font-bold">Emotion-Adaptive AI</span>
              <button
                onClick={() => setIsCameraActive(false)}
                className="text-slate-400 hover:text-white text-xs font-mono"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
              {/* Simulated camera feed scanning */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-purple-500/10 animate-pulse" />
              <div className="space-y-2">
                <Camera className="w-8 h-8 text-purple-400 mx-auto animate-bounce" />
                <p className="text-xs font-mono text-emerald-400">{detectedEmotion}</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-300">
              When visitor looks delighted, WorldFolio X auto-highlights top booking packages!
            </p>

            <button
              onClick={() => setIsCameraActive(false)}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs"
            >
              Apply Emotion Persona
            </button>
          </div>
        </div>
      )}
    </>
  );
}
