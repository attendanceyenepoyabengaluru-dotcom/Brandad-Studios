/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Signature from './components/Signature';
import Process from './components/Process';
import Industries from './components/Industries';
import Philosophy from './components/Philosophy';
import WhyBrandAd from './components/WhyBrandAd';
import AboutStudio from './components/AboutStudio';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-orange selection:text-white relative overflow-x-hidden">
      {/* Global Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Global Grain/Dust */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Signature />
        <Process />
        <Industries />
        <Philosophy />
        <WhyBrandAd />
        <AboutStudio />
        <CTA />
        <Contact />
        <Footer />
      </div>
      </div>
    </ReactLenis>
  );
}
