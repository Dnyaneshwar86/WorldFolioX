'use client';

import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Plus,
  Copy,
  ExternalLink,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Filter,
  MessageSquare,
  Lock,
} from 'lucide-react';
import Link from 'next/link';
import BuildTimer from '@/components/BuildTimer';
import toast, { Toaster } from 'react-hot-toast';

interface ClientItem {
  id: string;
  name: string;
  contact: string;
  projectType: string;
  status: 'NEW' | 'CONTACTED' | 'WORKING' | 'PENDING' | 'COMPLETED' | 'ON_HOLD' | 'CANCELLED';
  token: string;
  deadline: string;
  progress: number;
}

export default function ClientFlowAdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const [clients, setClients] = useState<ClientItem[]>([
    {
      id: 'c1',
      name: 'रामभाऊ पाटील',
      contact: '+91 9822011223 (ramrao@patilmills.in)',
      projectType: 'Rural E-Commerce & Billing App',
      status: 'WORKING',
      token: 'patil-sangamner-7788',
      deadline: '2026-07-26',
      progress: 75,
    },
    {
      id: 'c2',
      name: 'John Smith (Apex Cloud)',
      contact: 'john@apexcloud.io',
      projectType: 'Enterprise Agentic AI Pipeline',
      status: 'WORKING',
      token: 'apex-sf-9921',
      deadline: '2026-07-28',
      progress: 50,
    },
    {
      id: 'c3',
      name: 'विजय ट्रॅव्हल्स',
      contact: '+91 9422099887',
      projectType: 'Bus Booking & GPS App',
      status: 'COMPLETED',
      token: 'vijay-bus-1002',
      deadline: '2026-07-18',
      progress: 100,
    },
    {
      id: 'c4',
      name: 'गणेश डेअरी फॉर्म्स',
      contact: '+91 9977011223',
      projectType: 'Milk Collection App',
      status: 'PENDING',
      token: 'ganesh-dairy-4410',
      deadline: '2026-07-29',
      progress: 15,
    },
  ]);

  const handleUpdateStatus = (id: string, newStatus: ClientItem['status']) => {
    setClients(
      clients.map((c) => (c.id === id ? { ...c, status: newStatus, progress: newStatus === 'COMPLETED' ? 100 : c.progress } : c))
    );
    toast.success(`Client status updated to ${newStatus}`);
  };

  const copyClientPortalLink = (token: string) => {
    const url = `${window.location.origin}/client/${token}`;
    navigator.clipboard.writeText(url);
    toast.success('Copied Client Portal URL to Clipboard!');
  };

  const filteredClients = clients.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.projectType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 space-y-8 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Toaster position="top-right" />

      {/* Admin Header */}
      <header className="max-w-6xl mx-auto glass-panel p-4 rounded-3xl border border-emerald-500/40 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold text-white">ClientFlow CRM Admin</h1>
              <Lock className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">Dnyaneshwar's Client Management Dashboard</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <BuildTimer />
        </div>
      </header>

      {/* Toolbar */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search client or project type..."
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 pl-10 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="text-slate-400">Status Filter:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-900 text-white px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="NEW">NEW</option>
            <option value="WORKING">WORKING</option>
            <option value="PENDING">PENDING</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
      </div>

      {/* Clients Management Table */}
      <div className="max-w-6xl mx-auto glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 text-slate-400 font-mono border-b border-white/10 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Client Name & Contact</th>
                <th className="p-4">Project Type</th>
                <th className="p-4">Status & Action</th>
                <th className="p-4">Deadline</th>
                <th className="p-4">Portal Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {filteredClients.map((c) => (
                <tr key={c.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-white text-sm">{c.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{c.contact}</div>
                  </td>

                  <td className="p-4">
                    <div className="text-xs text-emerald-400 font-mono font-medium">{c.projectType}</div>
                  </td>

                  <td className="p-4">
                    <select
                      value={c.status}
                      onChange={(e) => handleUpdateStatus(c.id, e.target.value as ClientItem['status'])}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border focus:outline-none cursor-pointer ${
                        c.status === 'COMPLETED'
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : c.status === 'WORKING'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-red-500/20 border-red-500 text-red-300'
                      }`}
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="WORKING">WORKING</option>
                      <option value="PENDING">PENDING</option>
                      <option value="COMPLETED">COMPLETED</option>
                    </select>
                  </td>

                  <td className="p-4 font-mono text-xs text-slate-300">
                    <div>{c.deadline}</div>
                    <div className="text-[10px] text-slate-500">{c.progress}% Progress</div>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyClientPortalLink(c.token)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
                      >
                        <Copy className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copy Link</span>
                      </button>

                      <Link
                        href={`/client/${c.token}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
