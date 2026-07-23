'use client';

import React, { useEffect, useState } from 'react';
import { fetchLiveSheetProjects, SheetProjectRow } from '@/lib/sheets';
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  RefreshCw,
  MapPin,
  Database,
  Calendar,
  Sparkles,
  ExternalLink,
  WifiOff,
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProjectTracker() {
  const [projects, setProjects] = useState<SheetProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFromCache, setIsFromCache] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const loadData = async () => {
    setLoading(true);
    const result = await fetchLiveSheetProjects();
    setProjects(result.data);
    setIsFromCache(result.fromCache);
    setLastUpdated(result.lastUpdated);
    setLoading(false);
    toast.success(result.fromCache ? 'Loaded Cached Data' : 'Synced with Live Google Sheet!');
  };

  useEffect(() => {
    loadData();
  }, []);

  const calculateDaysLeft = (deadlineStr: string) => {
    if (!deadlineStr) return 'N/A';
    const target = new Date(deadlineStr);
    const today = new Date();
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (isNaN(diffDays)) return deadlineStr;
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due Today';
    return `${diffDays} Days Left`;
  };

  const getStatusBadge = (status: string) => {
    const s = (status || '').toLowerCase();
    if (s.includes('completed') || s.includes('done')) {
      return (
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold flex items-center space-x-1 w-fit">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>🟢 Completed</span>
        </span>
      );
    }
    if (s.includes('working') || s.includes('progress')) {
      return (
        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center space-x-1 w-fit animate-pulse">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>🟡 Working</span>
        </span>
      );
    }
    return (
      <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 text-xs font-mono font-bold flex items-center space-x-1 w-fit">
        <AlertCircle className="w-3.5 h-3.5 text-red-400" />
        <span>🔴 Pending</span>
      </span>
    );
  };

  const filteredProjects = projects.filter((p) => {
    const name = p['Client Name'] || '';
    const location = p.Location || '';
    const projectType = p['Project Type'] || '';
    const status = p.Status || '';

    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projectType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || status.toLowerCase().includes(statusFilter.toLowerCase());

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Toolbar & Live Sync Status */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center space-x-2 font-mono text-xs">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-900 text-white px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
            >
              <option value="ALL">All Statuses</option>
              <option value="working">🟡 Working</option>
              <option value="pending">🔴 Pending</option>
              <option value="completed">🟢 Completed</option>
            </select>
          </div>

          <button
            onClick={loadData}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold hover:bg-slate-800 transition-all flex items-center space-x-2 shadow-lg"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync Live</span>
          </button>
        </div>
      </div>

      {/* Sync Banner */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
        <div className="flex items-center space-x-2">
          <Database className="w-4 h-4 text-emerald-400" />
          <span>Backend: <strong>Google Sheets Apps Script API</strong></span>
          {isFromCache && (
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] flex items-center space-x-1">
              <WifiOff className="w-3 h-3" />
              <span>Offline Cache</span>
            </span>
          )}
        </div>
        <span className="text-[10px] text-slate-400">Last Synced: {lastUpdated}</span>
      </div>

      {/* Responsive Table / Card Container */}
      <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        {loading ? (
          <div className="p-12 text-center text-slate-400 font-mono space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-emerald-400" />
            <p>Fetching live data from Google Sheet...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/80 text-slate-400 font-mono border-b border-white/10 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4">Client Name & Location</th>
                  <th className="p-4">Project Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Progress (%)</th>
                  <th className="p-4">Deadline & Time</th>
                  <th className="p-4">Notes / Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {filteredProjects.map((p, idx) => {
                  const progressNum = typeof p.Progress === 'number' ? p.Progress : parseInt(p.Progress as string) || 0;
                  return (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-white text-sm">{p['Client Name']}</div>
                        <div className="text-[11px] text-emerald-400 font-mono flex items-center space-x-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-orange-400" />
                          <span>{p.Location}</span>
                        </div>
                      </td>

                      <td className="p-4 font-mono text-xs text-slate-200">
                        {p['Project Type']}
                      </td>

                      <td className="p-4">{getStatusBadge(p.Status)}</td>

                      <td className="p-4 w-40">
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono text-slate-400">
                            <span>Completion</span>
                            <span className="text-emerald-400 font-bold">{progressNum}%</span>
                          </div>
                          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/10">
                            <div
                              className={`h-full rounded-full transition-all ${
                                progressNum >= 100
                                  ? 'bg-emerald-500'
                                  : progressNum > 40
                                  ? 'bg-amber-500'
                                  : 'bg-red-500'
                              }`}
                              style={{ width: `${progressNum}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="p-4 font-mono text-xs text-slate-300">
                        <div>{p.Deadline}</div>
                        <div className="text-[10px] text-emerald-400 font-bold mt-0.5">
                          {calculateDaysLeft(p.Deadline)}
                        </div>
                      </td>

                      <td className="p-4 text-xs text-slate-400 max-w-xs truncate font-mono">
                        {p.Notes || 'No notes'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
