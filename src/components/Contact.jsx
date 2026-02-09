export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 sm:mb-6 italic">
        Let&apos;s <span className="text-outline">Connect.</span>
      </h2>
      <p className="text-xs sm:text-sm text-slate-500 mb-8 sm:mb-12">
        Currently open for freelance projects and internships in MERN stack or AIML research.
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        <a
          href="mailto:ramzankhan4212@gmail.com"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm"
        >
          Send Message
        </a>
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-2xl flex-wrap justify-center">
          <a 
            href="https://github.com/khan-akib2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            GH
          </a>
          <a 
            href="https://www.linkedin.com/in/ramzan-khan-81a797379/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            LI
          </a>
          <a 
            href="https://www.instagram.com/khan_akib2/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            IG
          </a>
          <a 
            href="https://wa.me/919920136318" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
          >
            WA
          </a>
        </div>
      </div>
    </section>
  );
}
