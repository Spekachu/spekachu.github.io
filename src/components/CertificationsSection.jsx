import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, LayoutGrid, GalleryHorizontal } from 'lucide-react';

const CERTIFICATES = [
  {
    title: 'Mastering Algorithms and Data Structures in JavaScript',
    image: '/assets/certs/algo-certificate.png',
    link: 'https://learn.codesignal.com/certificates/cm0ezx2je001khgzalxcunriy/course-paths/10',
  },
  {
    title: 'JavaScript Level 1',
    image: '/assets/certs/js_1_certificate.png',
    link: null,
  },
  {
    title: 'JavaScript Level 2',
    image: '/assets/certs/js_2_certificate.png',
    link: null,
  },
  {
    title: 'JavaScript Level 3',
    image: '/assets/certs/js_3_certificate.png',
    link: null,
  },
  {
    title: 'JavaScript Level 4',
    image: '/assets/certs/js_4_certificate.png',
    link: null,
  },
  {
    title: 'Python Certificate',
    image: '/assets/certs/python_certificate_1.png',
    link: null,
  },
  {
    title: 'HTML Certificate',
    image: '/assets/certs/html-cert.png',
    link: 'https://www.sololearn.com/certificates/CT-7PBKJV6U',
  },
  {
    title: 'CSS Certificate',
    image: '/assets/certs/css-cert.png',
    link: 'https://www.sololearn.com/certificates/CT-OZBC2TAM',
  },
  {
    title: 'JavaScript Certificate',
    image: '/assets/certs/js-cert.png',
    link: 'https://www.sololearn.com/certificates/CT-LPFFZWAK',
  },
  {
    title: 'PHP Certificate',
    image: '/assets/certs/php-cert.png',
    link: 'https://www.sololearn.com/certificates/CT-6W7K6X93',
  },
  {
    title: 'SQL Certificate',
    image: '/assets/certs/sql-cert.png',
    link: 'https://www.sololearn.com/certificates/CT-0IXCNSSN',
  },
];

const CertificationsSection = () => {
  const [current, setCurrent] = useState(0);
  const [viewMode, setViewMode] = useState('carousel');

  const prev = () => setCurrent((i) => (i - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  const next = () => setCurrent((i) => (i + 1) % CERTIFICATES.length);

  const cert = CERTIFICATES[current];

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-[#e4e8e4]/70 dark:border-[#1d352d]/70">
      <div className="portfolio-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="section-eyebrow">06 / Certifications</p>
            <h2 className="section-title">Continuous learning</h2>
            <p className="mt-3 text-[#4b5f58] dark:text-[#9bb3aa]">
              Over the years I've pursued self-education through CodeSignal, freeCodeCamp, The Odin
              Project, documentation, and AI-assisted study.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setViewMode((m) => (m === 'carousel' ? 'grid' : 'carousel'))}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#dce7e1] dark:border-[#1d352d] bg-white dark:bg-[#10201b] text-xs font-medium text-[#0b2e23] dark:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
          >
            {viewMode === 'carousel' ? (
              <>
                <LayoutGrid className="w-3.5 h-3.5" />
                View all ({CERTIFICATES.length})
              </>
            ) : (
              <>
                <GalleryHorizontal className="w-3.5 h-3.5" />
                Carousel view
              </>
            )}
          </button>
        </div>

        {viewMode === 'carousel' ? (
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="surface-card p-4 sm:p-6">
              <div className="overflow-hidden rounded-xl border border-[#e4e8e4] dark:border-[#1d352d] bg-[#f8f9f7] dark:bg-[#091411]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto block"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0b2e23] dark:text-[#edf3f0]">
                    {cert.title}
                  </h3>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#10996d] dark:text-[#6ac9a2] hover:underline mt-1"
                    >
                      Verify credential
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous certificate"
                    className="p-2 rounded-lg border border-[#dce7e1] dark:border-[#1d352d] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs text-[#4b5f58] dark:text-[#9bb3aa] min-w-[3.2rem] text-center">
                    {current + 1} / {CERTIFICATES.length}
                  </span>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next certificate"
                    className="p-2 rounded-lg border border-[#dce7e1] dark:border-[#1d352d] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-5 gap-1.5 flex-wrap">
              {CERTIFICATES.map((c, idx) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  aria-label={`View ${c.title}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    current === idx
                      ? 'w-6 bg-[#10996d] dark:bg-[#6ac9a2]'
                      : 'w-2 bg-[#d4ddd8] dark:bg-[#234338] hover:bg-[#9bb3aa]'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATES.map((item) => {
              const cardContent = (
                <>
                  <div className="overflow-hidden border-b border-[#e4e8e4] dark:border-[#1d352d] bg-[#f8f9f7] dark:bg-[#091411]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-sm text-[#0b2e23] dark:text-[#edf3f0]">
                      {item.title}
                    </h3>
                    {item.link && (
                      <ExternalLink className="w-3.5 h-3.5 text-[#10996d] dark:text-[#6ac9a2] shrink-0" />
                    )}
                  </div>
                </>
              );

              return item.link ? (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card overflow-hidden hover:shadow-cardHover hover:-translate-y-0.5 block"
                >
                  {cardContent}
                </a>
              ) : (
                <div key={item.title} className="surface-card overflow-hidden">
                  {cardContent}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
