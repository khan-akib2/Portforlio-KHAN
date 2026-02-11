export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
        {/* Left side - Content */}
        <div>
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-extrabold tracking-[0.3em] uppercase text-indigo-500">
              About Me
            </span>
            <div className="w-8 sm:w-10 md:w-12 h-[1px] bg-indigo-500/30"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] mb-6 sm:mb-8">
            <span className="block">EXPLORING</span>
            <span className="block text-outline">AI & ML</span>
            <span className="block text-indigo-500">FRONTIERS</span>
          </h2>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-slate-400 leading-relaxed">
            <p className="text-base sm:text-lg border-l-2 border-indigo-500/20 pl-4 sm:pl-6">
              <span className="text-white font-semibold">Hey, I'm Ramzan Khan</span> — currently studying at Nexcore Institute of Technology, diving deep into the world of Artificial Intelligence and Machine Learning.
            </p>

            <p className="text-sm sm:text-base">
              My core domain is <span className="text-indigo-400 font-semibold">AI/ML</span>, where I'm actively learning and building with cutting-edge technologies. Currently exploring RAG (Retrieval-Augmented Generation) models, neural networks, and modern AI frameworks to create intelligent solutions.
            </p>

            <p className="text-sm sm:text-base">
              With 6 months of hands-on experience in AI/ML and over 10+ projects under my belt, I'm constantly experimenting with new models and techniques. I also build full-stack applications using React, Node.js, and Python to bring AI-powered ideas to life.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a 
              href="#contact" 
              className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-lg sm:rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm transition-all inline-block hover:shadow-xl hover:shadow-indigo-500/30"
            >
              <span className="relative z-10">LET'S TALK</span>
              <div className="absolute inset-0 bg-indigo-400 translate-y-[101%] group-hover:translate-y-0 transition-transform"></div>
            </a>
          </div>
        </div>

        {/* Right side - Stats & Info */}
        <div className="relative mt-8 lg:mt-0">
          {/* Animated background elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-smooth"></div>
          <div className="absolute -z-10 top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-purple-600/10 rounded-full blur-2xl animate-float-smooth"></div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* Stat Card 1 */}
            <div className="relative p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-indigo-500/40 overflow-hidden animate-image-float">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-100"></div>
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-indigo-500/10 rounded-full blur-xl animate-glow-pulse"></div>
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-indigo-400 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2">10+</h3>
                <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">Projects Built</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="relative p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-purple-500/40 mt-6 sm:mt-8 overflow-hidden animate-image-float" style={{animationDelay: '0.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-100"></div>
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-purple-500/10 rounded-full blur-xl animate-glow-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">6+</h3>
                <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">Months in AI/ML</p>
              </div>
            </div>

            {/* Stat Card 3 - Learning Focus */}
            <div className="relative p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-pink-500/40 overflow-hidden animate-image-float" style={{animationDelay: '1s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-indigo-600/10 opacity-100"></div>
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-pink-500/10 rounded-full blur-xl animate-glow-pulse" style={{animationDelay: '0.6s'}}></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-pink-400 to-pink-600 bg-clip-text text-transparent">RAG</h3>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">Currently Learning</p>
              </div>
            </div>

            {/* Stat Card 4 - Education */}
            <div className="relative p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-indigo-500/40 mt-6 sm:mt-8 overflow-hidden animate-image-float" style={{animationDelay: '1.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 opacity-100"></div>
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/10 rounded-full blur-xl animate-glow-pulse" style={{animationDelay: '0.9s'}}></div>
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-br from-blue-400 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2 leading-tight">NIT</h3>
                <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
