import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
];

const Navbar = ({ isDark, onToggleTheme, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#f8f9f7]/85 dark:bg-[#091411]/85 backdrop-blur-md border-b border-[#e4e8e4]/80 dark:border-[#1d352d]/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="portfolio-container h-16 flex items-center justify-between"
      >
        <a
          href="#home"
          className="font-display font-bold text-base tracking-tight text-[#0b2e23] dark:text-[#edf3f0] hover:text-[#10996d] dark:hover:text-[#6ac9a2] transition-colors"
        >
          spencer johnson
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#10996d] dark:text-[#6ac9a2] bg-[#eef4f1] dark:bg-[#162d25]'
                    : 'text-[#4b5f58] dark:text-[#9bb3aa] hover:text-[#0b2e23] dark:hover:text-[#edf3f0]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-3 p-2 rounded-lg text-[#4b5f58] dark:text-[#9bb3aa] hover:text-[#0b2e23] dark:hover:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-[#4b5f58] dark:text-[#9bb3aa] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            className="p-2 rounded-lg text-[#0b2e23] dark:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-b border-[#e4e8e4] dark:border-[#1d352d] bg-[#f8f9f7]/95 dark:bg-[#091411]/95 backdrop-blur-md">
          <div className="portfolio-container py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#10996d] dark:text-[#6ac9a2] bg-[#eef4f1] dark:bg-[#162d25]'
                    : 'text-[#4b5f58] dark:text-[#9bb3aa] hover:text-[#0b2e23] dark:hover:text-[#edf3f0]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
