import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const FEATURED_PROJECT = {
  title: 'Word Wanderer',
  tagline: 'Interactive visual vocabulary map for language learners',
  description:
    'Explore curated vocabulary across English, German, French, and Spanish on a pan-and-zoom map. Personalize words with emoji stickers and color highlights, filter by CEFR level and part of speech, and practice pronunciation with built-in speech synthesis.',
  liveLink: 'https://word-wanderer.onrender.com/',
  repoLink: 'https://github.com/Spekachu/Word-Wanderer',
  imgSrc: '/assets/project-screenshots/word-wanderer.png',
  altText: 'Word Wanderer interactive vocabulary map screenshot',
  tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Web Speech API'],
};

const OTHER_PROJECTS = [
  {
    title: 'Our Little Shop',
    description: 'Custom e-commerce storefront exploring WordPress with React and the Interactivity API.',
    link: 'https://ourlittledev.wpenginepowered.com/',
    imgSrc: '/assets/project-screenshots/our-little-shop.png',
    altText: 'Our Little Shop screenshot',
    tags: ['WordPress', 'React', 'Interactivity API'],
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Classic browser game with clean state logic and responsive styling.',
    link: 'https://spekachu.github.io/Tic-Tac-Toe/',
    imgSrc: '/assets/project-screenshots/tic-tac-toe.png',
    altText: 'Tic-Tac-Toe screenshot',
    tags: ['JavaScript', 'CSS'],
  },
  {
    title: 'Linear Gradient Generator',
    description: 'Interactive CSS gradient builder with live preview and copy-ready code.',
    link: 'https://spekachu.github.io/Linear-Gradient-Generator/',
    imgSrc: '/assets/project-screenshots/linear-gradient.png',
    altText: 'Linear Gradient Generator screenshot',
    tags: ['JavaScript', 'CSS'],
  },
  {
    title: 'JavaScript Drum Kit',
    description: 'Playable keyboard-triggered drum machine built with vanilla JavaScript audio events.',
    link: 'https://spekachu.github.io/JavaScript-Drum-Kit/',
    imgSrc: '/assets/project-screenshots/drum-machine.png',
    altText: 'JavaScript Drum Kit screenshot',
    tags: ['JavaScript', 'Web Audio', 'CSS'],
  },
  {
    title: 'Drawing Grid',
    description: 'Interactive pixel-art sketching canvas with customizable grid sizing.',
    link: 'https://spekachu.github.io/DrawingGrid/',
    imgSrc: '/assets/project-screenshots/drawing-grid.png',
    altText: 'Drawing Grid screenshot',
    tags: ['JavaScript', 'DOM', 'CSS'],
  },
  {
    title: 'JavaScript Calculator',
    description: 'Clean calculator tool with chained operations and keyboard support.',
    link: 'https://codepen.io/Spekachu/full/jWwEpW/',
    imgSrc: '/assets/project-screenshots/calculator.png',
    altText: 'JavaScript Calculator screenshot',
    tags: ['JavaScript', 'CSS'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-[#e4e8e4]/70 dark:border-[#1d352d]/70">
      <div className="portfolio-container">
        <p className="section-eyebrow">04 / Projects</p>
        <h2 className="section-title">Selected work &amp; experiments</h2>
        <p className="mt-3 text-[#4b5f58] dark:text-[#9bb3aa] max-w-2xl">
          Most of my production work lives inside proprietary company platforms, so here are personal
          projects and self-education builds I've shipped along the way.
        </p>

        {/* Featured Spotlight */}
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
                  Featured Project
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

        {/* Additional Projects Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card overflow-hidden flex flex-col group hover:shadow-cardHover hover:-translate-y-0.5"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#eef4f1] dark:bg-[#0d1c17] border-b border-[#e4e8e4] dark:border-[#1d352d]">
                <img
                  src={project.imgSrc}
                  alt={project.altText}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-lg text-[#0b2e23] dark:text-[#edf3f0] group-hover:text-[#10996d] dark:group-hover:text-[#6ac9a2] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#4b5f58] dark:text-[#9bb3aa] group-hover:text-[#10996d] dark:group-hover:text-[#6ac9a2] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-1.5 text-sm text-[#4b5f58] dark:text-[#9bb3aa] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
