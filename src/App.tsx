import React from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { MeetSegun } from '@/src/components/MeetSegun';
import { WhatIDo } from '@/src/components/WhatIDo';
import { TechStack } from '@/src/components/TechStack';
import { SelectedWork } from '@/src/components/SelectedWork';
import { HowIBuild } from '@/src/components/HowIBuild';
import { Certifications } from '@/src/components/Certifications';
import { CallToAction } from '@/src/components/CallToAction';
import { Footer } from '@/src/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Meet Segun (Introductory Video) */}
        <MeetSegun />

        {/* 3. What I Do (4 compact cards) */}
        <WhatIDo />

        {/* 4. Selected Work (5-6 Strongest Projects) */}
        <SelectedWork />

        {/* 5. Cloud & Technology */}
        <TechStack />

        {/* 6. How I Build (Visual Workflow) */}
        <HowIBuild />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Call To Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
