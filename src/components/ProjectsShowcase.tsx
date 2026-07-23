'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { PROJECTS } from '@/lib/data';
import { RegionId } from '@/lib/types';
import { ExternalLink, Code2, Sparkles, CheckCircle2, Layers, Search, Github, FolderGit2 } from 'lucide-react';

export const GITHUB_REPOS = [
  { name: 'WorldFolioX', desc: 'Hyper-Adaptive AI Portfolio & Digital Agency CRM', tag: 'Next.js 14 / TypeScript' },
  { name: 'hirva-mala', desc: 'Eco-Agro Organic Farming Direct Portal', tag: 'React / PWA / AgroTech' },
  { name: 'digital-visiting-card', desc: 'Smart 3D vCard & AR Badge Generator', tag: '3D WebGL / vCard' },
  { name: 'DEVDASH-120', desc: '120-Minute Developer Launch Workspace', tag: 'Next.js 14 / Realtime' },
  { name: 'Shrigonda-Cricket-Arena', desc: 'Live Cricket Tournament Scoring Dashboard', tag: 'React / Live Score' },
  { name: 'Civil-Diplomaai', desc: 'AI Assistant for Civil Engineering Diploma', tag: 'EdTech / AI' },
  { name: 'civil-god-mode', desc: 'Advanced Civil Engineering Site & Formula Solver', tag: 'Civil AI / Math' },
  { name: 'omnipura-ai-core', desc: 'Multi-Agent LLM Orchestration Engine', tag: 'Python / Agentic AI' },
  { name: 'omnivibe', desc: 'Neural Audio & Vibe Synthesis Studio', tag: 'Web Audio / WebGL' },
  { name: 'PixelCraft', desc: 'Browser Creative Image Editing Suite', tag: 'Canvas / PWA' },
  { name: 'focus.today', desc: 'Gamified Deep Focus & Productivity Timer', tag: 'LocalFirst / PWA' },
  { name: 'mahaseva', desc: 'MahaSeva Digital Citizen Services Portal', tag: 'GovTech / i18n' },
  { name: 'starlight', desc: 'Cosmic Cyberpunk Design System', tag: 'Tailwind / Glass' },
  { name: 'dnyaneshwar.dev', desc: 'Personal Developer Identity Hub', tag: 'Portfolio / Identity' },
  { name: 'Eklavya-2.0-.-', desc: 'Adaptive Learning AI Platform', tag: 'EdTech / AI' },
  { name: 'Chrono-hacks2.0', desc: 'Hackathon Timer & Team Sync Console', tag: 'Realtime / Timer' },
  { name: 'Photo-editor-', desc: 'Online Photo Filters & Web Processor', tag: 'Canvas / Image' },
  { name: '-DNYANESHWAR-DIGITAL-MARKETER', desc: 'Digital Marketing & Growth Engine', tag: 'Growth / SEO' },
  { name: 'DNYANESHWARCSC', desc: 'Common Service Center Digital Kiosk', tag: 'Citizen Services' },
  { name: 'Civil-Diploma-Word-AI', desc: 'AI Civil Document & Estimation Generator', tag: 'AI Docs / Civil' },
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
    (r) => r.name.toLowerCase().includes(repoSearch.toLowerCase()) || r.desc.toLowerCase().includes(repoSearch.toLowerCase())
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

      {/* GitHub Repositories Vault */}
      <div className="pt-10 space-y-6">
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Full GitHub Repositories Vault (Dnyaneshwar86)</h3>
              </div>
              <p className="text-xs text-slate-400 font-mono">Explore 35+ open-source repositories and live deployments</p>
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={repoSearch}
                onChange={(e) => setRepoSearch(e.target.value)}
                placeholder="Search 35+ GitHub Repositories..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 pl-9 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredRepos.map((repo, idx) => (
              <a
                key={idx}
                href={`https://github.com/Dnyaneshwar86/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/50 transition-all hover:-translate-y-1 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                    <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="truncate max-w-[140px]">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400" />
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">{repo.desc}</p>
                <span className="inline-block px-2 py-0.5 rounded bg-slate-900 text-emerald-300 border border-emerald-500/20 text-[9px] font-mono font-bold">
                  {repo.tag}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
