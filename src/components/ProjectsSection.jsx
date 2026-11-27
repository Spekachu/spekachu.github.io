import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const FEATURED_PROJECT = {
  title: 'Word Wanderer',
  description:
    'Interactive visual vocabulary map for language learners across English, German, French, and Spanish. Pan and zoom through curated word maps filtered by CEFR level and part of speech, personalize words with emoji stickers and color highlights, and practice pronunciation with built-in speech synthesis.',
  liveLink: 'https://word-wanderer.onrender.com/',
  repoLink: 'https://github.com/Spekachu/Word-Wanderer',
  imgSrc: '/assets/project-screenshots/word-wanderer.png',
  altText: 'Word Wanderer interactive vocabulary map screenshot',
  tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Web Speech API'],
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-[#e4e8e4]/70 dark:border-[#1d352d]/70">
      <div className="portfolio-container">
        <p className="section-eyebrow">04 / Projects</p>
        <h2 className="section-title">Featured project</h2>
        <p className="mt-3 text-[#4b5f58] dark:text-[#9bb3aa] max-w-2xl">
          Most of my production work lives inside proprietary company platforms. Here is a personal
          project I designed and built from scratch, with more modern builds currently in the works.
        </p>

        <article className="mt-10 surface-card overflow-hidden hover:shadow-cardHover">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <a
              href={FEATURED_PROJECT.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-7 overflow-hidden bg-[#eef4f1] dark:bg-[#0d1c17] group block"
            >
              <img
                src={FEATURED_PROJECT.imgSrc}
                alt={FEATURED_PROJECT.altText}
                className="w-full h-full object-cover min-h-[240px] group-hover:scale-[1.03] transition-transform duration-300"
              />
            </a>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#10996d] dark:text-[#6ac9a2] font-medium">
                  Full-Stack Web App
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0b2e23] dark:text-[#edf3f0]">
                  {FEATURED_PROJECT.title}
                </h3>
                <p className="text-sm text-[#4b5f58] dark:text-[#a8beb6] leading-relaxed">
                  {FEATURED_PROJECT.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {FEATURED_PROJECT.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={FEATURED_PROJECT.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0b2e23] text-white dark:bg-[#6ac9a2] dark:text-[#071f17] text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Live Demo
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={FEATURED_PROJECT.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#dce7e1] dark:border-[#234338] text-sm font-medium text-[#0b2e23] dark:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
                >
                  Source Code
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectsSection;
