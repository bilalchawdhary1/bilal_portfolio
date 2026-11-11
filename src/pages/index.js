import Experience from "@/components/Experience";
import HeroVisual from "@/components/HeroVisual";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SEO
        title='AI Application Developer &amp; Python Backend Engineer | Muhammad Bilal'
        description='Muhammad Bilal builds practical AI applications, integrates LLMs, and develops reliable Python backend systems for businesses and startups.'
        path='/'
        person
      />

      <TransitionEffect />
      <main className='text-dark dark:text-light'>
        <Layout className='!py-8 sm:!py-6'>
          <section className='grid min-h-[calc(100svh-10rem)] grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] items-center gap-12 py-8 lg:min-h-0 lg:grid-cols-1 lg:gap-8 md:grid-cols-1 md:gap-10 md:py-10'>
            <div className='max-w-3xl'>
              <h1 className='hero-enter hero-enter-1 text-6xl font-bold leading-[1.05] tracking-[-0.045em] lg:text-5xl sm:text-4xl'>
                Muhammad Bilal
              </h1>
              <p className='hero-enter hero-enter-2 mt-4 text-xl font-medium leading-snug text-dark/75 dark:text-light/75 sm:text-lg'>
                <span>AI Application Developer</span>{" "}
                <span
                  aria-hidden='true'
                  className='px-2 text-primary/50 dark:text-primaryDark/60'
                >
                  |
                </span>{" "}
                <span>Python Backend Engineer</span>
              </p>
              <p className='hero-enter hero-enter-3 mt-6 max-w-xl text-lg leading-8 text-dark/70 dark:text-light/70 md:text-base md:leading-7'>
                I build AI-powered applications, intelligent chatbots, and
                scalable backend systems that solve real business problems.
              </p>
              <div className='hero-enter hero-enter-4 mt-8 flex flex-wrap items-center gap-3'>
                <Link
                  href='/projects/'
                  className='inline-flex min-h-12 items-center justify-center rounded-lg border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition-[transform,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-transparent hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:focus-visible:ring-primaryDark dark:focus-visible:ring-offset-dark'
                >
                  View My Work
                </Link>
                <Link
                  href='/contact/'
                  className='inline-flex min-h-12 items-center justify-center rounded-lg border border-dark/20 px-5 py-3 text-sm font-semibold text-dark transition-[transform,background-color,color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-dark hover:bg-dark hover:text-light hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light/20 dark:text-light dark:hover:border-light dark:hover:bg-light dark:hover:text-dark dark:focus-visible:ring-primaryDark dark:focus-visible:ring-offset-dark'
                >
                  Let&apos;s Discuss Your Project
                </Link>
              </div>
              <div
                role='group'
                aria-label='Professional profiles'
                className='hero-enter hero-enter-5 mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'
              >
                <a
                  href='https://www.linkedin.com/in/bilal-fullstack'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center rounded-md text-dark/65 underline decoration-dark/25 underline-offset-4 transition-[transform,color] duration-200 hover:-translate-y-0.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-light/65 dark:decoration-light/25 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark dark:focus-visible:ring-offset-dark'
                >
                  LinkedIn
                </a>
                <a
                  href='https://github.com/bilalchawdhary1'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center rounded-md text-dark/65 underline decoration-dark/25 underline-offset-4 transition-[transform,color] duration-200 hover:-translate-y-0.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-light/65 dark:decoration-light/25 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark dark:focus-visible:ring-offset-dark'
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className='flex justify-center md:order-last'>
              <HeroVisual />
            </div>
          </section>
        </Layout>
        <ScrollReveal>
          <Services />
          <Skills />
          <Experience />
        </ScrollReveal>
      </main>
    </>
  );
}
