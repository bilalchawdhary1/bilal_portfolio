import React from "react";

const experience = [
  {
    position: "Freelance Full-Stack AI Developer",
    time: "December 2022 – Present",
    current: true,
    description:
      "Building AI-powered apps, LLM integrations and chatbots on reliable Python backends.",
  },
  {
    position:
      "Technical Business Analyst / Business Development (Tech-Focused)",
    company: "Hubble42 Inc.",
    type: "Full-time",
    time: "December 2025 – October 2026",
    description:
      "Worked with engineering teams to turn business requirements into technical solutions.",
  },
  {
    position: "Frontend Developer",
    company: "Ads Analytica",
    time: "January 2024 – November 2025",
    description: "Frontend developer working on user interfaces.",
  },
  {
    position: "Frontend Developer Intern",
    company: "Gamicacloud",
    time: "December 2021 – February 2022",
    description: "Internship in frontend development.",
  },
];

const education = [
  {
    degree: "BS Computer Science",
    institution: "Government College University Faisalabad",
    time: "2020–2024",
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Government College University Faisalabad",
    time: "2018–2020",
  },
];

const TimeBadge = ({children}) => (
  <span className='shrink-0 rounded-full border border-dark/10 px-2.5 py-1 font-mono text-[0.7rem] font-medium tracking-wide text-dark/65 dark:border-light/15 dark:text-light/65'>
    {children}
  </span>
);

const Experience = () => (
  <section
    aria-label='Experience and education'
    className='band mx-auto grid w-full max-w-7xl grid-cols-2 gap-14 px-8 py-16 md:grid-cols-1 sm:gap-12 sm:px-5 sm:py-12'
  >
    <div>
      <p className='eyebrow'>Career history</p>
      <h2 className='mb-8 text-balance text-3xl font-semibold tracking-tight sm:text-2xl'>
        Experience
      </h2>
      <ol className='timeline'>
        {experience.map(item => (
          <li
            key={`${item.position}-${item.time}`}
            data-scroll-reveal
            className={`timeline-item${item.current ? " is-current" : ""}`}
          >
            <div className='surface-card surface-card-interactive rounded-2xl border p-5'>
              <div className='mb-3 flex flex-wrap items-center gap-2'>
                <TimeBadge>{item.time}</TimeBadge>
                {item.current && (
                  <span className='rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-primary dark:bg-primaryDark/15 dark:text-primaryDark'>
                    Current
                  </span>
                )}
              </div>
              <h3 className='text-balance text-lg font-semibold leading-snug tracking-tight'>
                {item.position}
              </h3>
              {item.company && (
                <p className='mt-1 text-sm font-medium text-primary dark:text-primaryDark'>
                  {item.company}
                  {item.type && (
                    <span className='font-normal text-dark/60 dark:text-light/60'>
                      {" "}
                      · {item.type}
                    </span>
                  )}
                </p>
              )}
              {item.description && (
                <p className='mt-3 text-sm leading-6 text-dark/75 dark:text-light/75'>
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>

    <div>
      <p className='eyebrow'>Academic background</p>
      <h2 className='mb-8 text-balance text-3xl font-semibold tracking-tight sm:text-2xl'>
        Education
      </h2>
      <ol className='timeline'>
        {education.map(item => (
          <li key={item.degree} data-scroll-reveal className='timeline-item'>
            <div className='surface-card surface-card-interactive rounded-2xl border p-5'>
              <div className='mb-3'>
                <TimeBadge>{item.time}</TimeBadge>
              </div>
              <h3 className='text-balance text-lg font-semibold leading-snug tracking-tight'>
                {item.degree}
              </h3>
              <p className='mt-1 text-sm text-dark/75 dark:text-light/75'>
                {item.institution}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
