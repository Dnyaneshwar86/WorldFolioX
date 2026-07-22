'use client';

import React from 'react';
import { TIMELINE_STORY } from '@/lib/data';
import { Sparkles, Compass, Rocket, Award, ShieldCheck } from 'lucide-react';

export default function ScrollStoryTimeline() {
  return (
    <section id="story" className="py-16 px-4 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Journey • Village to Global</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          The Developer's Odyssey
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          How local grassroot problem-solving evolved into building world-class AI platforms for global leaders.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-10">
        {TIMELINE_STORY.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-emerald-950">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>

            {/* Year Badge Positioned to Left on Desktop */}
            <div className="sm:absolute sm:-left-32 sm:top-1 font-mono font-bold text-sm text-emerald-400 mb-1 sm:mb-0">
              {item.year}
            </div>

            {/* Timeline Card Content */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 space-y-2 group-hover:shadow-2xl group-hover:shadow-emerald-950/40">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-slate-400 font-mono font-medium">
                  {item.subtitle}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
