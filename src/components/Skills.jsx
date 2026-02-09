const FrontendIcon = () => (
  <div className="relative w-20 h-20 transition-all duration-1000 ease-out group-hover:scale-110" style={{ perspective: '1000px' }}>
    <div 
      className="relative w-full h-full transition-all duration-1000 ease-out" 
      style={{ 
        transformStyle: 'preserve-3d',
        transform: 'rotateX(-15deg) rotateY(25deg) rotateZ(-5deg)',
        animation: 'float-smooth 6s ease-in-out infinite',
      }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-full transition-all duration-700" style={{ transform: 'translateZ(-5px) rotateX(90deg)', transformOrigin: 'center' }}></div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-700 transition-all duration-700" style={{ transform: 'translateZ(-2px)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-900 rounded-lg transition-all duration-700" style={{ transform: 'translateZ(-16px)' }}></div>
      <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-indigo-800 to-indigo-700 rounded-l-lg transition-all duration-700" style={{ transform: 'rotateY(-90deg)', transformOrigin: 'left', width: '16px' }}></div>
      <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-purple-800 to-purple-700 rounded-r-lg transition-all duration-700" style={{ transform: 'rotateY(90deg)', transformOrigin: 'right', width: '16px' }}></div>
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-t-lg transition-all duration-700" style={{ transform: 'rotateX(90deg)', transformOrigin: 'top', height: '16px' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-indigo-800 to-indigo-700 rounded-b-lg transition-all duration-700" style={{ transform: 'rotateX(-90deg)', transformOrigin: 'bottom', height: '16px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-600 rounded-lg border-2 border-indigo-400/60 p-2 shadow-2xl overflow-hidden transition-all duration-700" style={{ transform: 'translateZ(0px)' }}>
        <div className="w-full h-full bg-slate-900/40 rounded backdrop-blur-sm p-1.5 relative overflow-hidden">
          <div className="flex gap-1 mb-1.5">
            <div className="w-1 h-1 rounded-full bg-red-400 transition-all duration-500"></div>
            <div className="w-1 h-1 rounded-full bg-yellow-400 transition-all duration-500"></div>
            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse-smooth"></div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <div className="text-[6px] text-purple-300 font-mono">&lt;</div>
              <div className="h-0.5 w-6 bg-gradient-to-r from-indigo-400 to-transparent rounded animate-pulse-smooth"></div>
            </div>
            <div className="flex items-center gap-1 pl-1">
              <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-transparent rounded animate-pulse-smooth" style={{ animationDelay: '0.3s' }}></div>
            </div>
            <div className="flex items-center gap-1 pl-1">
              <div className="h-0.5 w-5 bg-gradient-to-r from-indigo-400 to-transparent rounded animate-pulse-smooth" style={{ animationDelay: '0.6s' }}></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[6px] text-purple-300 font-mono">/&gt;</div>
            </div>
          </div>
          <div className="absolute bottom-2 left-2 w-0.5 h-2 bg-indigo-300 animate-blink"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-lg transition-all duration-700"></div>
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/40 rounded-full blur-sm transition-all duration-700" style={{ transform: 'translateZ(2px)' }}></div>
    </div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-indigo-900/40 rounded-full blur-md transition-all duration-1000 group-hover:w-18 group-hover:opacity-60"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-1000 ease-out"></div>
  </div>
);

const BackendIcon = () => (
  <div className="relative w-20 h-20 transition-all duration-1000 ease-out group-hover:scale-110" style={{ perspective: '1000px' }}>
    <div className="relative w-full h-full transition-all duration-1000 ease-out" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(-25deg)' }}>
      {[0, 1, 2].map((index) => (
        <div key={index} className="absolute left-1/2 -translate-x-1/2 w-16 h-6 transition-all duration-700" style={{ transformStyle: 'preserve-3d', top: `${index * 20}px`, animation: `float-smooth ${6 + index}s ease-in-out infinite`, animationDelay: `${index * 0.3}s` }}>
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-purple-700 to-purple-900 rounded-full transition-all duration-700" style={{ transform: 'translateZ(-12px)' }}></div>
          <div className="absolute top-1.5 left-0 w-full h-3 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 transition-all duration-700" style={{ transform: 'translateZ(-6px)' }}></div>
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 rounded-full border border-purple-400/50 shadow-lg transition-all duration-700" style={{ transform: 'translateZ(0px)' }}>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 flex gap-1">
              <div className="w-1 h-1 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,1)] transition-all duration-500" style={{ animation: 'pulse-smooth 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: `${index * 0.4}s` }}></div>
              <div className="w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_4px_rgba(96,165,250,0.8)] transition-all duration-500"></div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col gap-0.5">
              <div className="h-0.5 w-4 bg-purple-300/60 rounded transition-all duration-500"></div>
              <div className="h-0.5 w-3 bg-purple-300/40 rounded transition-all duration-500"></div>
            </div>
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-white/20 rounded-full blur-sm transition-all duration-700"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-t from-purple-800 to-purple-700 rounded-full transition-all duration-700" style={{ transform: 'translateZ(-6px)' }}></div>
        </div>
      ))}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-12 bg-gradient-to-b from-purple-400/0 via-purple-400/60 to-purple-400/0 transition-all duration-700" style={{ transform: 'translateZ(-6px)' }}></div>
    </div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-purple-900/40 rounded-full blur-md transition-all duration-1000 group-hover:w-18 group-hover:opacity-60"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-1000 ease-out"></div>
  </div>
);

const DesignIcon = () => (
  <div className="relative w-20 h-20 transition-all duration-1000 ease-out group-hover:scale-110" style={{ perspective: '1000px' }}>
    <div className="relative w-full h-full transition-all duration-1000 ease-out" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-15deg) rotateY(-30deg) rotateZ(0deg)', animation: 'float-smooth 7s ease-in-out infinite' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-700 to-rose-900 transition-all duration-700" style={{ transform: 'translateZ(-20px)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-pink-800 transition-all duration-700" style={{ transform: 'rotateY(-45deg) translateZ(-10px)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transformOrigin: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-rose-800 transition-all duration-700" style={{ transform: 'rotateY(45deg) translateZ(-10px)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transformOrigin: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-pink-600 to-rose-600 border-2 border-pink-400/60 shadow-2xl transition-all duration-700" style={{ transform: 'translateZ(0px)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent transition-all duration-700" style={{ clipPath: 'polygon(50% 20%, 80% 50%, 50% 80%, 20% 50%)' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-all duration-700">
              <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.2)" className="animate-ping-smooth"/>
              <circle cx="12" cy="12" r="1.5" fill="white"/>
              <path d="M12 6 L12 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 15 L12 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M18 12 L15 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M9 12 L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full animate-pulse-smooth"></div>
          <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse-smooth" style={{ animationDelay: '0.7s' }}></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-pink-400 transition-all duration-700" style={{ transform: 'translateZ(2px) translateY(-6px)', filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.6))' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent transition-all duration-700" style={{ transform: 'translateZ(1px) rotate(45deg)', animation: 'spin-smooth 12s linear infinite' }}></div>
      </div>
    </div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-pink-900/40 rounded-full blur-md transition-all duration-1000 group-hover:w-18 group-hover:opacity-60"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-1000 ease-out"></div>
  </div>
);

export default function Skills() {
  const skills = [
    { id: '01', icon: <FrontendIcon />, title: 'FRONTEND', description: 'Crafting immersive, pixel-perfect interfaces with high-performance rendering.', skill: 'React & Next.js', percentage: 95, color: 'indigo', bgGlow: 'bg-indigo-600/10 group-hover:bg-indigo-600/20', textColor: 'text-indigo-500', barColor: 'bg-indigo-500', barShadow: 'shadow-[0_0_10px_#6366f1]', tags: ['Tailwind CSS', 'TypeScript', 'GSAP / Framer'], featured: false, tagStyle: 'bg-white/5 border-white/10 text-slate-300' },
    { id: '02', icon: <BackendIcon />, title: 'BACKEND', description: 'Building scalable server-side logic and integrated machine learning models.', skill: 'Node & Javascript', percentage: 88, color: 'purple', bgGlow: 'bg-purple-600/10 group-hover:bg-purple-600/20', textColor: 'text-purple-500', barColor: 'bg-purple-500', barShadow: 'shadow-[0_0_10px_#a855f7]', tags: ['MongoDB', 'Express', 'REST APIs'], featured: true, tagStyle: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' },
    { id: '03', icon: <DesignIcon />, title: 'DESIGN', description: 'Designing user journeys that are intuitive, accessible, and visually striking.', skill: 'Figma & UI Systems', percentage: 92, color: 'pink', bgGlow: 'bg-pink-600/10 group-hover:bg-pink-600/20', textColor: 'text-pink-500', barColor: 'bg-pink-500', barShadow: 'shadow-[0_0_10px_#ec4899]', tags: ['Prototyping', 'Wireframing', 'Visual Identity'], featured: false, tagStyle: 'bg-white/5 border-white/10 text-slate-300' },
  ];

  return (
    <section id="expertise" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-10 right-0 text-[80px] sm:text-[120px] lg:text-[150px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase italic">Skills</div>
      <div className="flex flex-col mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">Skills & <span className="text-outline">Toolkit</span></h2>
        <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-indigo-600 mt-3 sm:mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] ${skill.featured ? 'bg-white/[0.03] border-indigo-500/20 hover:border-indigo-500/50 shadow-2xl shadow-indigo-500/5' : 'bg-white/[0.02] border-white/5 hover:border-indigo-500/30'} border transition-all duration-700 ease-out overflow-hidden`}>
            <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl transition-all duration-700 ${skill.bgGlow}`}></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20">
                  {skill.icon}
                </div>
                <span className={`text-[8px] sm:text-[10px] font-black ${skill.textColor} tracking-[0.4em] uppercase transition-all duration-500`}>{skill.id}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight mb-2 transition-all duration-500">{skill.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 transition-all duration-500">{skill.description}</p>
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-all duration-500">
                    <span>{skill.skill}</span>
                    <span className="text-white">{skill.percentage}%</span>
                  </div>
                  <div className="h-[2px] sm:h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${skill.barColor} ${skill.barShadow} transition-all duration-1000 ease-out`} style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                  {skill.tags.map((tag, index) => (
                    <span key={index} className={`px-2 sm:px-3 py-1 border rounded text-[7px] sm:text-[9px] font-bold uppercase transition-all duration-500 hover:scale-105 ${skill.tagStyle}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
