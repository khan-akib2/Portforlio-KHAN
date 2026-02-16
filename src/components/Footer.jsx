import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#expertise' },
    { label: 'Work', href: '#work' },
    { label: 'Academics', href: '#academics' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-indigo-500/20 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950/50 px-4 sm:px-6 py-10 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-indigo-600/10 rounded-full blur-3xl opacity-30 animate-pulse-smooth"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-purple-600/10 rounded-full blur-3xl opacity-30 animate-pulse-smooth" style={{animationDelay: '0.7s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content - Mobile: Centered Stack, Desktop: 3 Columns */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-12 md:mb-16 text-center md:text-left">
          {/* Brand Section */}
          <div className="md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-2 italic">
              <span className="bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent">Ramzan Khan</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 tracking-widest uppercase font-bold mb-3 md:mb-4">
              Full Stack Developer • AI/ML Enthusiast
            </p>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Building intelligent experiences with modern web technologies and cutting-edge AI solutions.
            </p>
          </div>

          {/* Navigation Links - Mobile: Horizontal Wrap, Desktop: Vertical List */}
          <div className="md:text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4 md:mb-6">Navigation</p>
            {/* Mobile: Horizontal */}
            <nav className="flex md:hidden flex-wrap justify-center gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {/* Desktop: Vertical */}
            <nav className="hidden md:block space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-indigo-500 group-hover:w-8 transition-all"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4 md:mb-6">Connect</p>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://github.com/khan-akib2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-white/10 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramzan-khan-81a797379/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/khan_akib2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-white/10 hover:border-pink-500/50 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://wa.me/919920136318"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-white/10 hover:border-green-500/50 flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-6 sm:mb-8 md:mb-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[9px] sm:text-[9px] text-slate-500 font-bold uppercase tracking-wider sm:tracking-[0.3em]">
            © 2026 Ramzan Khan • All Rights Reserved
          </p>
          <p className="text-[8px] sm:text-[9px] text-slate-600 uppercase tracking-wide sm:tracking-widest">
            Portfolio v1.0 • Crafted with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
