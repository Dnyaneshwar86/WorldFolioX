import React from 'react';
import { Utensils, Sparkles, Zap } from 'lucide-react';

interface LogoProps {
  firstName?: string;
  secondName?: string;
  icon?: 'zap' | 'utensils' | 'sparkles';
  accentColor?: string; // e.g., 'text-amber-500', 'text-emerald-500', 'text-pink-500'
}

export const NameLogo: React.FC<LogoProps> = ({
  firstName = "QRMENU",
  secondName = "PRO",
  icon = "utensils",
  accentColor = "text-amber-400"
}) => {
  return (
    <div className="flex items-center gap-2.5 font-black tracking-wider select-none cursor-pointer group">
      {/* Icon Box with Hover Pulse */}
      <div className="p-2.5 bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700/80 rounded-xl shadow-lg group-hover:scale-105 group-hover:border-amber-500 transition-all duration-300 flex items-center justify-center">
        {icon === 'utensils' && <Utensils className={`w-5 h-5 ${accentColor} fill-current`} />}
        {icon === 'zap' && <Zap className={`w-5 h-5 ${accentColor} fill-current`} />}
        {icon === 'sparkles' && <Sparkles className={`w-5 h-5 ${accentColor}`} />}
      </div>

      {/* Brand Text */}
      <div className="text-white font-extrabold text-xl sm:text-2xl tracking-tight font-sans">
        <span>{firstName}</span>
        <span className={accentColor}>{secondName}</span>
      </div>
    </div>
  );
};
