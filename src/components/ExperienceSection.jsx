import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

const EXPERIENCE_LIST = [
  {
    company: 'Ruth',
    link: 'https://ruth.careers',
    role: 'Software Developer',
    date: "Nov '24 — Present",
    location: 'Graz, Austria',
    tags: ['TypeScript', 'Angular', 'C# / .NET', 'SQL', 'AI Workflow'],
    bullets: [
      {
        lead: 'Platform & Matching Engineering',
        text: "Part of the engineering team responsible for developing Ruth's matching algorithm and software platform.",
      },
      {
        lead: 'Interactive Data Visualization & Angular Migration',
        text: 'Built a highly custom interactive TypeScript application to visualize candidates and their match results against vacancies, then migrated and modernized it into Angular.',
      },
      {
        lead: 'Full-Stack Delivery',
        text: 'End-to-end feature development across TypeScript, modern Angular, C#/.NET, and SQL.',
      },
      {
        lead: 'AI-Assisted Development',
        text: 'Regularly leverage AI development tools as part of the engineering workflow to accelerate prototyping, refactoring, and delivery.',
      },
    ],
  },
  {
    company: 'Impartner',
    link: 'https://impartner.com',
    role: 'Web Developer / Technical Account Manager',
    date: "Oct '20 — Sep '24",
    location: 'SLC, Utah, USA & Graz, Austria',
    tags: ['JavaScript', 'C# / .NET', 'HTML / CSS', 'REST APIs', 'Automation'],
    bullets: [
      {
        lead: 'Client Support & Legacy Code Management',
        text: 'Managed and resolved support tickets for enterprise client portals, refactoring legacy code for improved efficiency, maintainability, and scalability.',
      },
      {
        lead: 'UI/UX Enhancements',
        text: 'Implemented modern styling and responsive layouts to elevate client portal designs, user experience, and customer satisfaction.',
      },
      {
        lead: 'API Development & Integration',
        text: 'Designed and integrated APIs to expand portal functionality and streamline data exchange across customer systems.',
      },
      {
        lead: 'Custom Forms & Process Automation',
        text: 'Developed custom forms and automated workflows that reduced back-office workload and delivered faster, more accurate results to partners.',
      },
      {
        lead: 'Documentation & Knowledge Sharing',
        text: 'Created and maintained comprehensive technical documentation for processes, troubleshooting, and onboarding.',
      },
    ],
  },
  {
    company: 'Scorpion',
    link: 'https://scorpion.co',
    role: 'Frontend Developer',
    date: "Mar '16 — Nov '17",
    location: 'Valencia, California, USA',
    tags: ['HTML', 'CSS / SCSS', 'JavaScript', 'Component Systems'],
    bullets: [
      {
        lead: 'Client Support to Core Dev Team',
        text: 'Started as a Tech Services Representative resolving bugs for client sites and quickly moved into the development team for custom design implementations.',
      },
      {
        lead: 'Reusable Component Architecture',
        text: 'Designed and maintained reusable master templates with swappable components.',
      },
      {
        lead: 'Internal Visual Mockup Tool',
        text: 'Built a visual tool enabling project managers to rapidly mock up new landing pages from the reusable component library.',
      },
    ],
  },
];

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState({ 0: true });

  const toggleItem = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-[#e4e8e4]/70 dark:border-[#1d352d]/70">
      <div className="portfolio-container">
        <p className="section-eyebrow">02 / Experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <div className="mt-10 relative space-y-6 before:hidden sm:before:block before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-[#dce7e1] dark:before:bg-[#1d352d]">
          {EXPERIENCE_LIST.map((item, idx) => {
            const isOpen = !!expanded[idx];
            return (
              <div key={item.company} className="relative sm:pl-10">
                <span
                  aria-hidden="true"
                  className={`hidden sm:block absolute left-[5px] top-7 w-[13px] h-[13px] rounded-full border-2 transition-colors ${
                    idx === 0
                      ? 'bg-[#10996d] dark:bg-[#6ac9a2] border-[#f8f9f7] dark:border-[#091411]'
                      : 'bg-[#f8f9f7] dark:bg-[#091411] border-[#9bb3aa] dark:border-[#396254]'
                  }`}
                />

                <div className="surface-card overflow-hidden">
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-xl font-bold text-[#0b2e23] dark:text-[#edf3f0]">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 hover:text-[#10996d] dark:hover:text-[#6ac9a2] transition-colors"
                            >
                              {item.company}
                              <ExternalLink className="w-4 h-4 opacity-70" />
                            </a>
                          </h3>
                        </div>
                        <p className="text-base font-medium text-[#10996d] dark:text-[#6ac9a2] mt-0.5">
                          {item.role}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-[#4b5f58] dark:text-[#9bb3aa]">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tech-pill">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleItem(idx)}
                        aria-expanded={isOpen}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#4b5f58] dark:text-[#9bb3aa] hover:text-[#0b2e23] dark:hover:text-[#edf3f0] transition-colors"
                      >
                        {isOpen ? 'Hide details' : 'Show details'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <ul className="mt-5 pt-5 border-t border-[#e4e8e4] dark:border-[#1d352d] space-y-3 text-sm sm:text-base text-[#4b5f58] dark:text-[#a8beb6] leading-relaxed">
                        {item.bullets.map((bullet) => (
                          <li key={bullet.lead} className="flex gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10996d] dark:bg-[#6ac9a2] shrink-0"
                            />
                            <span>
                              <strong className="font-semibold text-[#0b2e23] dark:text-[#edf3f0]">
                                {bullet.lead}:{' '}
                              </strong>
                              {bullet.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
