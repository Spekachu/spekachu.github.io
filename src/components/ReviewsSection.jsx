import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Jared Park',
    initials: 'JP',
    role: 'Manager at Impartner',
    date: 'September 9, 2024',
    content: [
      'Spencer is a very talented full-stack developer who has the unique ability to also be customer facing. As a technical account manager on my team, Spencer managed our largest enterprise account who was a key strategic account for us. He was loved by all in that account and I repeatedly received unprompted messages from that customer praising Spencer for his impact on their organization as they worked with him to build out our solution in a way that supported their business objectives.',
      'Spencer is a person of integrity and takes great pride in his work. He is a self-starter, and will always go the extra mile to make a customer happy and successful. Not to mention, his skills as a developer are top notch.',
      'It should be noted that the TAM role he operated in for this client required him to be proficient in HTML, CSS, C#, .NET, and JavaScript.',
    ],
  },
  {
    name: 'Peter Chiariello',
    initials: 'PC',
    role: 'Sales Enablement Leader, Program Director & Business Transformation Specialist at Xerox',
    date: 'September 23, 2024',
    content: [
      'I am delighted to recommend Spencer for roles in PRM and CRM technical account management or solution architecture. Over the past several years, Spencer has been our dedicated PRM and Partner Portal technical account manager, and I have had the pleasure of working closely with him for the last two years.',
      'Spencer is an exceptionally talented problem solver with a unique blend of technical expertise and business acumen. He consistently asks critical and insightful questions, demonstrating his ability to quickly grasp complex concepts and apply them effectively. His eagerness to help and proactive approach make him an invaluable asset to our team.',
      "One of Spencer's standout qualities is his accountability. He holds himself to the highest standards and consistently meets his commitments, even when juggling multiple priorities. His ability to manage his workload efficiently while maintaining a high level of quality is truly impressive.",
      'Moreover, Spencer is a creative solution designer who always finds innovative ways to address challenges and deliver results. His dedication to getting things done, coupled with his technical skills and business insight, makes him an outstanding candidate for any technical account management or consulting role.',
      'In summary, I strongly recommend Spencer. His skills, work ethic, and positive attitude will undoubtedly make him a valuable addition to any organization.',
    ],
  },
  {
    name: 'Eva Gillespie-Larsen',
    initials: 'EG',
    role: 'Project Management Pro · Agile, PMP, LSSBB',
    date: 'September 23, 2024',
    content: [
      'Spencer and I worked together at Impartner, where he was the technical account manager over our most important and complex customer. We worked together on two separate projects for this customer, where I was the project manager. Spencer was consistently one of the best resources on my team for these projects. He is reliable, detail-oriented, sees and brings attention to risks, technically skilled, and an excellent communicator. The customer also loved and trusted Spencer more than anyone else on the team, due to his consistent excellent performance with them. I would absolutely recommend Spencer to any company and would be thrilled to work with him again anytime, on any project.',
    ],
  },
  {
    name: 'Rosemary Ice',
    initials: 'RI',
    role: 'Staff Product Owner · Certified Scrum Master (CSM)',
    date: 'November 3, 2024',
    content: [
      'Spencer served as our dedicated technical account manager for our highly complex project. I found him to be personable, approachable, and professional. I was impressed by his ability to quickly familiarize himself with the project and provide exceptional technical support. As a result of his efforts, we were able to modernize our website and enhance program compliance through efficient automation. He created reusable code and trained me to update it, which enabled me to become self-sufficient. Spencer is an outstanding person, and I truly enjoyed working with him.',
    ],
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((i) => (i + 1) % REVIEWS.length);

  const review = REVIEWS[current];

  return (
    <section id="reviews" className="py-16 sm:py-20 border-t border-[#e4e8e4]/70 dark:border-[#1d352d]/70">
      <div className="portfolio-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">03 / Recommendations</p>
            <h2 className="section-title">What colleagues say</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous recommendation"
              className="p-2.5 rounded-xl border border-[#dce7e1] dark:border-[#1d352d] bg-white dark:bg-[#10201b] text-[#0b2e23] dark:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-[#4b5f58] dark:text-[#9bb3aa] min-w-[3.2rem] text-center">
              {current + 1} / {REVIEWS.length}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next recommendation"
              className="p-2.5 rounded-xl border border-[#dce7e1] dark:border-[#1d352d] bg-white dark:bg-[#10201b] text-[#0b2e23] dark:text-[#edf3f0] hover:bg-[#eef4f1] dark:hover:bg-[#162d25] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 surface-card p-6 sm:p-10 relative">
          <Quote
            aria-hidden="true"
            className="w-8 h-8 text-[#6ac9a2]/40 dark:text-[#6ac9a2]/25 mb-4"
          />

          <div className="space-y-4 text-[#2b4039] dark:text-[#c7d8d2] text-base leading-relaxed">
            {review.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#e4e8e4] dark:border-[#1d352d] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div
                aria-hidden="true"
                className="w-11 h-11 rounded-full bg-[#e6f3ec] dark:bg-[#163329] text-[#0f7a56] dark:text-[#6ac9a2] font-display font-bold text-sm flex items-center justify-center shrink-0"
              >
                {review.initials}
              </div>
              <div>
                <p className="font-display font-bold text-[#0b2e23] dark:text-[#edf3f0]">
                  {review.name}
                </p>
                <p className="text-sm text-[#4b5f58] dark:text-[#9bb3aa]">{review.role}</p>
              </div>
            </div>

            <span className="font-mono text-xs text-[#4b5f58] dark:text-[#9bb3aa]">
              {review.date}
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-5 gap-2">
          {REVIEWS.map((r, idx) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`View recommendation from ${r.name}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                current === idx
                  ? 'w-7 bg-[#10996d] dark:bg-[#6ac9a2]'
                  : 'w-2 bg-[#d4ddd8] dark:bg-[#234338] hover:bg-[#9bb3aa]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
