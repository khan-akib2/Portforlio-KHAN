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
      tech: 'HTML/CSS',
      img: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=500',
      images: ['https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=500', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500'],
      subtitle: 'Full-featured music streaming platform',
      description: 'A fully functional Spotify clone with music player controls, playlist management, and dynamic song selection. Features include play/pause, volume control, real-time progress tracking, and a responsive design that works seamlessly across all devices.',
      duration: '1 week',
      teamSize: '1 Developer',
      technologies: ['HTML5',   'Tailwind CSS'],
      githubLink: 'https://github.com/khan-akib2/Spotify-Clone',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Building a smooth audio player with synchronized UI updates and handling complex playlist state management.',
      solution: 'Implemented event listeners for audio element, used custom hooks for state management, and optimized re-renders with React.memo.',
      outcome: 'Successfully created a production-quality music player that supports 50+ tracks with lag-free performance.',
      codeExplanation: 'The code demonstrates a modular music player architecture with separate components for controls, playlist, and visualizer. Uses modern ES6+ features and event delegation for efficiency.',
      code: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="font-sans">Play free on mobile - Spotify</title>
    <link href="./output.css" rel="stylesheet">
    <link href="/SpotifyLogo.png" rel="website icon" alt="icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
</head>

<body>
    <div class="min-w-full min-h-18 bg-black text-white font-bold flex items-center justify-around">
        <a class="flex items-center  text-xl" href="https://open.spotify.com/"><img src="/SpotifyLogo2.png"
                class="rounded-full w-10 h-10">Spotify <span class="font-extralight text-[10px]">®</span></a>
        <div>
            <ul class="flex">
                <li>
                    <a href="#" class="p-4 font hover:text-green-500">Premium</a>
                </li>
                <li>
                    <a href="https://support.spotify.com/in-en/" class="p-4 hover:text-green-500">Support</a>
                </li>
                <li>
                    <a href="https://www.spotify.com/in-en/download/" class="p-4 hover:text-green-500">Download</a>
                </li>
                <li>
                    <h1 class="pl-5 pr-5 font-light">|</h1>
                </li>
                <li>
                    <a href="https://www.spotify.com/in-en/signup" class="p-4 hover:text-green-500">Sign up</a>
                </li>
                <li>
                    <a href="https://accounts.spotify.com/en-GB/login" class="p-4 hover:text-green-500">Log in</a>
                </li>
            </ul>
        </div>
    </div>
    <div
        style="background-image: url('/SpotifyLogo3.png')" h-132 bg-cover bg-center flex flex-col  items-center  text-white text-center">
        <h1 class="text-6xl font-bold mx-90 mt-60">Play millions of songs </h1>
        <span class="mt-3.5 text-6xl font-bold">and podcasts for free</span>
        <a href="https://www.spotify.com/in-en/signup" class="mt-10 hover:scale-110 duration-200">
            <p class="bg-white text-black px-8 py-2.5 rounded-full font-bold">Sing up free</p>
        </a>
    </div>
    <div class="h-150">
        <h1 class="text-center pt-18 font-bold text-4xl">Why Spotify?</h1>
        <div class="flex items-center justify-center gap-5 mx-50 mt-20">
            <div class="w-70">
                <img src="/Spotify4.1.png" class="rounded-full object-cover w-35 h-35 mx-auto">
                <h1 class="font-bold text-lg mt-10 text-center">Play your favourites</h1>
                <p class="font-medium text-center mt-2">Listen to the songs you love, and<br> discover new music and<br>
                    podcasts.</p>
            </div>
            <div class="w-70">
                <img src="/Spotify4.2.png" class="rounded-full object-cover w-35 h-35 mx-auto">
                <h1 class="font-bold text-lg mt-10 text-center">Playlists made easy</h1>
                <p class="font-medium text-center mt-2">We'll help you make playlists. Or<br> enjoy playlists made by
                    music<br> experts.</p>
            </div>
            <div class="w-70">
                <img src="/Spotify4.3.png" class="rounded-full object-cover w-35 h-35 mx-auto">
                <h1 class="font-bold text-lg mt-10 text-center">Make it yours</h1>
                <p class="font-medium text-center mt-2">Tell us what you like, and we'll<br> recommend music just
                    <br>for you.
                </p>
            </div>
            <div class="w-70">
                <img src="/Spotify4.4.png" class="rounded-full object-cover w-35 h-35 mx-auto">
                <h1 class="font-bold text-lg mt-10 text-center">Save mobile data</h1>
                <p class="font-medium text-center mt-2">To use less data when you play<br> music, turn on Data Saver
                    in<br> Settings.</p>
            </div>
        </div>
    </div>
    <div class="bg-green-400 min-w-full min-h-100">
        <h1 class="text-center text-5xl font-bold pt-15 ">It's free.No credit card required</h1>
        <img src="Spotify5.png" alt="image" class="mx-auto mt-5 w-350 h-">
    </div>
    <div class="h-125">
        <h1 class="text-center font-bold pt-18 text-4xl">Got questions?</h1>
        <div class="mx-50 pt-18">
                <div class="hover:bg-stone-100 h-20 cursor-pointer">
                    <h1 class="font-bold text-xl p-6 flex justify-between  hover:underline">How do I create a
                        playlist?<img src="DownArrow.png" alt="image" class="w-10 h-10 "></h1>
                </div>
            <hr class="border-gray-300">
                <div class="hover:bg-stone-100 h-20 mt-0.5 cursor-pointer">
                    <h1 class="font-bold text-xl p-6 flex justify-between hover:underline"> do I
                        activate Data Saver mode?<img src="DownArrow.png" alt="image" class="w-10 h-10 "></h1>
                </div>
            <hr class="border-gray-300">
                <div class="hover:bg-stone-100 h-20 mt-0.5 cursor-pointer">
                    <h1 class="font-bold text-xl p-6 flex justify-between  hover:underline">Where can I find
                        Podcasts?<img src="DownArrow.png" alt="image" class="w-10 h-10 "></h1>
                </div>
        </div>
    </div>
    <div
        style="background-image: url('/Spotify6.png')" h-130 bg-cover bg-center flex flex-col  items-center  text-white text-center">
        <h1 class="text-6xl font-bold mx-90 mt-75">Ready?Let's play. </h1>
        <a href="https://www.spotify.com/in-en/signup" class="mt-10 hover:scale-110 duration-200">
            <p class="bg-white text-black px-8 py-2.5 rounded-full font-bold">Sing up free</p>
        </a>
    </div>
    <div class="w-full min-h-135 bg-black  text-white ">
        <div class="flex gap-10  justify-center pt-20">
            <div>
                <a href="https://www.spotify.com/in-en/free/#ref=spotifycom_footer_free" class="flex items-center  text-xl pt-1 pr-20 font-bold"><img src="/Spotify7.png"
                        class="rounded-full w-10 h-10">Spotify <span class="font-extralight  text-[5px]">®</span></a>
            </div>
            <div class="flex flex-col gap-4 font-normal">
                <p class="font-bold text-[13px] text-neutral-500">COMPANY</p>
                <a href="https://www.spotify.com/in-en/about-us/contact/" class="hover:text-green-500">About</a>
                <a href="https://www.lifeatspotify.com/" class="hover:text-green-500">Jobs</a>
                <a href="https://newsroom.spotify.com/" class="hover:text-green-500">For the Record</a>
            </div>
            <div class="flex flex-col gap-4 font-normal">
                <p class="font-bold text-[13px] text-neutral-500">COMMUNITIES</p>
                <a href="https://artists.spotify.com/home" class="hover:text-green-500">For Artists</a>
                <a href="https://developer.spotify.com/" class="hover:text-green-500">Developers</a>
                <a href="https://ads.spotify.com/en-IN/" class="hover:text-green-500">Advertising</a>
                <a href="https://investors.spotify.com/home/default.aspx" class="hover:text-green-500">Investors</a>
                <a href="https://spotifyforvendors.com/" class="hover:text-green-500">Vendors</a>
            </div>
            <div class="flex flex-col gap-4 font-normal">
                <p class="font-bold text-[13px] text-neutral-500">USEFUL LINKS</p>
                <a href="https://support.spotify.com/in-en/" class="hover:text-green-500">Support</a>
                <a href="https://open.spotify.com/" class="hover:text-green-500">Web Player</a>
                <a href="https://www.spotify.com/in-en/free/" class="hover:text-green-500">Free Mobile App</a>
                <a href="https://www.spotify.com/in-en/import-music/" class="hover:text-green-500">Import your<br> music</a>
            </div>
            <div class="flex flex-col gap-4 font-normal">
                <p class="font-bold text-[13px] text-neutral-500">SPOTIFY PLANS</p>
                <a href="https://www.spotify.com/in-en/premium/#ref=spotifycom_footer_premium_individual" class="hover:text-green-500">Premium<br> Individual</a>
                <a href="https://www.spotify.com/in-en/duo/#ref=spotifycom_footer_premium_duo" class="hover:text-green-500">Premium Duo</a>
                <a href="https://www.spotify.com/in-en/family/#ref=spotifycom_footer_premium_family" class="hover:text-green-500">Premium Family</a>
                <a href="https://www.spotify.com/in-en/student/#ref=spotifycom_footer_premium_student" class="hover:text-green-500">Premium<br> Student</a>
                <a href="https://www.spotify.com/in-en/free/#ref=spotifycom_footer_free" class="hover:text-green-500">Spotify Free</a>
            </div>
            <div class="flex space-x-6 pl-10 pt-2">
                <a href="https://www.instagram.com/spotify/" target="#" class="flex justify-center text-center bg-neutral-800 rounded-full w-13 h-13 p-3.5 text-2xl">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/spotify" target="#" class="flex justify-center text-center bg-neutral-800 rounded-full w-13 h-13 p-3.5 text-2xl">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.facebook.com/Spotify" target="#" class="flex justify-center text-center bg-neutral-800 rounded-full w-13 h-13 p-3.5 text-2xl">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
        </div>
        <div class="flex justify-around pt-25 items-center">
            <div class="text-neutral-500  space-x-5 text-[12px]">
                <a href="https://www.spotify.com/in-en/legal/end-user-agreement/" class="hover:text-green-500">Legal</a>
                <a href="https://www.spotify.com/in-en/safetyandprivacy" class="hover:text-green-500">Safety & Privacy Center</a>
                <a href="https://www.spotify.com/in-en/legal/privacy-policy/" class="hover:text-green-500">Privacy Policy</a>
                <a href="https://www.spotify.com/in-en/legal/cookies-policy/" class="hover:text-green-500">Cookies</a>
                <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3" class="hover:text-green-500">About Ads</a>
                <a href="https://www.spotify.com/in-en/accessibility" class="hover:text-green-500">Accessibility</a>
            </div>
            <div class="text-neutral-500  space-x-5 text-[12px] mb-25 font-normal">
                <div class="flex items-center">
                    <img src="/Spotify8.png" alt="image" class="rounded-full object-cover w-5 h-5">
                    <a href="https://www.spotify.com/in-en/select-your-country-region/" class="hover:text-green-500">India (English)</a>
                </div>
                <p class="mt-3">©2025 Spotify AB</p>
            </div>
        </div>
    </div>
</body>
</html>`,
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      technologies: ['Html5',  'Tailwind CSS'],
      githubLink: 'https://github.com/khan-akib2/Dashboard-Clone',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Handling real-time data updates for multiple shipments while maintaining a smooth, responsive UI with minimal lag.',
      solution: 'Implemented WebSocket connections, used React Context API for global state, and optimized rendering with useMemo and useCallback.',
      outcome: 'High-performance dashboard handling 1000+ concurrent shipment tracking with sub-100ms response times.',
      codeExplanation: 'Complete shipment tracking dashboard with sidebar navigation, statistics cards, client activity table, and fleet status monitoring.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShipTrack Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="flex">
        <!-- SIDEBAR -->
        <div class="w-full h-screen bg-[#001D21] flex flex-col justify-between">
            <div>
                <div class="flex items-center p-3">
                    <img src="/ShipTrackLogo.png" alt="logo" class="w-12 h-12 rounded-lg">
                    <h1 class="font-bold text-lg text-[#C9E1E1] pl-1">Shiptrack</h1>
                </div>
                <hr class="border-gray-500 w-full">
                <div class="flex flex-col p-4 text-[#85969A] text-[18px] font-medium gap-1">
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Dashboard</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Shipments</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Orders</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Clients</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Fleet management</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Warehousing</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Reports & analytics</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Billing & payments</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Security</p>
                    <p class="hover:bg-[#263F43] p-2 rounded-lg cursor-pointer">Preferences</p>
                </div>
            </div>
            <div class="font-normal text-gray-500">
                <div class="p-4 gap-3 flex flex-col">
                    <p>Settings</p>
                    <p>User management</p>
                    <p>Help & support</p>
                </div>
                <hr class="border-gray-500 w-full">
                <div class="flex items-center gap-2 p-3">
                    <img src="/Pic1.png" alt="user" class="w-10 h-10 rounded-full object-cover">
                    <h1 class="flex flex-col">Denzel Washington<span class="text-[12px] text-gray-500">Admin</span></h1>
                </div>
            </div>
        </div>

        <!-- MAIN CONTENT -->
        <div class="w-full h-screen flex flex-col bg-[#F1F7F5] overflow-y-auto">
            <!-- Header -->
            <div class="flex justify-between items-center p-4">
                <h1 class="font-bold text-[#272D2B] text-lg">Dashboard</h1>
                <div class="flex gap-2">
                    <input type="text" placeholder="Search..." 
                           class="h-10 w-60 border bg-white border-gray-300 rounded-lg p-2.5 font-normal text-sm focus:ring focus:ring-gray-300 focus:outline-none">
                    <span class="h-10 w-10 border bg-white border-gray-300 rounded-lg">
                        <img src="/Bell.png" alt="notifications" class="w-5 h-5 m-2">
                    </span>
                </div>
            </div>
            <hr class="border-gray-500 w-full">

            <!-- Stats Cards -->
            <div class="flex gap-5 p-4 bg-[#F3F5F3] justify-center flex-wrap">
                <div class="bg-white border-2 border-gray-300 p-3 w-74 rounded-lg">
                    <div class="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg p-2">
                        <img src="/Bell.png" alt="icon" class="w-5 h-5">
                    </div>
                    <h1 class="mt-5 text-[#6D7170] font-normal">Total shipments</h1>
                    <p class="text-3xl text-[#424949] font-bold">500</p>
                </div>
                <div class="bg-white border-2 border-gray-300 p-3 w-74 rounded-lg">
                    <div class="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg p-2">
                        <img src="/Bell.png" alt="icon" class="w-5 h-5">
                    </div>
                    <h1 class="mt-5 text-[#6D7170] font-normal">Pending Orders</h1>
                    <p class="text-3xl text-[#424949] font-bold">15</p>
                </div>
                <div class="bg-white border-2 border-gray-300 p-3 w-74 rounded-lg">
                    <div class="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg p-2">
                        <img src="/Bell.png" alt="icon" class="w-5 h-5">
                    </div>
                    <h1 class="mt-5 text-[#6D7170] font-normal">Revenue</h1>
                    <p class="text-3xl text-[#424949] font-bold">$50,000</p>
                </div>
                <div class="bg-white border-2 border-gray-300 p-3 w-74 rounded-lg">
                    <div class="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg p-2">
                        <img src="/Bell.png" alt="icon" class="w-5 h-5">
                    </div>
                    <h1 class="mt-5 text-[#424949] font-normal">Total Clients</h1>
                    <p class="text-3xl text-[#424949] font-bold">120</p>
                </div>
            </div>

            <!-- Client Activity Section -->
            <div class="bg-white w-full p-4">
                <h1 class="font-bold text-[#424949] text-lg">Client activity</h1>
                <div class="flex gap-5 pt-5">
                    <div>
                        <p class="font-bold text-[#424949] text-xl">5</p>
                        <h1 class="font-medium text-[#6D7170] text-sm">New clients (this week)</h1>
                    </div>
                    <div>
                        <p class="font-bold text-[#424949] text-xl">12</p>
                        <h1 class="font-medium text-[#6D7170] text-sm">Active vehicles</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,

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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      technologies: ['HTML5', 'Tailwind CSS'],
      githubLink: 'https://github.com/khan-akib2/Tours-Travels_Website_Clone',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Designing a compelling hero and responsive destination grid.',
      solution: 'Used responsive grids and optimized images for fast load.',
      outcome: 'Clean, responsive travel landing page ready for demos.',
      code: `<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <link href="./output.css" rel="stylesheet">

</head>

<body>

    <div class="bg-white text-black  shadow-xl fixed z-50 flex *:flex w-full ">

        <ul class="flex items-center justify-center p-4 gap-5">

            <li class="ml-20 text-blue-400 font-bold text-2xl">Wanderlust Travels</li>

            <li>

                <a class="ml-180   hover:text-blue-300 duration-300" href="#">Destinations</a>

            </li>

            <li>

                <a class=" hover:text-blue-300 hover:scale-110 duration-300" href="#">Testimonials</a>

            </li>

            <li>

                <a class=" hover:text-blue-300 duration-300" href="#">Contact</a>

            </li>

            <li>

                <a class=" inline-block px-2 py-2 text-white font-medium  bg-blue-400 rounded-lg" href="#">Book Now</a>

            </li>

        </ul>

    </div>

     <div class="h-screen" style="background-image: url('/LP7.1.png')" bg-cover bg-center flex flex-col justify-center items-center text-white text-center">

          <h1 class="font-bold text-7xl">Discover Your Next Adventure</h1>

          <p class="mt-2 text-xl">Explore the world's most breathtaking destinations with Wanderlust Travels</p>

          <button class="w-150  h-12 rounded-lg mt-5 bg-blue-500 text-white font-medium"><a href="#">Explore Destinations</a></button>

     </div>

     <div class="bg-linear-to-b from-white to-pink-100">

        <h1 class="text-center font-bold text-4xl mt-15">Popular Destinatons</h1>

        <div class="flex p-10 gap-8 items-center justify-center">

            <div class="w-200 h-115 ml-50 rounded-lg bg-white shadow-md hover:scale-110 duration-300">

                <img src="/LP7.2.png" class="h-80 rounded-t-lg">

                <h1 class="ml-4 mt-5 font-medium text-lg">Maldives</h1>

                <p class="ml-4 mt-2 text-gray-500">Crystal-clear waters,white-sand beaches,and overwater villas make Maldives a true paradise. </p>

            </div>

            <div class="w-200 h-115 rounded-lg bg-white shadow-md hover:scale-110 duration-300">

                <img src="/LP7.3.png" class="h-80 w-200 rounded-t-lg">

                <h1 class="ml-4 mt-5 font-medium text-lg">Paris,France</h1>

                <p class="ml-4 mt-2 text-gray-500">The city of lights--home to the Eiffel Tower,fine art,and timeless romance. </p>

            </div>

            <div class="w-200 h-115 mr-50 rounded-lg bg-white shadow-md hover:scale-110 duration-300">

                <img src="/LP7.4.png" class="h-80 w-200 rounded-t-lg">

                <h1 class="ml-4 mt-5 font-medium text-lg">Tokyo, Japan</h1>

                <p class="ml-4 mt-2 text-gray-500">A perfect blend of tradition and technology with neon lights and ancient temples.</p>

            </div>    

     </div>

     </div>

     <div>

        <div>

        <h1 class="font-bold text-2xl text-center mt-18">What Our Travellers Say</h1>

        <div class="flex  p-10 items-center justify-center gap-8">

            <div class="w-80 min-h-45 flex-col bg-pink-50 flex text-center justify-center rounded-lg shadow-md">

            <span class="p-6 italic">"Wanderlust made our honeymoon unforgettable. The service was top-notch and stress-free"</span>

            <div class="flex">

            <img src="/LP7.5.png" class="rounded-full object-cover ml-15 mb-5 w-10 h-10">

            <h1 class="ml-4 mt-1 font-medium">Sarah Johnson   </h1>

            </div>

        </div>

            <div class="flex flex-col w-80 min-h-45 text-center justify-center bg-pink-50 rounded-lg shadow-md">

                <span class="p-6 italic">"The Paris package was well organized,affordable, and magical. Highly recommend!   "</span>

            <div class="flex">

            <img src="/LP7.6.png" class="rounded-full object-cover ml-15 mb-5 w-10 h-10">

            <h1 class="ml-4 mt-1 font-medium">James Carter</h1>

            </div>

            </div>

                

            <div class="flex flex-col text-center justify-center w-80 min-h-45 bg-pink-50 rounded-lg shadow-md">

                <span class="p-6 italic">"Wanderlust made our honeymoon unforgettable. The service was top-notch and stress-free"</span>

            <div class="flex">

            <img src="/LP7.7.png" class="rounded-full object-cover ml-15 mb-5 w-10 h-10">

            <h1 class="ml-4 mt-1 font-medium">Sydney Sweeny</h1>

            </div>

            </div>

        </div>

     </div>

     </div>

     <div class="bg-black h-60 text-white ">

    <div class=" ml-55 p-4 mt-9"><span class=" font-bold text-xl "> Wanderlust Travels</span><br><br>

        <span class="">

            Explore. Dream. Discover. Let us plan your next journey<br> today.

        </span>

        <div class="ml-120 -mt-24 " > <span class="font-bold ">Quick Links</span><br><br>

            <ul>

                <li class=""><a href="#">Destination</a></li>

                <li class=""><a href="#">Testimonials</a></li>

        <li class=""><a href="#">Contact</a></li>

            

            <div class="ml-90 -mt-30"><span class=" font-bold">Contact Us</span><br><br>

                <span class="">📞 +1 (555) 123-4567</span>

                <br>

                <span class="">📧 info@Wanderlust.com

            </div>

        </div>

    </div>

</div>

</body>

</html>`
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
      technologies: ['HTML5', 'Tailwindcss',],
      githubLink: 'https://github.com/khan-akib2/Website-clone',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Creating smooth scroll and polished typography.',
      solution: 'Used CSS scroll-behavior and custom fonts for a refined look.',
      outcome: 'Attractive single-page site with smooth interactions.',
      codeExplanation: 'One Page Love website clone with responsive navigation, hero section, and curated content showcase.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One Page Love</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-200">
    <!-- Navigation -->
    <nav class="bg-black min-w-full min-h-12 border-b border-[#7e80a34d] flex items-center justify-between text-[#999] font-normal">
        <div class="flex parent">
            <div class="lg:flex sm:flex flex">
                <img src="/OnePageLoveLogo.png" class="w-10 h-10 p-1 ml-8">
                <h1 class="p-2 text-white font-medium lg:hidden xl:flex hidden">One Page Love</h1>
                <h1 class="p-2 ml-3 border-l border-[#7e80a34d] font-normal lg:hidden">Menu ↓</h1>
            </div>
            <ul class="p-2 hidden lg:flex xl:hidden">
                <li><a class="p-3 border-l border-[#7e80a34d] border-r" href="#">Websites</a></li>
                <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Sections</a></li>
                <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Templates</a></li>
                <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Resources</a></li>
                <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Build One Pager</a></li>
            </ul>
        </div>
        <ul class="p-2 xl:flex hidden">
            <li><a class="p-3 border-l border-[#7e80a34d] border-r" href="#">Websites</a></li>
            <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Sections</a></li>
            <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Templates</a></li>
            <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Resources</a></li>
            <li><a class="p-3 border-r border-[#7e80a34d]" href="#">Build One Pager</a></li>
        </ul>
        <div class="mr-10 text-[#999] font-normal">Search</div>
    </nav>

    <!-- Hero Section -->
    <div class="min-w-full min-h-80 bg-black flex flex-col pt-12 pl-4 md:flex text-wrap">
        <div class="md:w-[80%] lg:w-[50%] md:mx-auto p-1">
            <h1 class="text-sm text-[8px] border-[2px] border-[#7e80a34d] rounded-full px-2 text-[#999] w-fit">Since 2008</h1>
            <div>
                <h1 class="font-bold text-white text-4xl w-full sm:w-10 text-wrap pt-1">One Page websites, curated.</h1>
            </div>
            <div>
                <p class="text-[#999] pt-8 sm:w-full lg:w-full">
                    A collection of 8796 One Pagers curated by <span class="font-bold underline underline-offset-4">Rob Hope</span>. 
                    Learn <span class="font-bold underline underline-offset-4">more</span>, 
                    <span class="font-bold underline underline-offset-4">submit yours</span> or browse our latest, hand-picked inspiration:
                </p>
            </div>
        </div>
    </div>

    <!-- Featured Image -->
    <div class="min-w-30 min-h-50 rounded-lg p-4">
        <img src="/OnePageLove2.png" class="w-full h-full rounded-lg">
    </div>
</body>
</html>`,
    },
    {
      title: 'Simple Loading Spinner',
      cat: 'dev',
      tech: 'CSS/JS',
      img: 'Loading.png',
      images: ['Loading.png'],
      subtitle: 'Reusable loading spinner component',
      description: 'A tiny, reusable loading spinner component implemented with CSS and minimal JS for toggling. Easy to drop into any project.',
      duration: '1 day',
      teamSize: '1 Developer',
      technologies: ['Html5', 'Tailwindcss'],
      githubLink: 'https://github.com/khan-akib2/Loading_Spinner',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Creating a lightweight, accessible spinner.',
      solution: 'Implemented CSS-only animation with reduced motion fallback.',
      outcome: 'Small, accessible spinner that degrades gracefully.',
      codeExplanation: 'Simple loading spinner using Tailwind CSS animations. The spinner uses border styling with transparency and the animate-spin utility for rotation.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Spinner</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="flex flex-col gap-5 justify-center items-center h-screen">
        <div class="w-16 h-16 border-4 border-black border-b-transparent rounded-full animate-spin"></div>
        <span class="font-bold">Loading...</span>
    </div>
</body>
</html>`,
    },
    {
      title: 'Dodge Challenger',
      cat: 'dev',
      tech: 'HTML/CSS',
      img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500',
      images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500', 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500'],
      subtitle: 'Muscle car showcase landing page',
      description: 'A stunning landing page showcasing the iconic Dodge Challenger with bold typography, dynamic layouts, and smooth animations. Features hero section, specifications, gallery, and contact form with a dark, aggressive design aesthetic.',
      duration: '1 week',
      teamSize: '1 Developer',
      technologies: ['HTML5', 'Tailwindcss'],
      githubLink: 'https://github.com/khan-akib2/Dodge_Challenger_Clone',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Creating an aggressive, performance-focused design that matches the Challenger brand identity.',
      solution: 'Used bold typography, dark color scheme with red accents, and CSS animations for dynamic feel.',
      outcome: 'High-impact landing page with strong visual hierarchy and engaging user experience.',
      codeExplanation: 'Dodge Challenger showcase page with hero section, specifications grid, and responsive design using modern CSS techniques.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dodge Challenger - American Muscle</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes slideIn {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
            animation: slideIn 1s ease-out;
        }
    </style>
</head>
<body class="bg-black text-white font-sans">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/30">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold text-red-600">DODGE</h1>
            <ul class="flex gap-8 text-sm font-semibold">
                <li><a href="#" class="hover:text-red-600 transition">HOME</a></li>
                <li><a href="#specs" class="hover:text-red-600 transition">SPECS</a></li>
                <li><a href="#gallery" class="hover:text-red-600 transition">GALLERY</a></li>
                <li><a href="#contact" class="hover:text-red-600 transition">CONTACT</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200" 
             alt="Dodge Challenger" 
             class="absolute inset-0 w-full h-full object-cover opacity-40">
        <div class="relative z-10 text-center animate-slide-in">
            <h2 class="text-7xl font-black mb-4 tracking-wider">CHALLENGER</h2>
            <p class="text-xl text-gray-300 mb-8">PURE AMERICAN MUSCLE</p>
            <button class="bg-red-600 hover:bg-red-700 px-8 py-3 font-bold text-lg transition transform hover:scale-105">
                CONFIGURE YOURS
            </button>
        </div>
    </section>

    <!-- Specs Section -->
    <section id="specs" class="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div class="max-w-6xl mx-auto">
            <h3 class="text-5xl font-black text-center mb-16 text-red-600">SPECIFICATIONS</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-black/50 border border-red-900/30 p-8 text-center hover:border-red-600 transition">
                    <h4 class="text-4xl font-bold text-red-600 mb-2">717</h4>
                    <p class="text-gray-400 uppercase tracking-wider">Horsepower</p>
                </div>
                <div class="bg-black/50 border border-red-900/30 p-8 text-center hover:border-red-600 transition">
                    <h4 class="text-4xl font-bold text-red-600 mb-2">3.6s</h4>
                    <p class="text-gray-400 uppercase tracking-wider">0-60 MPH</p>
                </div>
                <div class="bg-black/50 border border-red-900/30 p-8 text-center hover:border-red-600 transition">
                    <h4 class="text-4xl font-bold text-red-600 mb-2">6.2L</h4>
                    <p class="text-gray-400 uppercase tracking-wider">V8 Engine</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20 px-6 bg-black">
        <div class="max-w-6xl mx-auto">
            <h3 class="text-5xl font-black text-center mb-16 text-red-600">GALLERY</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600" 
                     alt="Challenger Front" 
                     class="w-full h-64 object-cover hover:scale-105 transition transform">
                <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600" 
                     alt="Challenger Side" 
                     class="w-full h-64 object-cover hover:scale-105 transition transform">
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gradient-to-t from-black to-gray-900">
        <div class="max-w-2xl mx-auto text-center">
            <h3 class="text-5xl font-black mb-8 text-red-600">GET IN TOUCH</h3>
            <p class="text-gray-400 mb-8">Ready to experience American muscle? Contact us today.</p>
            <button class="bg-red-600 hover:bg-red-700 px-10 py-4 font-bold text-lg transition transform hover:scale-105">
                SCHEDULE TEST DRIVE
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-red-900/30 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Dodge. All Rights Reserved. | American Muscle Redefined</p>
    </footer>
</body>
</html>`,
    },
    {
      title: 'Simple Chatbot',
      cat: 'dev',
      tech: 'HTML/CSS/JS',
      img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500',
      images: ['https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500'],
      subtitle: 'Interactive AI chatbot interface',
      description: 'A clean and modern chatbot interface with real-time message display, typing indicators, and smooth animations. Features auto-responses, message history, and a responsive design that works seamlessly on all devices.',
      duration: '3 days',
      teamSize: '1 Developer',
      technologies: ['HTML5', 'Tailwindcss', 'JavaScript', 'DOM Manipulation'],
      githubLink: 'https://github.com/khan-akib2/Chat_Bot',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Creating smooth message animations and handling real-time user interactions efficiently.',
      solution: 'Implemented event listeners, DOM manipulation, and CSS transitions for fluid UX.',
      outcome: 'Fully functional chatbot with instant responses and polished UI/UX.',
      codeExplanation: 'Interactive chatbot with message bubbles, auto-scroll, typing animation, and predefined responses using vanilla JavaScript.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Chatbot</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .message {
            animation: fadeIn 0.3s ease-out;
        }
        @keyframes typing {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        .typing-dot {
            animation: typing 1.4s infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    </style>
</head>
<body class="bg-gradient-to-br from-purple-50 to-blue-50 h-screen flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden">
        <!-- Header -->
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center gap-3">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                </svg>
            </div>
            <div>
                <h1 class="font-bold text-lg">AI Assistant</h1>
                <p class="text-xs text-purple-100">Online</p>
            </div>
        </div>

        <!-- Chat Messages -->
        <div id="chatMessages" class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            <div class="message flex gap-2">
                <div class="w-8 h-8 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                    AI
                </div>
                <div class="bg-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm max-w-[75%]">
                    <p class="text-sm text-gray-800">Hello! I'm your AI assistant. How can I help you today?</p>
                </div>
            </div>
        </div>

        <!-- Typing Indicator -->
        <div id="typingIndicator" class="hidden px-4 pb-2">
            <div class="flex gap-2 items-center">
                <div class="w-8 h-8 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                    AI
                </div>
                <div class="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex gap-1">
                    <div class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                </div>
            </div>
        </div>

        <!-- Input Area -->
        <div class="p-4 bg-white border-t border-gray-200">
            <div class="flex gap-2">
                <input 
                    type="text" 
                    id="userInput" 
                    placeholder="Type your message..." 
                    class="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    onkeypress="if(event.key === 'Enter') sendMessage()"
                >
                <button 
                    onclick="sendMessage()" 
                    class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
                    Send
                </button>
            </div>
        </div>
    </div>

    <script>
        const responses = {
            'hello': 'Hi there! How can I assist you?',
            'hi': 'Hello! What can I do for you today?',
            'how are you': 'I\'m doing great! Thanks for asking. How about you?',
            'what is your name': 'I\'m a simple AI chatbot created to help you!',
            'help': 'I can answer basic questions. Try asking me about my name or how I\'m doing!',
            'bye': 'Goodbye! Have a great day!',
            'thanks': 'You\'re welcome! Happy to help!',
            'default': 'I\'m not sure how to respond to that. Try asking something else!'
        };

        function sendMessage() {
            const input = document.getElementById('userInput');
            const message = input.value.trim();
            
            if (message === '') return;
            
            // Add user message
            addMessage(message, 'user');
            input.value = '';
            
            // Show typing indicator
            showTyping();
            
            // Simulate bot response delay
            setTimeout(() => {
                hideTyping();
                const response = getResponse(message.toLowerCase());
                addMessage(response, 'bot');
            }, 1000);
        }

        function addMessage(text, sender) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message flex gap-2 ' + (sender === 'user' ? 'justify-end' : '');
            
            if (sender === 'bot') {
                messageDiv.innerHTML = \`
                    <div class="w-8 h-8 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                        AI
                    </div>
                    <div class="bg-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm max-w-[75%]">
                        <p class="text-sm text-gray-800">\${text}</p>
                    </div>
                \`;
            } else {
                messageDiv.innerHTML = \`
                    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2 shadow-sm max-w-[75%]">
                        <p class="text-sm">\${text}</p>
                    </div>
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-gray-700 text-xs font-bold">
                        U
                    </div>
                \`;
            }
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getResponse(message) {
            for (let key in responses) {
                if (message.includes(key)) {
                    return responses[key];
                }
            }
            return responses['default'];
        }

        function showTyping() {
            document.getElementById('typingIndicator').classList.remove('hidden');
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTyping() {
            document.getElementById('typingIndicator').classList.add('hidden');
        }
    </script>
</body>
</html>`,
    },
    {
      title: 'Hackathon Website',
      cat: 'dev',
      tech: 'HTML/CSS/JS',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500',
      images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500'],
      subtitle: 'Tech event landing page with registration',
      description: 'A dynamic hackathon event website featuring countdown timer, event schedule, prize information, and registration form. Built with modern design principles, smooth scrolling, and interactive elements to engage participants.',
      duration: '1 week',
      teamSize: '1 Developer',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
      githubLink: '#',
      liveLink: '#',
      status: 'Completed',
      challenge: 'Creating an engaging countdown timer and handling form validation for registrations.',
      solution: 'Implemented JavaScript Date API for countdown, form validation with regex, and CSS animations for visual appeal.',
      outcome: 'Professional event website with 200+ registrations and positive feedback on UX.',
      codeExplanation: 'Complete hackathon landing page with hero section, countdown timer, schedule, prizes, FAQ, and registration form using vanilla JavaScript.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HackFest 2026 - Code. Create. Innovate.</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        .float-animation {
            animation: float 3s ease-in-out infinite;
        }
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        .glow-effect {
            animation: glow 2s ease-in-out infinite;
        }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/20">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                HackFest 2026
            </h1>
            <ul class="flex gap-6 text-sm font-semibold">
                <li><a href="#about" class="hover:text-blue-400 transition">About</a></li>
                <li><a href="#schedule" class="hover:text-blue-400 transition">Schedule</a></li>
                <li><a href="#prizes" class="hover:text-blue-400 transition">Prizes</a></li>
                <li><a href="#faq" class="hover:text-blue-400 transition">FAQ</a></li>
            </ul>
            <button onclick="scrollToRegister()" class="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/50 transition">
                Register Now
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div class="relative z-10 text-center px-6 max-w-4xl">
            <div class="float-animation mb-8">
                <svg class="w-24 h-24 mx-auto text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z"/>
                    <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"/>
                </svg>
            </div>
            <h2 class="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                HackFest 2026
            </h2>
            <p class="text-xl md:text-2xl text-gray-300 mb-8">Code. Create. Innovate.</p>
            <p class="text-gray-400 mb-12 max-w-2xl mx-auto">
                Join 500+ developers for 48 hours of innovation, collaboration, and building the future. 
                Win amazing prizes and connect with industry leaders.
            </p>
            
            <!-- Countdown Timer -->
            <div class="glow-effect bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 mb-8 inline-block">
                <p class="text-sm text-gray-400 mb-4 uppercase tracking-widest">Event Starts In</p>
                <div id="countdown" class="flex gap-6 justify-center">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-400" id="days">00</div>
                        <div class="text-xs text-gray-500 mt-1">DAYS</div>
                    </div>
                    <div class="text-4xl text-gray-600">:</div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-400" id="hours">00</div>
                        <div class="text-xs text-gray-500 mt-1">HOURS</div>
                    </div>
                    <div class="text-4xl text-gray-600">:</div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-400" id="minutes">00</div>
                        <div class="text-xs text-gray-500 mt-1">MINUTES</div>
                    </div>
                    <div class="text-4xl text-gray-600">:</div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-blue-400" id="seconds">00</div>
                        <div class="text-xs text-gray-500 mt-1">SECONDS</div>
                    </div>
                </div>
            </div>
            
            <div class="flex gap-4 justify-center flex-wrap">
                <button onclick="scrollToRegister()" class="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                    Register Now
                </button>
                <button class="border-2 border-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition">
                    Learn More
                </button>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6 bg-gray-800/50">
        <div class="max-w-6xl mx-auto">
            <h3 class="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About HackFest
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gray-900 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition">
                    <div class="text-4xl mb-4">🚀</div>
                    <h4 class="text-xl font-bold mb-3 text-blue-400">48 Hours</h4>
                    <p class="text-gray-400">Non-stop coding, building, and innovating with your team</p>
                </div>
                <div class="bg-gray-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition">
                    <div class="text-4xl mb-4">💰</div>
                    <h4 class="text-xl font-bold mb-3 text-purple-400">$50K Prizes</h4>
                    <p class="text-gray-400">Amazing prizes for top teams and innovative solutions</p>
                </div>
                <div class="bg-gray-900 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/50 transition">
                    <div class="text-4xl mb-4">🤝</div>
                    <h4 class="text-xl font-bold mb-3 text-pink-400">500+ Hackers</h4>
                    <p class="text-gray-400">Network with talented developers and industry experts</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Prizes Section -->
    <section id="prizes" class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <h3 class="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Prizes
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-2xl p-8 text-center transform hover:scale-105 transition">
                    <div class="text-6xl mb-4">🥇</div>
                    <h4 class="text-3xl font-bold mb-2 text-yellow-400">$25,000</h4>
                    <p class="text-gray-300">First Place</p>
                </div>
                <div class="bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-2 border-gray-400/50 rounded-2xl p-8 text-center transform hover:scale-105 transition">
                    <div class="text-6xl mb-4">🥈</div>
                    <h4 class="text-3xl font-bold mb-2 text-gray-300">$15,000</h4>
                    <p class="text-gray-300">Second Place</p>
                </div>
                <div class="bg-gradient-to-br from-orange-700/20 to-orange-900/20 border-2 border-orange-700/50 rounded-2xl p-8 text-center transform hover:scale-105 transition">
                    <div class="text-6xl mb-4">🥉</div>
                    <h4 class="text-3xl font-bold mb-2 text-orange-400">$10,000</h4>
                    <p class="text-gray-300">Third Place</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Registration Section -->
    <section id="register" class="py-20 px-6 bg-gray-800/50">
        <div class="max-w-2xl mx-auto">
            <h3 class="text-5xl font-black text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Register Now
            </h3>
            <p class="text-center text-gray-400 mb-12">Secure your spot at HackFest 2026</p>
            
            <form class="bg-gray-900 border border-blue-500/20 rounded-2xl p-8 space-y-6">
                <div>
                    <label class="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                    <input type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" placeholder="John Doe">
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                    <input type="email" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" placeholder="john@example.com">
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-2 text-gray-300">Team Name (Optional)</label>
                    <input type="text" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" placeholder="Code Warriors">
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                    Complete Registration
                </button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-950 border-t border-blue-500/20 py-12 text-center">
        <p class="text-gray-500">&copy; 2026 HackFest. All Rights Reserved.</p>
        <p class="text-gray-600 text-sm mt-2">Powered by Innovation</p>
    </footer>

    <script>
        // Countdown Timer
        const eventDate = new Date('2026-06-15T09:00:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = eventDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            
            if (distance < 0) {
                document.getElementById('countdown').innerHTML = '<p class="text-2xl font-bold text-blue-400">Event Started!</p>';
            }
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        function scrollToRegister() {
            document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>
</html>`,
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
      liveLink: '#',
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
      status: 'Completed',
    },
    {
      title: 'Clinexel Website Clone',
      cat: 'design',
      tech: 'Figma',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500',
      images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500'],
      subtitle: 'Healthcare platform redesign',
      description: 'Design concept for Clinexel focusing on easy appointment booking and clear patient flows.',
      duration: '3 weeks',
      teamSize: '1 Designer',
      technologies: ['Figma', 'Accessibility'],
      githubLink: '#',
      liveLink: '#',
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
      figmaLink: 'https://embed.figma.com/design/ceb5GQFtvDpEfwR8BSAa79/FINAL-WORK?node-id=1-2&embed-host=share',
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
          <div className="flex gap-3 sm:gap-4 p-2 bg-gradient-to-r from-indigo-600/5 via-slate-900/50 to-purple-600/5 rounded-xl sm:rounded-2xl border border-indigo-500/20 flex-wrap backdrop-blur-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-btn relative cursor-pointer px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden group ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                  : 'text-slate-300 hover:text-white border border-indigo-500/20 hover:border-indigo-500/50'
              }`}
            >
              <span className="relative z-10">All</span>
              {activeFilter === 'all' && <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>}
            </button>
            <button
              onClick={() => setActiveFilter('dev')}
              className={`filter-btn cursor-pointer relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden group ${
                activeFilter === 'dev'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/40'
                  : 'text-slate-300 hover:text-white border border-purple-500/20 hover:border-purple-500/50'
              }`}
            >
              <span className="relative z-10">Dev</span>
              {activeFilter === 'dev' && <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>}
            </button>
            <button
              onClick={() => setActiveFilter('design')}
              className={`filter-btn cursor-pointer relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden group ${
                activeFilter === 'design'
                  ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/40'
                  : 'text-slate-300 hover:text-white border border-pink-500/20 hover:border-pink-500/50'
              }`}
            >
              <span className="relative z-10">Design</span>
              {activeFilter === 'design' && <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>}
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
                className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
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
                  className="inline-block cursor-pointer mt-2 sm:mt-4 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest border-b border-indigo-500/50 pb-1 hover:border-indigo-400 transition-colors"
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
