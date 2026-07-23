'use client';

import React from 'react';
import Header from '@/components/Header';
import OfflineLiteBanner from '@/components/OfflineLiteBanner';
import HeroSection from '@/components/HeroSection';
import LocalTrustMap from '@/components/LocalTrustMap';
import ScrollStoryTimeline from '@/components/ScrollStoryTimeline';
import CompetitorVanquisher from '@/components/CompetitorVanquisher';
import ArBusinessCard from '@/components/ArBusinessCard';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import ResumeDownloader from '@/components/ResumeDownloader';
import VideoGreetingModal from '@/components/VideoGreetingModal';
import PaymentModal from '@/components/PaymentModal';
import VoiceController from '@/components/VoiceController';
import AiChatbot from '@/components/AiChatbot';
import QuantumSpecialEffects from '@/components/QuantumSpecialEffects';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="min-h-screen relative text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Toaster position="top-right" />
      <QuantumSpecialEffects />
      <OfflineLiteBanner />
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <ResumeDownloader />
      <div id="trust-map">
        <LocalTrustMap />
      </div>
      <ProjectsShowcase />
      <TestimonialsSection />
      <ScrollStoryTimeline />
      <CompetitorVanquisher />
      <ArBusinessCard />
      <PricingSection />
      <ContactSection />
      <Footer />

      {/* Interactive Modals & Floating Tools */}
      <VideoGreetingModal />
      <PaymentModal />
      <VoiceController />
      <AiChatbot />
    </main>
  );
}
