'use client';

export default function Academics() {
  const educationData = [
    {
      period: '2023 - Present',
      institution: 'Nexcore Institute of Technology',
      description: 'Specializing in Artificial Intelligence & Machine Learning (AIML). Focusing on Deep Learning, Data Science, and Computer Vision.',
      logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop',
      level: 'B.Tech',
      color: 'from-blue-600 to-blue-800',
      accentColor: 'blue',
    },
    {
      period: '2021 - 2023',
      institution: 'St. Mary College',
      description: 'Higher Secondary Education. Completed HSC (12th) with focus on Science stream.',
      logo: 'https://images.unsplash.com/photo-1498243691581-b145fc3f3495?w=200&h=200&fit=crop',
      level: 'HSC (12th)',
      color: 'from-purple-600 to-purple-800',
      accentColor: 'purple',
    },
    {
      period: '2019 - 2021',
      institution: 'Symbiosis Convent High School',
      description: 'Secondary School Education. Completed SSC (10th) with distinction.',
      logo: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=200&h=200&fit=crop',
      level: 'SSC (10th)',
      color: 'from-pink-600 to-pink-800',
      accentColor: 'pink',
    },
  ];

  const certifications = [
    {
      title: 'AI Aware',
      year: '2026',
      type: 'AI Certification',
      image: 'AWARECERTIFICATE.png',
      issuer: 'AI Institute',
      badge: '🎓',
      description: 'Fundamental knowledge of Artificial Intelligence concepts and applications'
    },
    {
      title: 'AI Appreciate',
      year: '2026',
      type: 'AI Certification',
      image: 'AIAPPRECIATE.png',
      issuer: 'AI Institute',
      badge: '⭐',
      description: 'Intermediate AI/ML skills and practical application experience'
    },
    {
      title: 'AI For All',
      year: '2026',
      type: 'AI Certification',
      image: 'AIFORALL.jpg',
      issuer: 'AI Institute',
      badge: '🚀',
      description: 'Comprehensive AI knowledge spanning multiple domains and use cases'
    },
  ];

  return (
    <>
      {/* Education Journey Section */}
      <section id="academics" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-12 sm:mb-16 md:mb-20 uppercase italic">
            Education <span className="text-outline">Timeline</span>
          </h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line - Enhanced */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/50"></div>

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-24 md:space-y-32">
              {educationData.map((edu, index) => {
                const colorConfig = [
                  { dotColor: '#3b82f6', glow: 'rgb(59, 130, 246)', borderColor: '#3b82f6', accentLight: '#60a5fa', bgGradient: 'from-blue-950/40' },
                  { dotColor: '#a855f7', glow: 'rgb(168, 85, 247)', borderColor: '#a855f7', accentLight: '#d8b4fe', bgGradient: 'from-purple-950/40' },
                  { dotColor: '#ec4899', glow: 'rgb(236, 72, 153)', borderColor: '#ec4899', accentLight: '#f472b6', bgGradient: 'from-pink-950/40' },
                ];
                const config = colorConfig[index];
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative group">
                    {/* Desktop alternating layout */}
                    <div className={`hidden sm:flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-6 md:gap-12`}>
                      {/* Timeline Dot - Extra Eyecatching */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                        <div className="relative w-10 h-10 md:w-16 md:h-16">
                          {/* Outer expanding ring animation */}
                          <div 
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"
                            style={{ 
                              backgroundColor: config.glow, 
                              filter: 'blur(12px)',
                              boxShadow: `0 0 40px ${config.glow}`
                            }}
                          ></div>
                          
                          {/* Middle pulsing ring */}
                          <div 
                            className="absolute inset-0 rounded-full opacity-40 animate-pulse"
                            style={{ 
                              backgroundColor: config.glow, 
                              filter: 'blur(8px)',
                              animationDelay: '0.2s'
                            }}
                          ></div>
                          
                          {/* Main dot - Larger */}
                          <div 
                            className="absolute inset-0 rounded-full border-4 border-slate-900 flex items-center justify-center text-2xl md:text-4xl shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_40px] group-hover:scale-120 group-hover:-translate-y-1"
                            style={{ 
                              background: `linear-gradient(135deg, ${config.dotColor} 0%, ${config.dotColor}dd 50%, ${colorConfig[index].accentLight || config.dotColor} 100%)`,
                              boxShadow: `0 0 30px ${config.glow}, inset 0 0 20px ${colorConfig[index].accentLight || config.dotColor}80`
                            }}
                          >
                            {index === 0 ? '🎯' : index === 1 ? '📚' : '💡'}
                          </div>
                          
                          {/* Border highlight */}
                          <div 
                            className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ borderColor: colorConfig[index].accentLight || config.dotColor }}
                          ></div>
                        </div>
                      </div>

                      {/* Content Card - More Eyecatching */}
                      <div className="w-1/2">
                        <div 
                          className="relative p-6 md:p-8 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                          style={{ 
                            borderColor: `${config.borderColor}66`,
                            background: `linear-gradient(135deg, rgba(3, 7, 30, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%)`
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = config.borderColor;
                            e.currentTarget.style.boxShadow = `0 0 50px ${config.glow}40, inset 0 0 30px ${config.glow}20`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = `${config.borderColor}66`;
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {/* Animated background glow - Larger */}
                          <div 
                            className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-500"
                            style={{ 
                              backgroundColor: config.glow,
                              animation: 'pulse 3s ease-in-out infinite'
                            }}
                          ></div>
                          
                          {/* Animated border gradient */}
                          <div 
                            className="absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, ${colorConfig[index].accentLight || config.borderColor} 50%, transparent 100%)` }}
                          ></div>

                          <div className="relative z-10 space-y-4 md:space-y-5">
                            {/* College Logo */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {/* Logo container */}
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 bg-white/10 backdrop-blur-sm flex items-center justify-center" style={{ borderColor: config.borderColor }}>
                                  <img 
                                    src={edu.logo} 
                                    alt={`${edu.institution} logo`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                
                                {/* Status badge - Animated */}
                                <span 
                                  className="inline-flex text-xs md:text-sm font-black uppercase tracking-widest text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-lg animate-pulse"
                                  style={{ background: `linear-gradient(135deg, ${config.dotColor} 0%, ${config.glow} 100%)` }}
                                >
                                  {edu.level}
                                </span>
                              </div>
                              <div 
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: config.dotColor }}
                              ></div>
                            </div>

                            {/* Institution name - Bold and prominent */}
                            <h3 
                              className="text-lg md:text-2xl font-black uppercase tracking-tight transition-all duration-300 group-hover:translate-x-2" 
                              style={{ color: config.borderColor }}
                            >
                              {edu.institution}
                            </h3>

                            {/* Period - With icon animation */}
                            <p 
                              className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80 transition-all duration-300 group-hover:opacity-100 flex items-center gap-2" 
                              style={{ color: config.borderColor }}
                            >
                              <span className="text-lg">📅</span>
                              {edu.period}
                            </p>

                            {/* Animated divider */}
                            <div 
                              className="h-px w-20 transition-all duration-300 group-hover:w-32"
                              style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, transparent 100%)` }}
                            ></div>

                            {/* Description */}
                            <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                              {edu.description}
                            </p>

                            {/* Interactive hover indicator - Animated arrow */}
                            <div 
                              className="flex items-center gap-2 font-bold uppercase text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden"
                              style={{ color: config.borderColor }}
                            >
                              <span className="inline-block">Discover More</span>
                              <span className="inline-block group-hover:translate-x-2 transition-transform duration-500">→</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile layout - Enhanced */}
                    <div className="sm:hidden relative pl-16">
                      {/* Mobile dot - Animated */}
                      <div className="absolute left-1.5 top-2 z-10">
                        <div 
                          className="w-9 h-9 rounded-full border-4 border-slate-900 flex items-center justify-center text-lg shrink-0 shadow-lg animate-pulse transition-all duration-300 active:scale-125"
                          style={{ 
                            background: `linear-gradient(135deg, ${config.dotColor} 0%, ${colorConfig[index].accentLight} 100%)`,
                            boxShadow: `0 0 20px ${config.glow}, inset 0 0 15px ${colorConfig[index].accentLight}60`
                          }}
                        >
                          {index === 0 ? '🎯' : index === 1 ? '📚' : '💡'}
                        </div>
                      </div>

                      {/* Mobile card - Enhanced */}
                      <div 
                        className="relative p-5 rounded-lg border-2 overflow-hidden transition-all duration-300 active:scale-105 shadow-lg"
                        style={{ 
                          borderColor: `${config.borderColor}66`,
                          background: `linear-gradient(135deg, rgba(3, 7, 30, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%)`
                        }}
                      >
                        {/* Top accent */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r"
                          style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, ${colorConfig[index].accentLight} 50%, transparent 100%)` }}
                        ></div>

                        <div className="relative z-10 space-y-3 pt-3">
                          <div className="flex items-center gap-3">
                            {/* Mobile Logo */}
                            <div className="w-10 h-10 rounded-lg overflow-hidden border-2 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0" style={{ borderColor: config.borderColor }}>
                              <img 
                                src={edu.logo} 
                                alt={`${edu.institution} logo`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <span 
                              className="inline-flex text-xs font-black uppercase tracking-widest text-white px-3 py-1.5 rounded-full"
                              style={{ background: `linear-gradient(135deg, ${config.dotColor} 0%, ${config.glow} 100%)` }}
                            >
                              {edu.level}
                            </span>
                            <div 
                              className="w-1.5 h-1.5 rounded-full animate-pulse"
                              style={{ backgroundColor: config.dotColor }}
                            ></div>
                          </div>

                          <h3 className="text-base font-black uppercase tracking-tight" style={{ color: config.borderColor }}>
                            {edu.institution}
                          </h3>

                          <p className="text-xs font-bold uppercase tracking-widest opacity-80" style={{ color: config.borderColor }}>
                            📅 {edu.period}
                          </p>

                          <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, transparent 100%)` }}></div>

                          <p className="text-sm text-slate-300 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-12 sm:mb-16 uppercase italic">
            AI Certifications & <span className="text-outline">Badges</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="cert-card relative group overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-slate-900 border border-white/5 aspect-[4/5] animate-slideUp hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-transform duration-500 ease-out cursor-pointer"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">
                    {cert.type}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold mt-1 uppercase italic">{cert.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2">{cert.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>{cert.badge}</span>
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

