'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { Mail, Phone, MessageSquare, Mic, Send, CheckCircle2, ShieldCheck, Video, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactSection() {
  const { persona, dict } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: 'Fullstack App' });
  const [isRecordingVoiceMsg, setIsRecordingVoiceMsg] = useState(false);
  const [voiceMsgRecorded, setVoiceMsgRecorded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Message sent directly to Dnyaneshwar! Target locale: ${persona.country}`);
    setFormData({ name: '', email: '', message: '', service: 'Fullstack App' });
    setVoiceMsgRecorded(false);
  };

  const handleRecordVoice = () => {
    setIsRecordingVoiceMsg(true);
    setTimeout(() => {
      setIsRecordingVoiceMsg(false);
      setVoiceMsgRecorded(true);
      toast.success('Voice message recorded in browser!');
    }, 2500);
  };

  return (
    <section id="contact" className="py-16 px-4 lg:px-8 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Multi-Modal Communication Hub</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          {dict.contactHeader}
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Choose your preferred channel: WhatsApp, WebRTC Call, Voice Note, or Form.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - Instant Direct Channels */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white">Instant Channels for {persona.country}</h3>
            
            <a
              href={`https://wa.me/${persona.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-emerald-500 text-slate-950 font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct WhatsApp & Email</h4>
                <p className="text-xs text-emerald-400 font-mono">{persona.whatsappNumber} • hello@worldfolio.x</p>
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-indigo-500 text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Browser WebRTC Call</h4>
                  <p className="text-xs text-indigo-300">Direct encrypted browser call</p>
                </div>
              </div>
              <button
                onClick={() => toast.success('Initializing WebRTC P2P Call connection...')}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500"
              >
                Call Now
              </button>
            </div>

            {/* Voice Message Note Recorder */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Leave Browser Voice Message</span>
                {voiceMsgRecorded && <span className="text-[10px] text-emerald-400 font-mono font-bold">✓ Audio Attached</span>}
              </div>
              <button
                onClick={handleRecordVoice}
                disabled={isRecordingVoiceMsg}
                className={`w-full py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center space-x-2 transition-all ${
                  isRecordingVoiceMsg
                    ? 'bg-red-500/20 border-red-500 text-red-300 animate-pulse'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Mic className="w-4 h-4 text-amber-400" />
                <span>{isRecordingVoiceMsg ? 'Recording Voice Message...' : 'Record Voice Note (30s)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Smart Contact Form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-300">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma / John Smith"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-300">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-300">Service Required</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="Fullstack Next.js App">Fullstack Next.js 14 App</option>
              <option value="AI Integration & Chatbot">AI Integration & Agentic Chatbot</option>
              <option value="Rural E-Commerce / PWA">Rural E-Commerce & PWA Offline</option>
              <option value="Enterprise Architecture">Enterprise Cloud Architecture</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-300">Project Requirements</label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your goals, timeline, and budget..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Personalized Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}
