'use client';

import { useState } from 'react';

export default function Academics() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const educationData = [
    {
      period: '2023 - Present',
      institution: 'Nexcore Institute of Technology',
      description: 'Specializing in Artificial Intelligence & Machine Learning (AIML). Focusing on Deep Learning, Data Science, and Computer Vision.',
      logo: '/NIT.jpg',
      level: 'B.Tech',
      color: 'from-blue-600 to-blue-800',
      accentColor: 'blue',
    },
    {
      period: '2021 - 2023',
      institution: 'St. Mary College',
      description: 'Higher Secondary Education. Completed HSC (12th) with focus on Science stream.',
      logo: '/st.mary.png',
      level: 'HSC (12th)',
      color: 'from-purple-600 to-purple-800',
      accentColor: 'purple',
    },
    {
      period: '2019 - 2021',
      institution: 'Symbiosis Convent High School',
      description: 'Secondary School Education. Completed SSC (10th) with distinction.',
      logo: '/Symbiosis.png',
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
      image: '/AWARECERTIFICATE.png',
      issuer: 'AI Institute',
      badge: '🎓',
      description: 'Fundamental knowledge of Artificial Intelligence concepts and applications'
    },
    {
      title: 'AI Appreciate',
      year: '2026',
      type: 'AI Certification',
      image: '/AIAPPRECIATE.png',
      issuer: 'AI Institute',
      badge: '⭐',
      description: 'Intermediate AI/ML skills and practical application experience'
    },
    {
      title: 'AI For All',
      year: '2026',
      type: 'AI Certification',
      image: '/AIFORALL.jpg',
      issuer: 'AI Institute',
      badge: '🚀',
      description: 'Comprehensive AI knowledge spanning multiple domains and use cases'
    },
  ];

  return (
    <>
      {/* Education Journey Section */}
      <section id="academics" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/1">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-indigo-500">
              My Journey
            </span>
            <div className="w-12 h-[1px] bg-indigo-500/30"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-16 uppercase italic">
            <span className="block">EDUCATION</span>
            <span className="block text-outline">TIMELINE</span>
          </h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {educationData.map((edu, index) => {
                const colorConfig = [
                  { dotColor: '#6366f1', borderColor: '#6366f1', bgGradient: 'from-indigo-600/10 to-indigo-600/5', glowColor: 'rgba(99, 102, 241, 0.3)' }, // Nexcore - Indigo
                  { dotColor: '#ef4444', borderColor: '#ef4444', bgGradient: 'from-red-500/10 to-red-500/5', glowColor: 'rgba(239, 68, 68, 0.3)' }, // St. Mary - Red
                  { dotColor: '#f59e0b', borderColor: '#f59e0b', bgGradient: 'from-amber-500/10 to-amber-500/5', glowColor: 'rgba(245, 158, 11, 0.3)' }, // Symbiosis - Amber/Orange
                ];
                const config = colorConfig[index];
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative group">
                    {/* Desktop alternating layout */}
                    <div className={`hidden sm:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                        <div className="relative w-12 h-12">
                          {/* Pulsing glow rings */}
                          <div 
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping-smooth"
                            style={{ backgroundColor: config.dotColor, filter: 'blur(8px)' }}
                          ></div>
                          
                          {/* Main dot */}
                          <div 
                            className="absolute inset-0 rounded-full border-4 border-slate-950 flex items-center justify-center text-xl shadow-2xl transition-all duration-500 group-hover:scale-125"
                            style={{ 
                              background: `linear-gradient(135deg, ${config.dotColor} 0%, ${config.dotColor}dd 100%)`,
                              boxShadow: `0 0 20px ${config.glowColor}`
                            }}
                          >
                            {index === 0 ? '🎯' : index === 1 ? '📚' : '💡'}
                          </div>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="w-[calc(50%-2rem)]">
                        <div 
                          className="relative p-8 rounded-[2.5rem] border-2 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden group/card"
                          style={{ 
                            borderColor: `${config.borderColor}30`,
                            background: `linear-gradient(135deg, rgba(2, 6, 23, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%)`
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = config.borderColor;
                            e.currentTarget.style.boxShadow = `0 25px 70px ${config.glowColor}`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = `${config.borderColor}30`;
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {/* Animated gradient orb */}
                          <div 
                            className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover/card:opacity-40 transition-all duration-700 bg-gradient-to-br ${config.bgGradient}`}
                            style={{ animation: 'float-smooth 8s ease-in-out infinite' }}
                          ></div>
                          
                          {/* Top accent bar */}
                          <div 
                            className="absolute top-0 left-0 right-0 h-1 rounded-t-[2.5rem] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                            style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, transparent 100%)` }}
                          ></div>

                          <div className="relative z-10 space-y-5">
                            {/* Header with Logo and Badge */}
                            <div className="flex items-start gap-4">
                              {/* Logo */}
                              <div 
                                className="w-16 h-16 rounded-2xl overflow-hidden border-2 bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500" 
                                style={{ borderColor: config.borderColor }}
                              >
                                <img 
                                  src={edu.logo} 
                                  alt={`${edu.institution} logo`}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              {/* Badge and Status */}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                  <span 
                                    className="inline-flex text-[10px] font-black uppercase tracking-[0.2em] text-white px-4 py-2 rounded-xl shadow-lg"
                                    style={{ background: `linear-gradient(135deg, ${config.dotColor} 0%, ${config.dotColor}cc 100%)` }}
                                  >
                                    {edu.level}
                                  </span>
                                  <div 
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{ backgroundColor: config.dotColor, boxShadow: `0 0 8px ${config.dotColor}` }}
                                  ></div>
                                </div>
                                
                                {/* Period */}
                                <div 
                                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit" 
                                  style={{ color: config.borderColor }}
                                >
                                  <span>📅</span>
                                  {edu.period}
                                </div>
                              </div>
                            </div>

                            {/* Institution name */}
                            <h3 
                              className="text-2xl font-black uppercase tracking-tight transition-all duration-300 group-hover/card:translate-x-2" 
                              style={{ color: config.borderColor }}
                            >
                              {edu.institution}
                            </h3>

                            {/* Animated divider */}
                            <div 
                              className="h-[2px] w-20 transition-all duration-500 group-hover/card:w-full rounded-full"
                              style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, transparent 100%)` }}
                            ></div>

                            {/* Description */}
                            <p className="text-sm text-slate-400 leading-relaxed group-hover/card:text-slate-200 transition-colors duration-300">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="sm:hidden relative pl-20">
                      {/* Mobile dot */}
                      <div className="absolute left-[1.25rem] top-4 z-10">
                        <div 
                          className="w-10 h-10 rounded-full border-4 border-slate-950 flex items-center justify-center text-base shadow-lg"
                          style={{ 
                            background: `linear-gradient(135deg, ${config.dotColor} 0%, ${config.dotColor}dd 100%)`,
                            boxShadow: `0 0 15px ${config.glowColor}`
                          }}
                        >
                          {index === 0 ? '🎯' : index === 1 ? '📚' : '💡'}
                        </div>
                      </div>

                      {/* Mobile card */}
                      <div 
                        className="relative p-6 rounded-2xl border-2 overflow-hidden"
                        style={{ 
                          borderColor: `${config.borderColor}30`,
                          background: `linear-gradient(135deg, rgba(2, 6, 23, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%)`
                        }}
                      >
                        {/* Top accent */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                          style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, transparent 100%)` }}
                        ></div>

                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center gap-3">
                            {/* Mobile Logo */}
                            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 bg-white/5 flex items-center justify-center shrink-0" style={{ borderColor: config.borderColor }}>
                              <img 
                                src={edu.logo} 
                                alt={`${edu.institution} logo`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <span 
                              className="inline-flex text-[9px] font-black uppercase tracking-widest text-white px-3 py-1.5 rounded-lg"
                              style={{ background: `linear-gradient(135deg, ${config.dotColor} 0%, ${config.dotColor}cc 100%)` }}
                            >
                              {edu.level}
                            </span>
                          </div>

                          <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: config.borderColor }}>
                            {edu.institution}
                          </h3>

                          <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: config.borderColor }}>
                            <span>📅</span> {edu.period}
                          </p>

                          <div className="h-[2px] w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${config.borderColor} 0%, transparent 100%)` }}></div>

                          <p className="text-sm text-slate-400 leading-relaxed">
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
      <section id="certificates" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-12 sm:mb-16 uppercase italic">
            AI Certifications & <span className="text-outline">Badges</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCertificate(cert)}
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
                
                {/* View button on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="px-4 py-2 bg-indigo-600 rounded-lg text-[9px] font-bold uppercase tracking-widest">
                    View Full
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-indigo-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 cursor-pointer right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-all"
              >
                ✕
              </button>

              {/* Certificate Info */}
              <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <h3 className="text-lg font-black text-white uppercase">{selectedCertificate.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{selectedCertificate.issuer} • {selectedCertificate.year}</p>
              </div>

              {/* Full Certificate Image */}
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

