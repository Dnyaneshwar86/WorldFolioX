'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/store';
import { Bot, Send, X, MessageSquare, Sparkles, User } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export default function AiChatbot() {
  const { persona, lang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: `Hello! I am WorldFolio X AI Assistant. How can I assist your project needs in ${persona.locationName}?`,
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    // Simulate AI multilingual response
    setTimeout(() => {
      let reply = `Thank you for reaching out! Dnyaneshwar is specialized in building fullstack Next.js apps, AI agents, and localized systems. Let's schedule a call or message on WhatsApp (${persona.whatsappNumber}).`;

      if (lang === 'hi' || userMsg.toLowerCase().includes('hindi')) {
        reply = `नमस्ते! मैं ज्ञानेश्वर का AI असिस्टेंट हूँ। आप अपने प्रोजेक्ट के लिए डायरेक्ट WhatsApp पर संपर्क कर सकते हैं या यहाँ मैसेज छोड़ सकते हैं।`;
      } else if (lang === 'mr' || userMsg.toLowerCase().includes('marathi')) {
        reply = `नमस्कार! ज्ञानेश्वर यांच्याशी संपर्क साधल्याबद्दल धन्यवाद. आपण प्रोजेक्टबाबत थेट कॉल किंवा व्हॉट्सॲपद्वारे चर्चा करू शकता.`;
      } else if (lang === 'de') {
        reply = `Vielen Dank für Ihre Nachricht! Dnyaneshwar steht für erstklassige Softwarearchitektur und KI-Integration zur Verfügung.`;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center space-x-2"
        >
          <Bot className="w-6 h-6 animate-pulse" />
          <span className="text-xs font-bold font-mono hidden sm:inline">Ask AI</span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="w-80 sm:w-96 rounded-3xl glass-panel border border-emerald-500/40 shadow-2xl overflow-hidden flex flex-col h-96 bg-slate-900/95 animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">WorldFolio AI Chatbot</h4>
                <p className="text-[10px] text-emerald-400 font-mono">50+ Languages Supported</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-white/10 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask in any language..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
