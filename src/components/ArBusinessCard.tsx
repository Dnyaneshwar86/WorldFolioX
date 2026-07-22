'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { QrCode, Download, Share2, Sparkles, Check, Phone, Mail, Globe } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ArBusinessCard() {
  const { persona } = useApp();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDownloadVcard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Dnyaneshwar
TITLE:Senior Software Architect
TEL:${persona.whatsappNumber}
EMAIL:dnyaneshwar@worldfoliox.dev
URL:https://worldfoliox.dev
NOTE:Built with WorldFolio X
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dnyaneshwar_WorldFolioX.vcf';
    link.click();
    toast.success('Downloaded vCard Business Contact!');
  };

  return (
    <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto space-y-8 text-center">
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 3D AR Business Card</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white">Digital Business Card</h2>
        <p className="text-slate-400 text-sm">Click card to flip between front & back vCard QR code</p>
      </div>

      {/* 3D Flip Card Container */}
      <div className="flex justify-center perspective-1000">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`w-80 sm:w-96 h-52 sm:h-60 rounded-2xl cursor-pointer transition-transform duration-700 transform-style-3d relative glass-panel border border-emerald-500/40 p-6 flex flex-col justify-between shadow-2xl hover:scale-105 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Card Front */}
          <div className="w-full h-full flex flex-col justify-between text-left space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-lg text-white">
                WorldFolio <span className="text-emerald-400">X</span>
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">{persona.flag} {persona.country}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Dnyaneshwar</h3>
              <p className="text-xs text-emerald-400 font-mono">Senior Fullstack & AI Architect</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/10">
              <span>{persona.whatsappNumber}</span>
              <span className="text-amber-400">Tap to flip 🔄</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Action Buttons */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={handleDownloadVcard}
          className="px-5 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-bold hover:bg-slate-800 transition-all flex items-center space-x-2 shadow-lg"
        >
          <Download className="w-4 h-4" />
          <span>Save Contact (.vcf)</span>
        </button>
      </div>
    </section>
  );
}
