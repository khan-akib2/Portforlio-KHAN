import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-white/5 px-4 sm:px-6">
      <div className="text-center text-slate-500 text-[8px] sm:text-[9px] font-bold tracking-[0.5em] uppercase mb-6 sm:mb-8">
        © 2026 Ramzan Khan • Developed with Precision
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-slate-400 text-2xl">
        <a
          href="https://github.com/khan-akib2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ramzan-khan-81a797379/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/khan_akib2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/919920136318"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
