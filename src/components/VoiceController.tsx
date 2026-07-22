'use client';

import React, { useEffect, useState } from 'react';
import { useApp } from '@/lib/store';
import { Mic, MicOff, Volume2, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

export default function VoiceController() {
  const { isVoiceActive, setIsVoiceActive, setLang, setTheme } = useApp();
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!isVoiceActive) return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error('Web Speech API is not supported in this browser.');
      setIsVoiceActive(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const resultText = event.results[current][0].transcript.toLowerCase().trim();
      setTranscript(resultText);

      // Match navigation & action voice commands
      if (resultText.includes('project') || resultText.includes('work')) {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        toast.success('Navigated to Projects section via Voice!');
      } else if (resultText.includes('skill')) {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        toast.success('Navigated to Skills section via Voice!');
      } else if (resultText.includes('contact') || resultText.includes('hire')) {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        toast.success('Navigated to Contact section via Voice!');
      } else if (resultText.includes('pricing') || resultText.includes('price')) {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        toast.success('Navigated to Pricing section via Voice!');
      } else if (resultText.includes('hindi')) {
        setLang('hi');
        toast.success('Language changed to Hindi via Voice!');
      } else if (resultText.includes('marathi')) {
        setLang('mr');
        toast.success('Language changed to Marathi via Voice!');
      } else if (resultText.includes('english')) {
        setLang('en');
        toast.success('Language changed to English via Voice!');
      } else if (resultText.includes('quantum')) {
        setTheme('quantum');
        toast.success('Switched to Quantum theme via Voice!');
      }
    };

    recognition.onerror = () => {
      setIsVoiceActive(false);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [isVoiceActive, setLang, setTheme, setIsVoiceActive]);

  if (!isVoiceActive) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 glass-panel p-4 rounded-2xl border border-red-500/50 shadow-2xl flex items-center space-x-3 bg-slate-900/95 animate-bounce">
      <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40">
        <Mic className="w-5 h-5 animate-pulse" />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Voice Control Active</span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        </div>
        <p className="text-xs text-slate-300 max-w-xs line-clamp-1">
          {transcript ? `"${transcript}"` : 'Say "projects", "contact", "hindi", "quantum"...'}
        </p>
      </div>
      <button
        onClick={() => setIsVoiceActive(false)}
        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
      >
        <MicOff className="w-4 h-4" />
      </button>
    </div>
  );
}
