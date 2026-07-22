'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { MapPin, Users, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LocalTrustMap() {
  const { persona, dict } = useApp();
  const [activeNode, setActiveNode] = useState<string | null>('node_1');

  const CLIENT_NODES = [
    { id: 'node_1', city: persona.locationName, project: 'E-Commerce & Billing Portal', date: '2 days ago', status: 'Delivered', x: '35%', y: '45%' },
    { id: 'node_2', city: 'Mumbai / Pune Tech Corridor', project: 'Fintech Real-Time Dashboard', date: '5 days ago', status: 'Active', x: '55%', y: '35%' },
    { id: 'node_3', city: 'San Francisco Bay Area', project: 'Enterprise Agentic AI Pipeline', date: '1 week ago', status: 'Maintained', x: '75%', y: '55%' },
    { id: 'node_4', city: 'Berlin CleanTech Cluster', project: 'Accessible UX Design System', date: '2 weeks ago', status: 'Completed', x: '25%', y: '65%' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
          <Globe className="w-3.5 h-3.5" />
          <span>Hyper-Local Social Proof Engine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          {dict.trustMapHeader}
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Anonymized live map showing client engagements and project deployments near your location.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-80 sm:h-96 rounded-3xl glass-panel border border-white/10 overflow-hidden flex items-center justify-center p-6 bg-slate-950/60 shadow-2xl">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Floating Social Proof Scarcity Banner */}
        <div className="absolute top-4 left-4 z-20 px-4 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-xs text-white font-mono flex items-center space-x-2 shadow-lg">
          <Users className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>🔥 <strong>3 clients</strong> from {persona.locationName} hired me this month!</span>
        </div>

        {/* Interactive Client Nodes */}
        {CLIENT_NODES.map((node) => (
          <div
            key={node.id}
            onClick={() => setActiveNode(node.id)}
            style={{ left: node.x, top: node.y }}
            className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
              activeNode === node.id ? 'scale-125 z-30' : 'hover:scale-110 opacity-70'
            }`}
          >
            <div className="relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <div className="relative p-2.5 rounded-full bg-slate-900 border-2 border-emerald-400 text-emerald-400 shadow-xl">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}

        {/* Selected Node Details Card Popup */}
        {activeNode && (
          <div className="absolute bottom-4 right-4 z-20 max-w-xs w-full p-4 rounded-2xl glass-panel border border-emerald-500/50 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {(() => {
              const node = CLIENT_NODES.find((n) => n.id === activeNode);
              if (!node) return null;
              return (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-bold">{node.city}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {node.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{node.project}</h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/10">
                    <span>Deployed {node.date}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
