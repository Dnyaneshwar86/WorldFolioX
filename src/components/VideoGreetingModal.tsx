'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { X, Play, Pause, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VideoGreetingModal() {
  const { persona, isVideoGreetingOpen, setIsVideoGreetingOpen } = useApp();
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isVideoGreetingOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 max-w-2xl w-full shadow-2xl space-y-4 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setIsVideoGreetingOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800 border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">AI Personal Video Greeting</h3>
            <p className="text-xs text-slate-400">
              Personalized video synthesis for <strong className="text-emerald-400">{persona.locationName}</strong>
            </p>
          </div>
        </div>

        {/* Simulated Video Player Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group shadow-inner">
          <img
            src={persona.avatarUrl}
            alt="AI Video Avatar"
            className="w-full h-full object-cover"
          />

          {/* Animated Speaking Waveform Indicator */}
          {isPlaying && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-emerald-500/50 flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>AI Synthesizing Voice ({persona.country})</span>
            </div>
          )}

          {/* Video Overlay Control Bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            <div className="flex-1 mx-4">
              <p className="text-xs text-slate-200 font-medium line-clamp-1">
                "{persona.greetingAudioText}"
              </p>
            </div>
            <Volume2 className="w-5 h-5 text-emerald-400" />
          </div>
        </div>

        {/* Localized Message Breakdown */}
        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Target Locale: <strong>{persona.name}</strong></span>
          </div>
          <span className="font-mono text-emerald-400">Audio Sync: 100%</span>
        </div>
      </div>
    </div>
  );
}
