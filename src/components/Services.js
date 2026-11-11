const services = [
  {
    number: "01",
    title: "AI product integration",
    description:
      "Add OpenAI or Gemini capabilities to an existing product with clear, useful user flows.",
  },
  {
    number: "02",
    title: "AI assistants and workflows",
    description:
      "Build chat and voice assistants, knowledge search, and workflow automation around real product needs.",
  },
  {
    number: "03",
    title: "Python backends and SaaS",
    description:
      "Develop FastAPI services, REST APIs, database-backed features, and full-stack product experiences.",
  },
];

const Services = () => (
  <section
    aria-labelledby='services-heading'
    className='band mx-auto w-full max-w-7xl px-8 py-16 sm:px-5 sm:py-12'
  >
    <div className='mb-8 max-w-2xl' data-scroll-reveal>
      <p className='eyebrow'>How I can help</p>
      <h2
        id='services-heading'
        className='text-balance text-3xl font-semibold tracking-tight sm:text-2xl'
      >
        Practical engineering for product teams
      </h2>
      <p className='mt-3 text-sm leading-6 text-dark/70 dark:text-light/70'>
        Connect AI capability to the product around it: clear interfaces,
        dependable APIs, and software shaped around the problem.
      </p>
    </div>

    <div className='grid grid-cols-3 gap-4 md:grid-cols-1'>
      {services.map(service => (
        <article
          key={service.number}
          data-scroll-reveal
          className='surface-card surface-card-interactive group rounded-2xl border p-6 sm:p-5'
        >
          <p className='mb-8 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-primary/15 bg-primary/5 px-2 font-mono text-xs font-semibold tracking-widest text-primary dark:border-primaryDark/20 dark:bg-primaryDark/10 dark:text-primaryDark'>
            {service.number}
          </p>
          <h3 className='text-lg font-semibold'>{service.title}</h3>
          <p className='mt-3 text-sm leading-6 text-dark/70 dark:text-light/70'>
            {service.description}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
