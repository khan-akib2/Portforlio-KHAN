'use client';

import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Academics from '@/components/Academics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const hasScrolled = useRef(false);

  useEffect(() => {
    // Scroll to top only once on initial mount
    if (!hasScrolled.current) {
      window.scrollTo(0, 0);
      hasScrolled.current = true;
    }
    
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for copying (but allow inspect/dev tools)
    const handleKeyDown = (e) => {
      // Only block: Ctrl+C, Ctrl+X, Ctrl+A, Ctrl+U
      if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a' || e.key === 'u')) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection via mouse
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable copy event
    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#020617] text-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Academics />
      <Contact />
      <Footer />
    </div>
  );
}
