import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[#e4e8e4] dark:border-[#1d352d] py-10 mt-8">
      <div className="portfolio-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4b5f58] dark:text-[#9bb3aa]">
        <p className="font-display font-medium text-[#0b2e23] dark:text-[#edf3f0]">
          Spencer Johnson <span className="font-normal text-[#4b5f58] dark:text-[#9bb3aa]">· Graz, Austria</span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Spekachu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10996d] dark:hover:text-[#6ac9a2] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/spencer-johnson-02662492/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10996d] dark:hover:text-[#6ac9a2] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1 font-medium text-[#0b2e23] dark:text-[#edf3f0] hover:text-[#10996d] dark:hover:text-[#6ac9a2] transition-colors"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
