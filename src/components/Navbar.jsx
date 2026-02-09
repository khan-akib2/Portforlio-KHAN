'use client';

export default function Navbar() {
  return (
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
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">
            Overview
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
        </div>
        <a
          href="#contact"
          className="bg-white text-black px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
