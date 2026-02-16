
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrbBackground from './components/OrbBackground';

export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact';

const App: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs: Record<SectionId, React.RefObject<HTMLElement>> = {
    hero: heroRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    education: educationRef,
    contact: contactRef,
  };

  const handleNavigate = (section: SectionId) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-transparent min-h-screen relative z-0">
      <OrbBackground />
      <div className="relative z-10">
        <Header onNavigate={handleNavigate} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero ref={heroRef} onNavigate={handleNavigate} />
          <About ref={aboutRef} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Experience ref={experienceRef} />
          <Education ref={educationRef} />
          <Contact ref={contactRef} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;