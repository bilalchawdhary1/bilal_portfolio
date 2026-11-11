import React from "react";

const skillGroups = [
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "REST APIs", "SQL"],
  },
  {
    title: "AI & LLMs",
    skills: ["OpenAI", "Google Gemini", "LLM integration", "Prompt engineering"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend & tools",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Git", "GitHub", "Tailwind CSS"],
  },
];

const Skills = () => (
  <section
    aria-labelledby='skills-heading'
    className='band mx-auto w-full max-w-7xl px-8 py-16 sm:px-5 sm:py-12'
  >
    <div className='mb-8 max-w-2xl' data-scroll-reveal>
      <p className='eyebrow'>Technical expertise</p>
      <h2
        id='skills-heading'
        className='text-balance text-3xl font-semibold tracking-tight sm:text-2xl'
      >
        Skills &amp; toolkit
      </h2>
    </div>

    <div className='grid grid-cols-4 gap-4 lg:grid-cols-2 sm:grid-cols-1'>
      {skillGroups.map(group => (
        <article
          key={group.title}
          data-scroll-reveal
          className='surface-card surface-card-interactive rounded-2xl border p-5'
        >
          <h3 className='mb-4 flex items-center gap-2 text-base font-semibold'>
            <span
              aria-hidden='true'
              className='h-1.5 w-1.5 rounded-full bg-primary dark:bg-primaryDark'
            />
            {group.title}
          </h3>
          <ul className='flex flex-wrap gap-2'>
            {group.skills.map(skill => (
              <li
                key={skill}
                className='rounded-full border border-dark/10 px-3 py-1.5 text-sm text-dark/70 dark:border-light/15 dark:text-light/75'
              >
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
