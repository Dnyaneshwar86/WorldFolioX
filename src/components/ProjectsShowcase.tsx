'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { PROJECTS } from '@/lib/data';
import { RegionId } from '@/lib/types';
import { ExternalLink, Code2, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectsShowcase() {
  const { persona, dict } = useApp();
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'local') return p.region === persona.id;
    return p.category.toLowerCase().includes(filter);
  });

  return (
    <section id="projects" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Curated Portfolio • Geo-Filtered</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          {dict.navProjects} Showcase
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          High-impact applications tailored for {persona.locationName} and global markets.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
        {['all', 'local', 'fullstack', 'fintech', 'enterprise'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl border transition-all ${
              filter === f
                ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {f === 'local' ? `📍 ${persona.country} Relevant` : f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-2xl"
          >
            {/* Image Banner */}
            <div className="relative aspect-video overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                {project.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Impact Metrics */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[10px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{project.metrics}</span>
                </div>
              </div>

              {/* Live Link */}
              {project.liveUrl && (
                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View Live Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
