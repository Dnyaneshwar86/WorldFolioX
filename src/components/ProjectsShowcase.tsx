'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { PROJECTS } from '@/lib/data';
import { RegionId } from '@/lib/types';
import { ExternalLink, Code2, Sparkles, CheckCircle2, Layers, Search, Github, FolderGit2, Star, Pin } from 'lucide-react';

export const PINNED_FLAGSHIP_REPOS = [
  { name: 'digital-visiting-card', role: '📱 Smart Digital vCard & AR Badge Generator', tag: '3D WebGL / vCard', isFlagship: true },
  { name: 'PixelCraft', role: '🎨 Creative UI Design & Canvas Editor', tag: 'Canvas / PWA', isFlagship: true },
  { name: 'omnivibe', role: '🤖 AI Neural Audio & Web Platform Engine', tag: 'Web Audio / WebGL', isFlagship: true },
  { name: 'AI-TOOL-', role: '🛠️ All-in-One AI Developer Toolkit', tag: 'AI / Automation', isFlagship: true },
  { name: 'hirva-mala', role: '🌿 Agro-Tech & Organic Produce Portal (Live)', tag: 'React / PWA / AgroTech', isFlagship: true },
  { name: 'dnyaneshwar.dev', role: '🌍 Personal Domain Identity Portfolio Code', tag: 'Portfolio / Identity', isFlagship: true },
  { name: 'DEVDASH-120', role: '💻 SaaS Source Code & Digital Store Engine', tag: 'Next.js 14 / Realtime', isFlagship: true },
  { name: 'WorldFolioX', role: '🌐 Smart Portfolio + ClientFlow CRM Engine', tag: 'Next.js 14 / TypeScript', isFlagship: true },
  { name: 'dnyaneshwar', role: '👤 GitHub Profile Special README Repo', tag: 'GitHub Profile', isFlagship: true },
];

export const GITHUB_REPOS = [
  ...PINNED_FLAGSHIP_REPOS,
  { name: 'Shrigonda-Cricket-Arena', role: 'Live Cricket Tournament Scoring Dashboard', tag: 'React / Live Score', isFlagship: false },
  { name: 'Civil-Diploma-AI', role: 'AI Assistant for Civil Engineering Diploma', tag: 'EdTech / AI', isFlagship: false },
  { name: 'civil-god-mode', role: 'Advanced Civil Engineering Site Solver', tag: 'Civil AI / Math', isFlagship: false },
  { name: 'omnipura-ai-core', role: 'Multi-Agent LLM Orchestration Engine', tag: 'Python / Agentic AI', isFlagship: false },
  { name: 'focus.today', role: 'Gamified Deep Focus Timer', tag: 'LocalFirst / PWA', isFlagship: false },
  { name: 'mahaseva', role: 'MahaSeva Digital Citizen Portal', tag: 'GovTech / i18n', isFlagship: false },
  { name: 'starlight', role: 'Cosmic Cyberpunk Design System', tag: 'Tailwind / Glass', isFlagship: false },
  { name: 'Eklavya-2.0-.-', role: 'Adaptive Learning AI Platform', tag: 'EdTech / AI', isFlagship: false },
  { name: 'Chrono-hacks2.0', role: 'Hackathon Timer & Sync Console', tag: 'Realtime / Timer', isFlagship: false },
  { name: 'DNYANESHWARCSC', role: 'Common Service Center Kiosk', tag: 'Citizen Services', isFlagship: false },
];

export default function ProjectsShowcase() {
  const { persona, dict } = useApp();
  const [filter, setFilter] = useState<string>('all');
  const [repoSearch, setRepoSearch] = useState<string>('');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'local') return p.region === persona.id;
    return p.category.toLowerCase().includes(filter);
  });

  const filteredRepos = GITHUB_REPOS.filter(
    (r) => r.name.toLowerCase().includes(repoSearch.toLowerCase()) || r.role.toLowerCase().includes(repoSearch.toLowerCase())
  );

  return (
    <section id="projects" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
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

      {/* Pinned 9 Flagship Repositories Spotlight */}
      <div className="pt-10 space-y-6">
        <div className="glass-panel p-6 rounded-3xl border border-amber-500/40 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Pin className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" />
                <h3 className="text-xl font-black text-white tracking-wide">
                  9 Core Flagship Repositories (Pinned)
                </h3>
              </div>
              <p className="text-xs text-amber-300/80 font-mono">Dnyaneshwar's top 9 curated production codebases</p>
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={repoSearch}
                onChange={(e) => setRepoSearch(e.target.value)}
                placeholder="Search Repositories..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 pl-9 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
              />
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRepos.map((repo, idx) => (
              <a
                key={idx}
                href={`https://github.com/Dnyaneshwar86/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl border transition-all hover:-translate-y-1 space-y-2 group ${
                  repo.isFlagship
                    ? 'bg-amber-950/20 border-amber-500/40 hover:border-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/80 border-slate-800/80 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                    {repo.isFlagship ? (
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ) : (
                      <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                    <span className="truncate max-w-[150px]">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400" />
                </div>
                <p className="text-[11px] text-slate-300 font-sans line-clamp-2 leading-relaxed">{repo.role}</p>
                <div className="flex items-center justify-between pt-1">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                      repo.isFlagship
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-900 text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    {repo.tag}
                  </span>
                  {repo.isFlagship && (
                    <span className="text-[9px] text-amber-400 font-mono font-bold uppercase tracking-wider">★ Flagship</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
