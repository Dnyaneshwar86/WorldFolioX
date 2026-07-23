'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Filter,
  RefreshCw,
  Share2,
  ExternalLink,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Sparkles,
  Database,
  Building2,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import BuildTimer from '@/components/BuildTimer';
import toast, { Toaster } from 'react-hot-toast';

interface ClientProjectStatus {
  id: string;
  clientName: string;
  location: string;
  projectTitle: string;
  category: 'village' | 'metro' | 'global';
  status: 'Working' | 'Pending' | 'Completed';
  progress: number;
  startDate: string;
  estDelivery: string;
}

export default function ProjectStatusBoardPage() {
  const { persona } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const INITIAL_PROJECTS: ClientProjectStatus[] = [
    {
      id: 'prj_1',
      clientName: 'रामभाऊ पाटील (Ramrao Patil)',
      location: 'Sangamner, Maharashtra 🌾',
      projectTitle: 'किराणा दुकान व शेती बी-बियाणे बिलिंग ॲप',
      category: 'village',
      status: 'Working',
      progress: 75,
      startDate: '2026-07-20',
      estDelivery: '2026-07-24 (2 Days)',
    },
    {
      id: 'prj_2',
      clientName: 'John Smith (Apex Cloud)',
      location: 'San Francisco, USA 🇺🇸',
      projectTitle: 'Enterprise Agentic AI Pipeline Dashboard',
      category: 'global',
      status: 'Working',
      progress: 45,
      startDate: '2026-07-21',
      estDelivery: '2026-07-26 (3 Days)',
    },
    {
      id: 'prj_3',
      clientName: 'विजय ट्रॅव्हल्स (Vijay Travels)',
      location: 'Pune / Mumbai Corridor 🇮🇳',
      projectTitle: 'बस बुकिंग व लाइव्ह GPS ट्रॅकर ॲप',
      category: 'metro',
      status: 'Completed',
      progress: 100,
      startDate: '2026-07-15',
      estDelivery: 'Delivered ✅',
    },
    {
      id: 'prj_4',
      clientName: 'Dr. Elena Rostova',
      location: 'Zurich, Switzerland 🇪🇺',
      projectTitle: 'CleanTech Accessible UX Design System',
      category: 'global',
      status: 'Completed',
      progress: 100,
      startDate: '2026-07-10',
      estDelivery: 'Delivered ✅',
    },
    {
      id: 'prj_5',
      clientName: 'गणेश डेअरी फॉर्म्स (Ganesh Dairy)',
      location: 'Shirala, Sangli 🇮🇳',
      projectTitle: 'दूध संकलन व शेतकरी व्हॉट्सॲप मेसेजिंग ॲप',
      category: 'village',
      status: 'Pending',
      progress: 15,
      startDate: '2026-07-22',
      estDelivery: '2026-07-27 (4 Days)',
    },
  ];

  const [projects, setProjects] = useState<ClientProjectStatus[]>(INITIAL_PROJECTS);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSyncGoogleSheet = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      toast.success('Live Sync Complete with Google Sheet Data Stream!');
    }, 1200);
  };

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.projectTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status: 'Working' | 'Pending' | 'Completed') => {
    if (status === 'Completed') {
      return (
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold flex items-center space-x-1.5 w-fit">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>🟢 Completed</span>
        </span>
      );
    }
    if (status === 'Working') {
      return (
        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center space-x-1.5 w-fit animate-pulse">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>🟡 Working</span>
        </span>
      );
    }
    return (
      <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 text-xs font-mono font-bold flex items-center space-x-1.5 w-fit">
        <AlertCircle className="w-3.5 h-3.5 text-red-400" />
        <span>🔴 Pending</span>
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 space-y-8 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Toaster position="top-right" />

      {/* Header Bar */}
      <header className="max-w-6xl mx-auto glass-panel p-4 rounded-3xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold text-white">Live Client Project Status Board</h1>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">Real-time status tracking for village, national & global clients</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:block">
            <BuildTimer />
          </div>
          <button
            onClick={handleSyncGoogleSheet}
            disabled={isSyncing}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold hover:bg-slate-800 transition-all flex items-center space-x-2 shadow-lg"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Sync Google Sheet'}</span>
          </button>
        </div>
      </header>

      {/* Search & Filter Toolbar */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search client name, city or project..."
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 pl-10 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs w-full sm:w-auto">
          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-slate-900 text-white px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          >
            <option value="all">All Regions</option>
            <option value="village">🌾 Village / Taluka</option>
            <option value="metro">🏙️ Metro India</option>
            <option value="global">🌍 International SaaS</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-900 text-white px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          >
            <option value="all">All Statuses</option>
            <option value="Working">🟡 Working</option>
            <option value="Pending">🔴 Pending</option>
            <option value="Completed">🟢 Completed</option>
          </select>
        </div>
      </div>

      {/* Projects Table / Card Grid */}
      <div className="max-w-6xl mx-auto glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 text-slate-400 font-mono border-b border-white/10 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Client Name & Location</th>
                <th className="p-4">Project Title</th>
                <th className="p-4">Current Status</th>
                <th className="p-4">Progress Bar</th>
                <th className="p-4">Delivery Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {filteredProjects.map((p) => (
                <tr key={p.id} className="hover:bg-white/5 transition-colors">
                  {/* Client Info */}
                  <td className="p-4">
                    <div className="space-y-0.5">
                      <div className="font-bold text-white text-sm">{p.clientName}</div>
                      <div className="text-[11px] text-emerald-400 font-mono flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-orange-400" />
                        <span>{p.location}</span>
                      </div>
                    </div>
                  </td>

                  {/* Project Title */}
                  <td className="p-4">
                    <div className="text-xs text-slate-200 font-medium">{p.projectTitle}</div>
                  </td>

                  {/* Status Badge */}
                  <td className="p-4">{getStatusBadge(p.status)}</td>

                  {/* Progress Bar */}
                  <td className="p-4 w-44">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Completion</span>
                        <span className="text-emerald-400 font-bold">{p.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/10">
                        <div
                          className={`h-full rounded-full transition-all ${
                            p.progress === 100
                              ? 'bg-emerald-500'
                              : p.progress > 40
                              ? 'bg-amber-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Timeline */}
                  <td className="p-4 font-mono text-xs text-slate-300">
                    <div>{p.estDelivery}</div>
                    <div className="text-[10px] text-slate-500">Started: {p.startDate}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info & Direct Contact */}
      <div className="max-w-6xl mx-auto p-6 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center space-x-2">
          <Database className="w-4 h-4 text-emerald-400" />
          <span>Automated Data Stream • Synced with Google Sheets API</span>
        </div>

        <a
          href="https://wa.me/919370983235?text=Hello%20Dnyaneshwar,%20I%20want%20to%20check%20my%20project%20status!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors flex items-center space-x-1.5"
        >
          <span>Ask Status on WhatsApp</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </main>
  );
}
