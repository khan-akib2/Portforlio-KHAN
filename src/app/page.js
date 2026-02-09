import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Academics from '@/components/Academics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#020617] text-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Academics />
      <Contact />
      <Footer />
    </div>
  );
}
