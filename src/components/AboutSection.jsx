import React from 'react';
import { ExternalLink } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-[#e4e8e4]/70 dark:border-[#1d352d]/70">
      <div className="portfolio-container">
        <p className="section-eyebrow">01 / About</p>
        <h2 className="section-title">A bit about me</h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#0b2e23] dark:text-[#edf3f0]">
              A versatile <span className="text-[#10996d] dark:text-[#6ac9a2]">Software Developer</span> with
              a strong foundation in <span className="text-[#10996d] dark:text-[#6ac9a2]">Frontend Web Development</span> and
              full-stack architecture.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#4b5f58] dark:text-[#a8beb6] leading-relaxed">
            <div className="surface-card p-6 sm:p-8 space-y-4">
              <p>
                I am originally from <strong className="font-medium text-[#0b2e23] dark:text-[#edf3f0]">Los Angeles, California</strong> and
                have enjoyed living and traveling in many parts of the world. Now based in{' '}
                <strong className="font-medium text-[#0b2e23] dark:text-[#edf3f0]">Austria</strong> (with my lovely Austrian wife), I love
                contributing to innovative products where I can learn quickly, collaborate closely, and make a meaningful impact.
              </p>
              <p>
                Outside of coding, I'm passionate about music, singing, chess, art, language learning,
                and spending time outdoors staying active.
              </p>

              <div className="pt-4 border-t border-[#e4e8e4] dark:border-[#1d352d]">
                <p className="text-sm sm:text-base">
                  On the side, I built{' '}
                  <a
                    href="https://word-wanderer.onrender.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-medium text-[#10996d] dark:text-[#6ac9a2] underline underline-offset-4 hover:opacity-80"
                  >
                    Word Wanderer
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  , an interactive language-learning app that displays vocabulary lists as an explorable visual map. As I study{' '}
                  <strong className="font-medium text-[#0b2e23] dark:text-[#edf3f0]">German</strong>, I wanted to build something I would
                  genuinely enjoy using myself.
                </p>
                <a
                  href="https://word-wanderer.onrender.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block mt-4 overflow-hidden rounded-xl border border-[#e4e8e4] dark:border-[#1d352d] group"
                >
                  <img
                    src="/assets/project-screenshots/word-wanderer.png"
                    alt="Word Wanderer interactive vocabulary map"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
