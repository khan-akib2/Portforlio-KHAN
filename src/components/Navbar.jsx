'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-6xl z-50">
        <div className="nav-glass rounded-2xl sm:rounded-3xl px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white italic text-xs sm:text-base">
              RK
            </div>
            <span className="font-extrabold text-base sm:text-xl tracking-tighter uppercase">
              Ramzan<span className="text-indigo-500">.</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">
              Overview
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#expertise" className="hover:text-white transition-colors">
              Expertise
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#academics" className="hover:text-white transition-colors">
              Academics
            </a>
            <a href="#certificates" className="hover:text-white transition-colors">
              AI Certificates
            </a>
          </div>
          
          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden md:block bg-white text-black px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="nav-glass rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col space-y-4">
            <a 
              href="#overview" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2 border-b border-white/10"
            >
              Overview
            </a>
               <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2 border-b border-white/10"
            >
              About
            </a>
            <a 
              href="#expertise" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2 border-b border-white/10"
            >
              Expertise
            </a>
            <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2 border-b border-white/10"
            >
              Work
            </a>
            <a 
              href="#academics" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2 border-b border-white/10"
            >
              Academics
            </a>
            <a 
              href="#certificates" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2 border-b border-white/10"
            >
              AI Certificates
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all text-center mt-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
