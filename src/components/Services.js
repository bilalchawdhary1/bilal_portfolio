const services = [
  {
    number: "01",
    title: "AI product integration",
    description:
      "Integrate LLM capabilities into an existing product with focused user flows, thoughtful prompts, and API connections.",
    stack: ["OpenAI", "Gemini", "LLM integration"],
  },
  {
    number: "02",
    title: "AI assistants and workflows",
    description:
      "Build AI agents, chatbots, and knowledge assistants for focused text or voice experiences.",
    stack: ["AI agents", "Chatbots", "Voice", "Knowledge search"],
  },
  {
    number: "03",
    title: "Python backends and SaaS",
    description:
      "Develop FastAPI services, REST APIs, and database-backed features to support product and SaaS workflows.",
    stack: ["FastAPI", "REST APIs", "PostgreSQL", "MongoDB"],
  },
];

const Services = () => (
  <section
    aria-labelledby='services-heading'
    className='band mx-auto w-full max-w-7xl px-8 py-16 sm:px-5 sm:py-12'
  >
    <div
      className='mb-10 grid grid-cols-2 items-end gap-10 md:grid-cols-1 md:gap-4'
      data-scroll-reveal
    >
      <div>
        <p className='eyebrow'>How I can help</p>
        <h2
          id='services-heading'
          className='text-balance text-3xl font-semibold tracking-tight sm:text-2xl'
        >
          Practical engineering for product teams
        </h2>
      </div>
      <p className='max-w-xl text-sm leading-6 text-dark/70 dark:text-light/70'>
        Connect AI capability to the product around it: clear interfaces,
        dependable APIs, and software shaped around the problem.
      </p>
    </div>

    <div className='grid grid-cols-3 gap-4 md:grid-cols-1'>
      {services.map(service => (
        <article
          key={service.number}
          data-scroll-reveal
          className='surface-card surface-card-interactive accent-card flex flex-col rounded-2xl border p-6 sm:p-5'
        >
          <p className='mb-10 flex items-center gap-3 font-mono text-xs font-semibold tracking-widest text-primary dark:text-primaryDark'>
            {service.number}
            <span
              aria-hidden='true'
              className='h-px flex-1 bg-dark/10 dark:bg-light/10'
            />
          </p>
          <h3 className='text-lg font-semibold tracking-tight'>
            {service.title}
          </h3>
          <p className='mt-3 text-sm leading-6 text-dark/70 dark:text-light/70'>
            {service.description}
          </p>
          <ul
            aria-label={`${service.title} technologies`}
            className='mt-auto flex flex-wrap gap-1.5 pt-6'
          >
            {service.stack.map(item => (
              <li key={item} className='chip'>
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
