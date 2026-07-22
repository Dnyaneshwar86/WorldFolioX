'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PersonaProfile, RegionId } from './types';
import { PERSONAS, detectUserPersona } from './geo-context';
import { getDictionary, Dictionary } from './i18n-dictionary';

interface AppState {
  persona: PersonaProfile;
  setPersona: (p: PersonaProfile) => void;
  setRegionById: (r: RegionId) => void;
  lang: string;
  setLang: (l: string) => void;
  theme: string;
  setTheme: (t: string) => void;
  dict: Dictionary;
  isLiteMode: boolean;
  setIsLiteMode: (b: boolean) => void;
  isVoiceActive: boolean;
  setIsVoiceActive: (b: boolean) => void;
  timerStartTime: string;
  setTimerStartTime: (t: string) => void;
  isPaymentOpen: boolean;
  setIsPaymentOpen: (b: boolean) => void;
  selectedTierId: string | null;
  setSelectedTierId: (id: string | null) => void;
  isVideoGreetingOpen: boolean;
  setIsVideoGreetingOpen: (b: boolean) => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [persona, setPersona] = useState<PersonaProfile>(PERSONAS.in_metro);
  const [lang, setLang] = useState<string>('en');
  const [theme, setTheme] = useState<string>('neon_tech');
  const [isLiteMode, setIsLiteMode] = useState<boolean>(false);
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(false);
  const [timerStartTime, setTimerStartTime] = useState<string>('2026-07-22T22:00:00');
  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [isVideoGreetingOpen, setIsVideoGreetingOpen] = useState<boolean>(false);

  useEffect(() => {
    // Auto detect persona & network speed
    const detected = detectUserPersona();
    setPersona(detected);
    setLang(detected.defaultLang);
    setTheme(detected.themePreset);

    // Detect network connection type for lite mode
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const conn = (navigator as any).connection;
      if (conn && (conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g' || conn.saveData)) {
        setIsLiteMode(true);
      }
    }

    // Check Konami Code
    let konamiIndex = 0;
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setTheme('konami_8bit');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const setRegionById = (regionId: RegionId) => {
    const selected = PERSONAS[regionId] || PERSONAS.in_metro;
    setPersona(selected);
    setLang(selected.defaultLang);
    setTheme(selected.themePreset);
  };

  const dict = getDictionary(lang);

  return (
    <AppContext.Provider
      value={{
        persona,
        setPersona,
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
        timerStartTime,
        setTimerStartTime,
        isPaymentOpen,
        setIsPaymentOpen,
        selectedTierId,
        setSelectedTierId,
        isVideoGreetingOpen,
        setIsVideoGreetingOpen,
      }}
    >
      <div data-theme={theme} className="min-h-screen">
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
