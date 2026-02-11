'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-25 sm:pt-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 sm:gap-12 w-full items-center z-10">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="text-[8px] sm:text-[10px] font-extrabold tracking-[0.3em] uppercase text-indigo-500">
              Portfolio 2026
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-indigo-500/30"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[110px] font-extrabold tracking-tighter leading-[0.85] mb-6 sm:mb-8">
            <span className="block">RAMZAN</span>
            <span className="block text-outline">KHAN</span>
            <span className="block text-indigo-500"></span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg leading-relaxed mb-8 sm:mb-10 border-l-2 border-indigo-500/20 pl-4 sm:pl-6">
            <span className="text-slate-900 dark:text-white font-semibold">
              Designing clean interfaces.
            </span>
            Developing intelligent experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <a 
              href="#work" 
              className="group relative px-6 sm:px-10 py-3 sm:py-5 overflow-hidden rounded-xl sm:rounded-2xl bg-indigo-600 text-white font-bold text-xs sm:text-sm transition-all inline-block"
            >
              <span className="relative z-10">EXPLORE WORK</span>
              <div className="absolute inset-0 bg-indigo-400 translate-y-[101%] group-hover:translate-y-0 transition-transform"></div>
            </a>

            <div className="hidden sm:flex gap-6 items-center">
              <a
                href="https://github.com/khan-akib2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-indigo-500 transition-colors"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ramzan-khan-81a797379/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-indigo-500 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/khan_akib2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-indigo-500 transition-colors"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0">
          <div className="relative">
            {/* Minimal outer glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-indigo-600/10 rounded-[3rem]" style={{filter: 'blur(25px)'}}></div>
            
            {/* Main image container */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-indigo-500/40 shadow-xl shadow-indigo-500/20 animate-image-float">
              {/* Image placeholder */}
              <img 
                src="HANDSOMEEEE.jpg" 
                alt="Ramzan Khan" 
                className="w-full h-full object-cover grayscale animate-shimmer"
              />
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-indigo-950/20"></div>
              
              {/* Top-left corner accent - animated */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-indigo-400/80 animate-corner-expand"></div>
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-indigo-500/30"></div>
              
              {/* Bottom-right corner accent - animated */}
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-indigo-400/80 animate-corner-expand" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-indigo-500/30"></div>
              
              {/* Animated accent lines */}
              <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent animate-accent-line" style={{animationDelay: '0s'}}></div>
              <div className="absolute bottom-1/3 right-0 h-px w-1/2 bg-gradient-to-l from-transparent via-purple-500/30 to-transparent animate-accent-line" style={{animationDelay: '0.8s'}}></div>
              
              {/* Designation text - styled like project cards */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">
                  Developer
                </span>
                <h3 className="text-lg sm:text-2xl font-bold mt-1 uppercase italic">Full Stack</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

