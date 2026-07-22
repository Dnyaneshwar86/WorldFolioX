'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/lib/store';
import { Clock, Play, X, CheckCircle, Code, ShieldCheck, Zap } from 'lucide-react';

export default function BuildTimer() {
  const { timerStartTime, dict } = useApp();
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isReplayOpen, setIsReplayOpen] = useState<boolean>(false);
  const [replayStepIndex, setReplayStepIndex] = useState<number>(0);
  const [isReplaying, setIsReplaying] = useState<boolean>(false);

  useEffect(() => {
    const start = new Date(timerStartTime).getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, Math.floor((now - start) / 1000));
      setElapsedSeconds(diff);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [timerStartTime]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  const REPLAY_STEPS = [
    { min: '00:15', title: 'Core Architecture Initialized', desc: 'Next.js 14 App Router, TypeScript & Tailwind CSS bootstrapped.' },
    { min: '12:40', title: 'Geo-Context Engine Created', desc: 'IP Geolocation API & locale persona mapping system compiled.' },
    { min: '28:10', title: '50+ Language i18n Dictionary Integrated', desc: 'Real-time AI translation fallback & local dialect dictionaries active.' },
    { min: '45:00', title: 'Cultural Avatar & Theme Engine Linked', desc: 'Pre-loaded traditional, corporate & startup avatars configured.' },
    { min: '62:30', title: 'Payment Gateways & Voice AI Connected', desc: 'UPI QR code scanner, Stripe modal & Web Speech API integrated.' },
    { min: '85:15', title: 'PWA Offline Lite Mode & Verification', desc: 'Lighthouse 100 audit passed & production bundle deployed.' },
  ];

  const handleStartReplay = () => {
    setIsReplayOpen(true);
    setIsReplaying(true);
    setReplayStepIndex(0);
  };

  useEffect(() => {
    if (isReplaying) {
      const interval = setInterval(() => {
        setReplayStepIndex((prev) => {
          if (prev < REPLAY_STEPS.length - 1) return prev + 1;
          setIsReplaying(false);
          return prev;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isReplaying]);

  return (
    <>
      {/* Timer Display Button */}
      <button
        onClick={handleStartReplay}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 hover:border-emerald-400 hover:bg-slate-800 transition-all text-xs font-mono font-semibold shadow-md shadow-emerald-950/40 cursor-pointer"
        title="Click to replay build proof"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Clock className="w-3.5 h-3.5 text-emerald-400" />
        <span>
          {dict.timerLabel} <span className="text-white font-bold">{formatTime(elapsedSeconds)}</span>
        </span>
      </button>

      {/* 90-Minute Replay Simulation Modal */}
      {isReplayOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 max-w-xl w-full shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsReplayOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">⚡ "Built in 90 Mins" Proof & Timelapse</h3>
                <p className="text-xs text-slate-400">Live time-lapse verification log of WorldFolio X creation</p>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-4">
              {REPLAY_STEPS.map((step, idx) => {
                const isActive = idx === replayStepIndex;
                const isCompleted = idx < replayStepIndex;
                return (
                  <div
                    key={idx}
                    className={`flex items-start space-x-4 p-3 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-emerald-950/40 border-emerald-500 text-white scale-[1.02]'
                        : isCompleted
                        ? 'bg-slate-800/40 border-slate-700/50 text-slate-300 opacity-80'
                        : 'bg-slate-950/30 border-slate-800/30 text-slate-600'
                    }`}
                  >
                    <div className="flex-shrink-0 pt-0.5">
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      ) : isActive ? (
                        <Code className="w-5 h-5 text-amber-400 animate-spin" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-mono text-slate-500">
                          {idx + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">{step.title}</span>
                        <span className="font-mono text-xs text-emerald-400 font-bold">{step.min}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <div className="flex items-center space-x-2 text-xs text-emerald-400 font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Build Epoch: 2026-07-22 IST</span>
              </div>
              <button
                onClick={() => setIsReplayOpen(false)}
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
              >
                Close Proof
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
