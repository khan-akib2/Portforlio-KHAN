export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-6 overflow-hidden">
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
                className="text-xs sm:text-sm font-bold border-b-2 border-indigo-500/30 hover:border-indigo-500 transition-all pb-1"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/ramzan-khan-81a797379/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold border-b-2 border-indigo-500/30 hover:border-indigo-500 transition-all pb-1"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex lg:col-span-5 relative h-[300px] md:h-[400px] lg:h-[500px] items-center justify-center">
          <div className="relative w-full h-full">
            <div className="hive-node absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-[2.5rem] bg-indigo-600 flex items-center justify-center shadow-2xl z-20">
              <span className="text-white font-black text-2xl">CORE</span>
            </div>

            <div
              className="hive-node absolute top-10 right-10 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
              style={{ animationDelay: '-1s' }}
            >
              <span className="text-xs font-bold tracking-widest opacity-70">REACT</span>
            </div>

            <div
              className="hive-node absolute bottom-20 left-0 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
              style={{ animationDelay: '-2s' }}
            >
              <span className="text-xs font-bold tracking-widest opacity-70">NODE.JS</span>
            </div>

            <div
              className="hive-node absolute top-40 left-10 p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
              style={{ animationDelay: '-3s' }}
            >
              <span className="text-xs font-bold tracking-widest opacity-70">FIGMA</span>
            </div>

            <div
              className="hive-node absolute bottom-10 right-20 p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
              style={{ animationDelay: '-4s' }}
            >
              <span className="text-xs font-bold tracking-widest opacity-70">PYTHON</span>
            </div>

            <div
              className="hive-node absolute top-0 left-1/2 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20"
              style={{ animationDelay: '-5s' }}
            >
              <span className="text-[10px] font-black text-indigo-500">AIML</span>
            </div>

            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" />
              <line x1="50%" y1="50%" x2="10%" y2="40%" stroke="currentColor" />
              <line x1="50%" y1="50%" x2="70%" y2="90%" stroke="currentColor" />
              <line x1="50%" y1="50%" x2="50%" y2="5%" stroke="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
