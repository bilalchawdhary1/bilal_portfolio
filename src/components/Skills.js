import React from "react";

const skillGroups = [
  {
    title: "Backend",
    blurb: "Services, APIs and data access",
    skills: ["Python", "FastAPI", "REST APIs", "SQL"],
  },
  {
    title: "AI & LLMs",
    blurb: "Model integration in products",
    skills: ["OpenAI", "Google Gemini", "LLM integration", "Prompt engineering"],
  },
  {
    title: "Databases",
    blurb: "Relational and document storage",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend & tools",
    blurb: "Interfaces and everyday workflow",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Git",
      "GitHub",
      "Tailwind CSS",
    ],
  },
];

const Skills = () => (
  <section
    aria-labelledby='skills-heading'
    className='band mx-auto w-full max-w-7xl px-8 py-16 sm:px-5 sm:py-12'
  >
    <div className='mb-10 max-w-2xl' data-scroll-reveal>
      <p className='eyebrow'>Technical expertise</p>
      <h2
        id='skills-heading'
        className='text-balance text-3xl font-semibold tracking-tight sm:text-2xl'
      >
        Skills &amp; toolkit
      </h2>
      <p className='mt-3 text-sm leading-6 text-dark/70 dark:text-light/70'>
        The tools I use to build AI-powered products, from model integration to
        the interface people actually see.
      </p>
    </div>

    <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
      {skillGroups.map((group, index) => (
        <article
          key={group.title}
          data-scroll-reveal
          className='surface-card surface-card-interactive accent-card rounded-2xl border p-6 sm:p-5'
        >
          <div className='mb-5 flex items-start justify-between gap-4'>
            <div>
              <h3 className='text-base font-semibold tracking-tight'>
                {group.title}
              </h3>
              <p className='mt-1 text-sm text-dark/60 dark:text-light/60'>
                {group.blurb}
              </p>
            </div>
            <span
              aria-hidden='true'
              className='font-mono text-xs font-semibold tracking-widest text-primary dark:text-primaryDark'
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <ul className='flex flex-wrap gap-2'>
            {group.skills.map(skill => (
              <li key={skill} className='chip chip-lg'>
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
