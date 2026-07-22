'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { ShieldCheck, Clock, Users, Globe, Settings, Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const { timerStartTime, setTimerStartTime } = useApp();
  const [newTime, setNewTime] = useState(timerStartTime);

  const MOCK_VISITOR_LOGS = [
    { id: '1', time: '10 mins ago', city: 'Sangamner, IN', device: 'Mobile Android', lang: 'mr', action: 'Downloaded PDF Resume' },
    { id: '2', time: '25 mins ago', city: 'Mumbai, IN', device: 'Desktop Chrome', lang: 'hi', action: 'Clicked UPI Payment' },
    { id: '3', time: '40 mins ago', city: 'San Francisco, US', device: 'Macbook Safari', lang: 'en', action: 'Played Video AI Greeting' },
    { id: '4', time: '1 hour ago', city: 'Berlin, DE', device: 'Linux Firefox', lang: 'de', action: 'Tested Voice Control' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 lg:p-12 space-y-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500">
            <ArrowLeft className="w-5 h-5 text-slate-300" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span>WorldFolio X Admin Dashboard</span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </h1>
            <p className="text-xs text-slate-400 font-mono">Manage timer, visitor analytics & persona configurations</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Timer Config */}
        <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
          <div className="flex items-center space-x-2 text-emerald-400 font-mono font-bold text-sm">
            <Clock className="w-4 h-4" />
            <span>"Built in 90 Mins" Live Timer Epoch</span>
          </div>
          <p className="text-xs text-slate-300">
            Adjust the ISO creation timestamp from which the count-up timer calculates elapsed build time.
          </p>
          <div className="space-y-2">
            <input
              type="text"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white font-mono"
            />
            <button
              onClick={() => setTimerStartTime(newTime)}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
            >
              Update Timer Epoch
            </button>
          </div>
        </div>

        {/* Live Visitor DB Logs */}
        <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
          <div className="flex items-center space-x-2 text-blue-400 font-mono font-bold text-sm">
            <Database className="w-4 h-4" />
            <span>Anonymized Visitor Logs (Prisma DB)</span>
          </div>
          <div className="space-y-2">
            {MOCK_VISITOR_LOGS.map((log) => (
              <div key={log.id} className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-xs flex items-center justify-between">
                <div>
                  <span className="font-mono text-emerald-400 font-bold">{log.city}</span>
                  <span className="text-slate-400 ml-2">({log.device})</span>
                  <p className="text-[10px] text-slate-500">{log.action}</p>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
