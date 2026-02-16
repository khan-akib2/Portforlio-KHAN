'use client';

import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showFigma, setShowFigma] = useState(false);
  const [figmaFullscreen, setFigmaFullscreen] = useState(false);

  // Reset states when project changes
  useEffect(() => {
    if (isOpen && project) {
      setActiveTab('overview');
      setCurrentImageIndex(0);
      setCopiedCode(false);
      setShowFigma(false);
      setFigmaFullscreen(false);
    }
  }, [project?.title, isOpen]);

  if (!isOpen || !project) return null;

  // Reset to overview if viewing a design project
  if (project.cat === 'design' && activeTab === 'code') {
    setActiveTab('overview');
  }

  const images = project.images || [project.img];
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(project.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-indigo-500/30 rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[95vh] sm:max-h-[85vh] overflow-hidden flex flex-col shadow-2xl shadow-indigo-500/20 animate-slideUp my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
            <div className="flex justify-between items-start p-4 sm:p-8 border-b border-indigo-500/20 bg-gradient-to-r from-transparent to-indigo-500/5 gap-3 sm:gap-4 flex-shrink-0">
          <div className="flex-1 min-w-0">
            <span className="text-indigo-400 text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] block mb-1 sm:mb-2">
              {project.cat === 'dev' ? 'Development' : 'Design Project'}
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tight leading-tight mb-1 sm:mb-2 line-clamp-2 sm:truncate">{project.title}</h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-snug line-clamp-2 sm:truncate">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-indigo-400 text-xl sm:text-2xl transition-all hover:rotate-90 transform duration-300 flex-shrink-0 mt-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-4 sm:px-8 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-indigo-500/20 overflow-x-auto flex-shrink-0 scrollbar-hide">
          {(project.cat === 'dev' ? ['overview', 'code', 'details'] : ['overview', 'details']).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 sm:pb-3 px-3 sm:px-4 font-bold uppercase tracking-widest text-[10px] sm:text-xs whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'text-indigo-300 border-b-2 border-indigo-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="relative group">
                <div className="relative rounded-lg sm:rounded-xl border border-indigo-500/30 overflow-hidden bg-slate-950">
                  <img
                    src={images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-indigo-600 text-white p-2 rounded-full transition-all text-sm"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-indigo-600 text-white p-2 rounded-full transition-all text-sm"
                    >
                      →
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 px-3 py-2 rounded-full">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-indigo-400 w-6 h-1.5' : 'bg-slate-400 w-1.5 h-1.5'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Description */}
              <div>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{project.description}</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-slate-800/50 border border-indigo-500/20 rounded-lg p-3 sm:p-4">
                    <p className="text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Duration</p>
                    <p className="text-white font-bold text-xs sm:text-sm">{project.duration}</p>
                  </div>
                  <div className="bg-slate-800/50 border border-indigo-500/20 rounded-lg p-3 sm:p-4">
                    <p className="text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Team</p>
                    <p className="text-white font-bold text-xs sm:text-sm">{project.teamSize}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-indigo-500/20">
                {project.figmaLink && project.cat === 'design' && (
                  <button
                    onClick={() => setShowFigma(!showFigma)}
                    className="flex-1 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2.5 sm:py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all cursor-pointer"
                  >
                    {showFigma ? 'Hide' : 'Figma'}
                  </button>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 sm:py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all text-center"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && project.cat !== 'design' && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 sm:py-2 rounded-lg font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all text-center border border-indigo-500/30 flex items-center justify-center gap-2"
                    title="GitHub Repository"
                  >
                    <FaGithub className="text-base sm:text-lg" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

              {/* Figma Embed */}
              {showFigma && project.figmaLink && (
                <div className="mt-4 rounded-lg border border-pink-500/30 overflow-hidden bg-slate-950">
                  <div className="p-3 sm:p-4 bg-slate-900/50 border-b border-pink-500/20 flex items-center justify-between">
                    <p className="text-[10px] sm:text-xs text-slate-400">
                      <span className="text-pink-400 font-bold">Note:</span> If the Figma embed asks for login, the file needs to be set to "Anyone with the link can view" in Figma's share settings.
                    </p>
                    <button
                      onClick={() => setFigmaFullscreen(true)}
                      className="ml-3 px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
                      title="Open Fullscreen"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                      <span className="hidden sm:inline">Fullscreen</span>
                    </button>
                  </div>
                  <iframe
                    title="Figma Design"
                    src={project.figmaLink}
                    width="100%"
                    height="400"
                    className="w-full"
                    style={{ border: 'none' }}
                    allowFullScreen
                  />
                </div>
              )}

              {/* Figma Fullscreen Modal */}
              {figmaFullscreen && project.figmaLink && (
                <div 
                  className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex flex-col animate-fadeIn"
                  onClick={() => setFigmaFullscreen(false)}
                >
                  <div className="flex items-center justify-between p-4 bg-slate-900/80 border-b border-pink-500/30">
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base">{project.title}</h3>
                      <p className="text-slate-400 text-xs">Figma Design Preview</p>
                    </div>
                    <button
                      onClick={() => setFigmaFullscreen(false)}
                      className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-all cursor-pointer"
                      title="Close Fullscreen"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex-1 relative" onClick={(e) => e.stopPropagation()}>
                    <iframe
                      title="Figma Design Fullscreen"
                      src={project.figmaLink}
                      className="w-full h-full"
                      style={{ border: 'none' }}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          ) : activeTab === 'code' ? (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Code</h3>
                <button
                  onClick={copyToClipboard}
                  className={`px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                    copiedCode
                      ? 'bg-green-600/30 text-green-300'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {copiedCode ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <div className="bg-slate-950 border border-indigo-500/30 rounded-lg p-3 sm:p-4 overflow-x-auto max-h-48 sm:max-h-64">
                <pre className="text-[10px] sm:text-xs text-slate-300 font-mono leading-tight">
                  <code className="text-indigo-300">{project.code}</code>
                </pre>
              </div>
              {project.codeExplanation && (
                <div className="bg-indigo-600/10 border border-indigo-500/30 rounded-lg p-3">
                  <p className="text-indigo-300 text-[10px] sm:text-xs leading-relaxed">{project.codeExplanation}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-800/50 border border-indigo-500/20 rounded-lg p-3">
                  <p className="text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Category</p>
                  <p className="text-white capitalize font-bold text-xs sm:text-sm">{project.cat}</p>
                </div>
                <div className="bg-slate-800/50 border border-indigo-500/20 rounded-lg p-3">
                  <p className="text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="text-white font-bold text-xs sm:text-sm">{project.status || 'Done'}</p>
                </div>
              </div>
              {project.challenge && (
                <div className="bg-slate-800/50 border border-indigo-500/20 rounded-lg p-3">
                  <p className="text-indigo-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">Challenge</p>
                  <p className="text-slate-200 text-[10px] sm:text-xs leading-relaxed">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div className="bg-indigo-600/10 border border-indigo-500/30 rounded-lg p-3">
                  <p className="text-indigo-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">Solution</p>
                  <p className="text-slate-100 text-[10px] sm:text-xs leading-relaxed">{project.solution}</p>
                </div>
              )}
              {project.outcome && (
                <div className="bg-emerald-600/10 border border-emerald-500/30 rounded-lg p-3">
                  <p className="text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">Outcome</p>
                  <p className="text-slate-100 text-[10px] sm:text-xs leading-relaxed">{project.outcome}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
