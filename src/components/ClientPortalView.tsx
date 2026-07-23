'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowLeft,
  Send,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import BuildTimer from '@/components/BuildTimer';
import toast, { Toaster } from 'react-hot-toast';

export default function ClientPortalView({ token }: { token: string }) {
  const { persona } = useApp();

  const [notes, setNotes] = useState([
    { id: 'n1', text: 'माझ्या किराणा दुकानासाठी मराठीत बिलिंग व स्टॉक ॲप बनवायचे आहे.', author: 'Client Inquiry', time: 'Initial Request' },
    { id: 'n2', text: 'मराठी बारकोड स्कॅनर डिझाइन पूर्ण झाले.', author: 'Dnyaneshwar', time: 'Yesterday' },
    { id: 'n3', text: 'UPI QR Payment modal connected.', author: 'Dnyaneshwar', time: 'Today' },
  ]);

  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setNotes([...notes, { id: `n_${Date.now()}`, text: newNote, author: 'Client Update', time: 'Just Now' }]);
    toast.success('Note added to project log!');
    setNewNote('');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 space-y-8 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Toaster position="top-right" />

      {/* Header Bar */}
      <header className="max-w-5xl mx-auto glass-panel p-4 rounded-3xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-300" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold text-white">ClientFlow Portal</h1>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">Unique Tracking Token: {token || 'patil-sangamner-7788'}</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <BuildTimer />
        </div>
      </header>

      {/* Main Client Progress Card */}
      <div className="max-w-5xl mx-auto glass-panel p-8 rounded-3xl border border-emerald-500/40 space-y-8 shadow-2xl">
        {/* Project Header info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] uppercase font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
              Private Client Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              रामभाऊ पाटील — किराणा दुकान बिलिंग ॲप
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Sangamner, Maharashtra 🌾 • Rural E-Commerce & Billing</p>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold flex items-center space-x-2">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Status: 🟡 Working (75% Done)</span>
          </div>
        </div>

        {/* Visual Progress Stepper */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Project Progress Stepper</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-bold">
              ✓ 1. Inquiry Received
            </div>
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-bold">
              ✓ 2. Contacted & Scope
            </div>
            <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-400 text-amber-300 font-bold ring-2 ring-amber-400/40 animate-pulse">
              ⚡ 3. Working (75%)
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500">
              4. Review & Testing
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500">
              5. Final Handover
            </div>
          </div>
        </div>

        {/* Timeline & Delivery Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-900 border border-white/5 space-y-1">
            <span className="text-slate-500 text-[10px]">Start Date</span>
            <div className="text-white font-bold">2026-07-20</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-white/5 space-y-1">
            <span className="text-slate-500 text-[10px]">Est. Delivery</span>
            <div className="text-emerald-400 font-bold">2026-07-24 (2 Days)</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-white/5 space-y-1">
            <span className="text-slate-500 text-[10px]">Assigned Lead</span>
            <div className="text-white font-bold">Dnyaneshwar (Senior Dev)</div>
          </div>
        </div>

        {/* Developer Notes & Updates Timeline */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Developer Public Notes & Updates</span>
          </h3>

          <div className="space-y-3">
            {notes.map((n) => (
              <div key={n.id} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
                <div className="flex justify-between text-slate-400 font-mono text-[10px]">
                  <span className="text-emerald-400 font-bold">{n.author}</span>
                  <span>{n.time}</span>
                </div>
                <p className="text-slate-200">{n.text}</p>
              </div>
            ))}
          </div>

          {/* Add Message/Note Form */}
          <form onSubmit={handleAddNote} className="flex gap-2 pt-2">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Write a message or revision note for Dnyaneshwar..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors flex items-center space-x-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Note</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
