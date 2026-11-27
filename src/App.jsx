import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import CertificationsSection from './components/CertificationsSection.jsx';
import Footer from './components/Footer.jsx';

const SECTION_IDS = ['about', 'experience', 'reviews', 'projects', 'skills', 'certifications'];

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );
  const [activeSection, setActiveSection] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('portfolio_theme', next ? 'dark' : 'light');
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ReviewsSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
      </main>

      <Footer />

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0b2e23] text-white dark:bg-[#6ac9a2] dark:text-[#071f17] shadow-cardHover hover:opacity-90 transition-opacity"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
