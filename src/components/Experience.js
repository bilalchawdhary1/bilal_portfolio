import React from "react";

const experience = [
  {
    position: "Freelance Full-Stack AI Developer",
    time: "December 2022 – Present",
    description:
      "Building practical AI-powered applications, integrating LLMs into existing products, developing AI chatbots and intelligent workflows, and building reliable Python backend systems.",
  },
  {
    position: "Frontend Developer",
    company: "Ads Analytica",
    time: "January 2024 – November 2025",
  },
  {
    position: "Frontend Developer Intern",
    company: "Gamicacloud",
    time: "December 2021 – February 2022",
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

const Experience = () => (
  <section
    aria-label='Experience and education'
    className='band mx-auto grid w-full max-w-7xl grid-cols-2 gap-12 px-8 py-16 sm:grid-cols-1 sm:gap-10 sm:px-5 sm:py-12'
  >
    <div>
      <p className='eyebrow'>Career history</p>
      <h2 className='mb-7 text-balance text-3xl font-semibold tracking-tight sm:text-2xl'>
        Experience
      </h2>
      <ol className='experience-list space-y-4'>
        {experience.map(item => (
          <li
            key={`${item.position}-${item.time}`}
            data-scroll-reveal
            className='experience-entry surface-card surface-card-interactive rounded-2xl border p-5'
          >
            <h3 className='text-lg font-semibold leading-snug'>{item.position}</h3>
            {item.company && (
              <p className='mt-1 text-sm font-medium text-primary dark:text-primaryDark'>
                {item.company}
              </p>
            )}
            <p className='mt-2 text-sm text-dark/60 dark:text-light/60'>
              {item.time}
            </p>
            {item.description && (
              <p className='mt-3 text-sm leading-6 text-dark/75 dark:text-light/75'>
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>

    <div>
      <p className='eyebrow'>Academic background</p>
      <h2 className='mb-7 text-balance text-3xl font-semibold tracking-tight sm:text-2xl'>
        Education
      </h2>
      <ol className='experience-list education-list space-y-4'>
        {education.map(item => (
          <li
            key={item.degree}
            data-scroll-reveal
            className='experience-entry surface-card surface-card-interactive rounded-2xl border p-5'
          >
            <h3 className='text-lg font-semibold leading-snug'>{item.degree}</h3>
            <p className='mt-1 text-sm text-dark/75 dark:text-light/75'>
              {item.institution}
            </p>
            <p className='mt-2 text-sm text-dark/60 dark:text-light/60'>
              {item.time}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
