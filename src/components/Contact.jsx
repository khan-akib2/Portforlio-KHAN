'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl opacity-50 animate-pulse-smooth"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50 animate-pulse-smooth" style={{animationDelay: '0.5s'}}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 sm:mb-8 italic">
          Let&apos;s <span className="text-outline">Connect.</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mb-4">
          Currently open for freelance projects and internships in MERN stack or AIML research.
        </p>
        <p className="text-xs sm:text-sm text-slate-500 mb-12 sm:mb-16">
          Feel free to reach out through any of these channels or drop me an email!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <a
            href="mailto:ramzankhan4212@gmail.com"
            className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:scale-105"
          >
            <span className="relative z-10">✉️ Send Email</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="space-y-8 sm:space-y-12 pt-12 sm:pt-16 border-t border-white/10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">Connect on Social Media</p>
          
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            <a 
              href="https://github.com/khan-akib2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 hover:border-indigo-500 flex items-center justify-center text-2xl sm:text-3xl text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
              title="GitHub"
            >
              <FaGithub className="group-hover:scale-125 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ramzan-khan-81a797379/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 hover:border-blue-400 flex items-center justify-center text-2xl sm:text-3xl text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              title="LinkedIn"
            >
              <FaLinkedin className="group-hover:scale-125 transition-transform" />
            </a>
            <a 
              href="https://www.instagram.com/khan_akib2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-900/20 to-pink-800/20 border border-pink-500/30 hover:border-pink-400 flex items-center justify-center text-2xl sm:text-3xl text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
              title="Instagram"
            >
              <FaInstagram className="group-hover:scale-125 transition-transform" />
            </a>
            <a 
              href="https://wa.me/919920136318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 hover:border-green-400 flex items-center justify-center text-2xl sm:text-3xl text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30"
              title="WhatsApp"
            >
              <FaWhatsapp className="group-hover:scale-125 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
