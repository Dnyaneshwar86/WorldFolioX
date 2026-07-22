'use client';

import React from 'react';
import { useApp } from '@/lib/store';
import { Download, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import jsPDF from 'jspdf';
import toast from 'react-hot-toast';

export default function ResumeDownloader() {
  const { persona, lang, dict } = useApp();

  const generatePdfResume = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.setTextColor(16, 185, 129);
      doc.text(`Dnyaneshwar - WorldFolio X Resume (${lang.toUpperCase()})`, 14, 22);

      doc.setFontSize(11);
      doc.setTextColor(100, 116, 139);
      doc.text(`Target Region: ${persona.locationName} (${persona.country})`, 14, 30);
      doc.text(`Generated Epoch: 2026-07-22 IST`, 14, 36);

      doc.setFontSize(14);
      doc.setTextColor(15, 23, 42);
      doc.text('Professional Summary', 14, 48);

      doc.setFontSize(10);
      doc.setTextColor(51, 65, 85);
      const summary = `Senior Fullstack & AI Engineer with extensive experience building hyper-adaptive applications in Next.js 14, TypeScript, Tailwind CSS, and Python AI microservices. Proven track record from rural Indian e-commerce solutions to global enterprise SaaS platforms.`;
      doc.text(doc.splitTextToSize(summary, 180), 14, 56);

      doc.setFontSize(14);
      doc.setTextColor(15, 23, 42);
      doc.text('Key Skills & Technologies', 14, 80);

      doc.setFontSize(10);
      doc.text('- Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS', 14, 88);
      doc.text('- AI Engineering: OpenAI, LangChain, RAG Pipelines, Web Speech API', 14, 94);
      doc.text('- Backend & DB: Node.js, Python FastAPI, PostgreSQL, Prisma, WebSockets', 14, 100);
      doc.text('- DevOps & Cloud: Vercel, Docker, CI/CD, PWA, WCAG AAA Accessibility', 14, 106);

      doc.setFontSize(14);
      doc.setTextColor(15, 23, 42);
      doc.text('Contact Details', 14, 120);
      doc.setFontSize(10);
      doc.text(`WhatsApp: ${persona.whatsappNumber}`, 14, 128);
      doc.text(`Website: https://worldfoliox.dev`, 14, 134);

      doc.save(`Dnyaneshwar_Resume_${persona.country}_${lang}.pdf`);
      toast.success('Generated PDF Resume in your active language!');
    } catch (err) {
      toast.error('Failed to generate PDF');
    }
  };

  return (
    <div className="flex justify-center py-6">
      <button
        onClick={generatePdfResume}
        className="px-6 py-3 rounded-2xl glass-panel border border-emerald-500/40 text-white font-bold text-xs hover:border-emerald-400 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
      >
        <FileText className="w-4 h-4 text-emerald-400" />
        <span>{dict.ctaResume}</span>
      </button>
    </div>
  );
}
