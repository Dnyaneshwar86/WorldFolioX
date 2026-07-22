'use client';

import React from 'react';
import { useApp } from '@/lib/store';
import { TESTIMONIALS } from '@/lib/data';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const { persona, dict } = useApp();

  // Highlight client testimonials matching region or show all
  const sortedTestimonials = [...TESTIMONIALS].sort((a, b) => {
    if (a.region === persona.id) return -1;
    if (b.region === persona.id) return 1;
    return 0;
  });

  return (
    <section id="testimonials" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>Regional Client Reviews</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          {dict.navTestimonials} & Endorsements
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Real feedback from founders, executives, and village co-op leaders.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedTestimonials.map((t) => {
          const isCurrentRegion = t.region === persona.id;
          return (
            <div
              key={t.id}
              className={`p-6 rounded-3xl glass-panel border transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl ${
                isCurrentRegion
                  ? 'border-emerald-500/60 bg-emerald-950/20 ring-1 ring-emerald-500/30'
                  : 'border-white/10 hover:border-slate-700'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  {isCurrentRegion && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-bold">
                      📍 Near You
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400/50"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-emerald-400 font-mono">{t.role}, {t.company}</p>
                  <p className="text-[10px] text-slate-400 flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-orange-400" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
