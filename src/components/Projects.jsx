'use client';

import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Spotify Clone',
      cat: 'dev',
      tech: 'HTML/JS',
      img: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=500',
      images: ['https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=500', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500'],
      subtitle: 'Full-featured music streaming platform',
      description: 'A fully functional Spotify clone with music player controls, playlist management, and dynamic song selection. Features include play/pause, volume control, real-time progress tracking, and a responsive design that works seamlessly across all devices.',
      duration: '3 weeks',
      teamSize: '1 Developer',
      technologies: ['HTML5', 'JavaScript', 'CSS3', 'Responsive Design'],
      githubLink: '#',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Building a smooth audio player with synchronized UI updates and handling complex playlist state management.',
      solution: 'Implemented event listeners for audio element, used custom hooks for state management, and optimized re-renders with React.memo.',
      outcome: 'Successfully created a production-quality music player that supports 50+ tracks with lag-free performance.',
      codeExplanation: 'The code demonstrates a modular music player architecture with separate components for controls, playlist, and visualizer. Uses modern ES6+ features and event delegation for efficiency.',
      code: `// Music Player Component
import { useState, useEffect } from 'react';

export default function MusicPlayer() {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className="player">
      <audio ref={audioRef} src={songs[currentIndex]?.url} />
      <PlayerControls {...{ isPlaying, handlePlay, handleNext }} />
      <VolumeControl {...{ volume, setVolume }} />
      <Playlist {...{ songs, currentIndex, setCurrentIndex }} />
    </div>
  );
}`,
    },
    {
      title: 'Red Bus Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500',
      images: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500'],
      subtitle: 'Bus booking platform UI',
      description: 'A responsive Red Bus booking interface built with pure HTML and CSS. Includes journey search, advanced filter options, seat selection, and booking confirmation layouts. Features a modern design with smooth animations and fully responsive grid layouts.',
      duration: '2 weeks',
      teamSize: '1 Designer/Developer',
      technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/redbus-design',
      status: 'Completed',
      challenge: 'Creating a complex seat selection interface with responsive grid and maintaining visual hierarchy across screen sizes.',
      solution: 'Used CSS Grid for seat layout, implemented custom checkboxes with CSS, and used media queries for responsive breakpoints.',
      outcome: 'Delivered a pixel-perfect design that matches the original Red Bus UI with 100% CSS animations.',
    },
    {
      title: 'Swiggy App UI',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
      images: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500'],
      subtitle: 'Food delivery app design system',
      description: 'Professional Figma design mockup of the Swiggy food delivery app. Includes comprehensive UI components: home screen, restaurant listings, menu items, order tracking, and checkout flow with multiple payment options.',
      duration: '4 weeks',
      teamSize: '2 Designers',
      technologies: ['Figma', 'Prototyping', 'Design Systems', 'Accessibility'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/swiggy-design',
      status: 'Completed',
      challenge: 'Creating a cohesive design system that works across multiple screen sizes while maintaining brand consistency.',
      solution: 'Built reusable component library in Figma with variants, created comprehensive design tokens, and established clear typography hierarchy.',
      outcome: 'Complete design system with 50+ components, ready for handoff and development.',
    },
    {
      title: 'ShipTrack Dash',
      cat: 'dev',
      tech: 'React/TS',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500',
      subtitle: 'Advanced shipment tracking dashboard',
      description: 'Advanced shipment tracking dashboard built with React and TypeScript. Features real-time updates, interactive maps, dynamic status filters, and comprehensive analytics visualization. Supports tracking multiple shipments with detailed status histories.',
      duration: '6 weeks',
      teamSize: '3 Developers',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Leaflet Maps'],
      githubLink: '#',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Handling real-time data updates for multiple shipments while maintaining a smooth, responsive UI with minimal lag.',
      solution: 'Implemented WebSocket connections, used React Context API for global state, and optimized rendering with useMemo and useCallback.',
      outcome: 'High-performance dashboard handling 1000+ concurrent shipment tracking with sub-100ms response times.',
      codeExplanation: 'TypeScript-driven component architecture with proper type safety. Uses advanced React patterns like custom hooks and render optimization.',
      code: `interface Shipment {
  id: string;
  status: 'pending' | 'in-transit' | 'delivered' | 'failed';
  origin: Coordinates;
  destination: Coordinates;
  currentLocation: Coordinates;
  estimatedDelivery: Date;
  lastUpdate: Date;
  history: StatusUpdate[];
}

interface ShipmentDashboardProps {
  userId: string;
}

export function ShipmentDashboard({ userId }: ShipmentDashboardProps) {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'in-transit' | 'delivered'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = new WebSocket(\`ws://api.shiptrack.com/track/\${userId}\`);
    
    socket.onmessage = (event) => {
      const updatedShipment = JSON.parse(event.data);
      setShipments(prev => 
        prev.map(s => s.id === updatedShipment.id ? updatedShipment : s)
      );
    };

    return () => socket.close();
  }, [userId]);

  const filteredShipments = useMemo(() => {
    return filter === 'all' 
      ? shipments 
      : shipments.filter(s => s.status === filter);
  }, [shipments, filter]);

  return (
    <div className="dashboard-container">
      <ShipmentMap shipments={filteredShipments} />
      <ShipmentAnalytics data={filteredShipments} />
      <ShipmentTable data={filteredShipments} />
    </div>
  );
}`,
    },
    {
      title: 'Smartwatch UI',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      subtitle: 'Minimal smartwatch interface design',
      description: 'Sleek and minimal Figma design for a premium smartwatch interface. Includes multiple watch faces (digital/analog), comprehensive fitness tracking screens, real-time notifications, and health metrics visualization with beautiful data presentation.',
      duration: '3 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'Prototyping', 'Animation', 'Wireframing'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/smartwatch-design',
      status: 'Completed',
      challenge: 'Designing for extreme space constraints while maintaining readability and functionality.',
      solution: 'Used hierarchical information display, created custom chart components, and focused on essential data visualization.',
      outcome: 'Award-nominated design with 95+ screens and interactive prototypes for all use cases.',
    },
    {
      title: 'Netflix Animation',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500',
      subtitle: 'Interactive streaming UI animations',
      description: 'Interactive animation concepts for Netflix streaming interface. Features smooth transitions, captivating hover effects, and engaging micro-interactions for content discovery. Includes animated card reveals, smooth menu transitions, and delightful loading states.',
      duration: '2 weeks',
      teamSize: '1 Designer/Developer',
      technologies: ['Figma', 'Lottie', 'CSS Animations', 'After Effects'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/netflix-animation',
      status: 'Completed',
      challenge: 'Creating performant animations that enhance UX without impacting performance.',
      solution: 'Optimized animations using GPU acceleration, implemented lazy loading for heavy animations, used Lottie for complex sequences.',
      outcome: 'Smooth 60fps animations across all devices with attention metrics improved by 40%.',
    },
    {
      title: 'Travels Website',
      cat: 'dev',
      tech: 'HTML/CSS/Tailwind',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
      images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500'],
      subtitle: 'Travel booking website clone',
      description: 'A travel booking landing page clone with large hero imagery, destination cards, and booking CTA. Built with responsive layouts and Tailwind utility classes.',
      duration: '1 week',
      teamSize: '1 Developer',
      technologies: ['HTML5', 'Tailwind CSS', 'Responsive Design'],
      githubLink: '#',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Designing a compelling hero and responsive destination grid.',
      solution: 'Used responsive grids and optimized images for fast load.',
      outcome: 'Clean, responsive travel landing page ready for demos.',
    },
    {
      title: 'One Page Love',
      cat: 'dev',
      tech: 'HTML/CSS',
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500',
      images: ['https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500'],
      subtitle: 'One-page love/portfolio site clone',
      description: 'A single-page, romantic-themed landing page with smooth section scroll, hero, testimonials, and contact form. Simple, elegant design focusing on typography and spacing.',
      duration: '4 days',
      teamSize: '1 Developer',
      technologies: ['HTML5', 'CSS3', 'Vanilla JS'],
      githubLink: '#',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Creating smooth scroll and polished typography.',
      solution: 'Used CSS scroll-behavior and custom fonts for a refined look.',
      outcome: 'Attractive single-page site with smooth interactions.',
    },
    {
      title: 'Simple Loading Spinner',
      cat: 'dev',
      tech: 'CSS/JS',
      img: 'https://images.unsplash.com/photo-1520975651285-9beebd2d6a13?w=500',
      images: ['https://images.unsplash.com/photo-1520975651285-9beebd2d6a13?w=500'],
      subtitle: 'Reusable loading spinner component',
      description: 'A tiny, reusable loading spinner component implemented with CSS and minimal JS for toggling. Easy to drop into any project.',
      duration: '1 day',
      teamSize: '1 Developer',
      technologies: ['CSS', 'JavaScript'],
      githubLink: '#',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Creating a lightweight, accessible spinner.',
      solution: 'Implemented CSS-only animation with reduced motion fallback.',
      outcome: 'Small, accessible spinner that degrades gracefully.',
      code: `/* CSS Spinner */
.spinner { width: 48px; height: 48px; border-radius: 50%; border: 6px solid rgba(0,0,0,0.1); border-left-color: #6366F1; animation: spin 1s linear infinite }
@keyframes spin { to { transform: rotate(360deg) } }`,
    },

    // Design projects additions
    {
      title: 'Gozoop Website Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500',
      images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500'],
      subtitle: 'Agency website redesign',
      description: 'Redesign concept for Gozoop marketing agency with emphasis on portfolio, case studies, and lead capture.',
      duration: '2 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'Prototyping'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/gozoop-design',
      status: 'Completed',
    },
    {
      title: 'Snapdeal Website Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500',
      images: ['https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500'],
      subtitle: 'E-commerce platform redesign',
      description: 'E-commerce redesign focused on simplified navigation, product detail pages, and checkout flow.',
      duration: '3 weeks',
      teamSize: '2 Designers',
      technologies: ['Figma', 'UX'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/snapdeal-design',
      status: 'Completed',
    },
    {
      title: 'Halal Travels Redesign',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500',
      images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500'],
      subtitle: 'Travel service UX overhaul',
      description: 'UX and visual redesign for Halal Travels, focusing on trust signals, search clarity, and booking flow.',
      duration: '3 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'UX Research'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/halaltravels-design',
      status: 'Completed',
    },
    {
      title: 'Al Hidayah Campus Redesign',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500',
      images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500'],
      subtitle: 'Educational campus website redesign',
      description: 'Redesign concept for Al Hidayah campus website focusing on admissions, events, and student resources.',
      duration: '3 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'Accessibility'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/alhidayah-design',
      status: 'Completed',
    },
    {
      title: 'Purpllle Website Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500',
      images: ['https://images.unsplash.com/photo-1503602642458-232111445657?w=500'],
      subtitle: 'Cosmetics e-commerce design',
      description: 'Design for beauty products marketplace with strong product presentation and simplified checkout.',
      duration: '2 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'UI Design'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/purpllle-design',
      status: 'Completed',
    },
    {
      title: 'BluePeak Website Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500'],
      subtitle: 'Corporate services website redesign',
      description: 'Redesign for BluePeak corporate site, emphasizing services, case studies, and contact funnels.',
      duration: '2 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'UX'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/bluepeak-design',
      status: 'Completed',
    },
    {
      title: 'Clinexel Website Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1582719478250-7d9c8b1a5a64?w=500',
      images: ['https://images.unsplash.com/photo-1582719478250-7d9c8b1a5a64?w=500'],
      subtitle: 'Healthcare platform redesign',
      description: 'Design concept for Clinexel focusing on easy appointment booking and clear patient flows.',
      duration: '3 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'Accessibility'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/clinexel-design',
      status: 'Completed',
    },
    {
      title: 'H&M Website Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500'],
      subtitle: 'Retail fashion website redesign',
      description: 'Design for H&M inspired e-commerce site with emphasis on collections, visuals, and quick navigation.',
      duration: '3 weeks',
      teamSize: '2 Designers',
      technologies: ['Figma', 'Prototyping'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/hm-design',
      status: 'Completed',
    },
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.cat === activeFilter);

  return (
    <>
      <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-6 sm:gap-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
            The Archive<span className="text-outline">.</span>
          </h2>
          <div className="flex gap-2 sm:gap-4 p-1 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 flex-wrap">
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all ${
                activeFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('dev')}
              className={`filter-btn px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${
                activeFilter === 'dev'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              Dev
            </button>
            <button
              onClick={() => setActiveFilter('design')}
              className={`filter-btn px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${
                activeFilter === 'design'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${activeFilter}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedProject(project)}
              className="project-card relative group overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-slate-900 border border-white/5 aspect-[4/5] animate-slideUp hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-transform duration-500 ease-out cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">
                  {project.tech}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold mt-1 uppercase italic">{project.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="inline-block mt-2 sm:mt-4 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest border-b border-indigo-500/50 pb-1 hover:border-indigo-400 transition-colors"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
