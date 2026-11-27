import React from 'react';

const SKILL_GROUPS = [
  {
    title: 'Frontend & UI',
    subtitle: 'Modern interfaces, state & data visualization',
    skills: [
      'TypeScript',
      'Angular',
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3 / SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & Data',
    subtitle: 'APIs, relational databases & web platforms',
    skills: [
      'C# / .NET',
      'ASP.NET',
      'Node.js',
      'Express',
      'SQL',
      'PostgreSQL',
      'REST APIs',
      'PHP',
      'WordPress',
    ],
  },
  {
    title: 'Tooling & AI Workflow',
    subtitle: 'Shipping faster with modern dev infrastructure',
    skills: [
      'AI Development Tools',
      'Git & GitHub',
      'Docker',
      'Vite',
      'VS Code',
      'LocalWP',
      'Papertrail',
    ],
  },
  {
    title: 'Core Engineering',
    subtitle: 'Foundations & collaborative delivery',
    skills: [
      'Algorithms',
      'Data Structures',
      'Legacy Refactoring',
      'Process Automation',
      'Component Architecture',
      'Technical Documentation',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-[#e4e8e4]/70 dark:border-[#1d352d]/70">
      <div className="portfolio-container">
        <p className="section-eyebrow">05 / Skills</p>
        <h2 className="section-title">Technologies &amp; toolkit</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="surface-card p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold text-[#0b2e23] dark:text-[#edf3f0]">
                {group.title}
              </h3>
              <p className="text-sm text-[#4b5f58] dark:text-[#9bb3aa] mt-1">
                {group.subtitle}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tech-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
