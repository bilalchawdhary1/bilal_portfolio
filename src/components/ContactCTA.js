import Link from "next/link";

const ContactCTA = () => (
  <section
    aria-labelledby='contact-cta-heading'
    className='band mx-auto w-full max-w-7xl px-8 py-16 sm:px-5 sm:py-12'
  >
    <div
      data-scroll-reveal
      className='surface-card rounded-3xl border p-8 sm:p-6'
    >
      <div className='flex items-end justify-between gap-8 md:flex-col md:items-start md:gap-5'>
        <div className='max-w-2xl'>
          <p className='eyebrow'>Have a product problem?</p>
          <h2
            id='contact-cta-heading'
            className='text-balance text-3xl font-semibold tracking-tight sm:text-2xl'
          >
            Let’s make the next idea useful.
          </h2>
          <p className='mt-3 text-sm leading-6 text-dark/70 dark:text-light/70'>
            Share what you’re building—from an AI feature or chatbot to a Python
            backend—and we can talk through a practical next step.
          </p>
        </div>
        <div className='flex shrink-0 flex-wrap gap-3'>
          <Link href='/contact/' className='btn btn-primary'>
            Start a conversation
          </Link>
          <Link href='/projects/' className='btn btn-ghost'>
            View projects
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ContactCTA;
