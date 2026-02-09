export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-white/5 px-4 sm:px-6">
      <div className="text-center text-slate-500 text-[8px] sm:text-[9px] font-bold tracking-[0.5em] uppercase mb-6 sm:mb-8">
        © 2026 Ramzan Khan • Developed with Precision
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-slate-400 text-xs sm:text-sm font-bold">
        <a
          href="https://github.com/khan-akib2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ramzan-khan-81a797379/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/khan_akib2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/919920136318"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
