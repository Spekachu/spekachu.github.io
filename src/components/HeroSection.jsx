import React from 'react';
import { ArrowDownRight, MapPin } from 'lucide-react';

const GithubIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section id="home" className="pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#4b5f58] dark:text-[#9bb3aa]">
              <MapPin className="w-3.5 h-3.5 text-[#10996d] dark:text-[#6ac9a2]" />
              <span>Software Developer · Graz, Austria</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] text-[#0b2e23] dark:text-[#edf3f0]">
              Meet <span className="text-[#10996d] dark:text-[#6ac9a2]">Spencer</span>,
              <br />
              a creative software developer.
            </h1>

            <p className="text-base sm:text-lg text-[#4b5f58] dark:text-[#9bb3aa] leading-relaxed max-w-xl">
              Full-stack engineer crafting modern TypeScript, Angular, React, and C#/.NET
              applications—combining thoughtful frontend design with practical engineering and
              AI-accelerated workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b2e23] text-white dark:bg-[#6ac9a2] dark:text-[#071f17] font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Explore Projects
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#d4ddd8] dark:border-[#234338] text-[#0b2e23] dark:text-[#edf3f0] font-medium text-sm hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
              >
                Experience
              </a>

              <div className="flex items-center gap-1 ml-1">
                <a
                  href="https://github.com/Spekachu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-xl text-[#4b5f58] dark:text-[#9bb3aa] hover:text-[#0b2e23] dark:hover:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/spencer-johnson-02662492/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-xl text-[#4b5f58] dark:text-[#9bb3aa] hover:text-[#0b2e23] dark:hover:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative max-w-sm mx-auto md:ml-auto">
              <div className="overflow-hidden rounded-2xl border border-[#e4e8e4] dark:border-[#1d352d] shadow-cardHover bg-white dark:bg-[#10201b] p-2">
                <img
                  src="/assets/spencer-profile.jpeg"
                  alt="Spencer Johnson portrait"
                  className="w-full aspect-square object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
