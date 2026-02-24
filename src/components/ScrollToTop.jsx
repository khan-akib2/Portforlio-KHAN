'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes float-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes glow-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(99, 102, 241, 0); }
        }
        
        @keyframes shimmer-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes rotate-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .scroll-to-top-btn {
          animation: float-bounce 2.5s ease-in-out infinite;
        }

        .glow-ring {
          animation: glow-ring 2s infinite;
        }

        .glass-bg {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.2) 100%);
          background-size: 200% 200%;
          animation: rotate-glow 6s ease infinite;
        }

        .shimmer {
          animation: shimmer-pulse 2s ease-in-out infinite;
        }
      `}</style>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn fixed bottom-8 cursor-pointer right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Outer glow ring */}
          <div className="glow-ring absolute inset-0 rounded-full w-16 h-16"></div>

          {/* Main circular glass container */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            {/* Animated gradient background */}
            <div className="glass-bg absolute inset-0 backdrop-blur-3xl rounded-full"></div>
            
            {/* Dark frosted glass base */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 via-slate-800/50 to-slate-900/60 rounded-full border border-white/25 backdrop-blur-2xl"></div>
            
            {/* Bright indigo accent gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-400/15 to-blue-300/20 rounded-full"></div>
            
            {/* Shimmer effect */}
            <div className="shimmer absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm"></div>
            
            {/* Icon container with glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Icon glow background */}
                <div className="absolute inset-0 bg-indigo-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <svg
                  className="relative w-8 h-8 text-indigo-200 group-hover:text-indigo-100 transition-all duration-300 group-hover:scale-125 drop-shadow-lg group-hover:drop-shadow-2xl"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
            </div>
            
            {/* Top highlight */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-white/40 to-transparent rounded-full blur-lg group-hover:from-white/60 transition-all duration-300"></div>
            
            {/* Side accent light */}
            <div className="absolute top-3 right-2 w-3 h-3 bg-indigo-300/40 rounded-full blur-md group-hover:bg-indigo-300/60 transition-all duration-300"></div>
          </div>
        </button>
      )}
    </>
  );
}
