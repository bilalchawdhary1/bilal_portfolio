import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
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
          <section className='grid min-h-[calc(100svh-9.5rem)] grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] items-center gap-14 py-6 lg:min-h-0 lg:grid-cols-1 lg:gap-10 md:py-8'>
            <div className='max-w-xl'>
              <p className='eyebrow hero-enter hero-enter-1'>
                AI applications &amp; Python backends
              </p>
              <h1 className='hero-enter hero-enter-2 text-balance text-6xl font-semibold leading-[1.02] tracking-[-0.045em] xl:text-5xl sm:text-4xl'>
                Muhammad Bilal
              </h1>
              <p className='hero-enter hero-enter-3 mt-4 text-xl font-medium leading-snug tracking-[-0.02em] text-dark/75 dark:text-light/75 sm:text-lg'>
                AI Application Developer
                <span
                  aria-hidden='true'
                  className='px-2 text-dark/30 dark:text-light/30'
                >
                  /
                </span>
                Python Backend Engineer
              </p>
              <p className='hero-enter hero-enter-4 mt-6 max-w-lg text-lg leading-8 text-dark/70 dark:text-light/65 md:text-base md:leading-7'>
                I build AI-powered applications, intelligent chatbots, and
                Python backends that solve real product problems—LLM
                integrations, REST APIs, and data systems included.
              </p>
              <div className='hero-enter hero-enter-5 mt-8 flex flex-wrap items-center gap-3'>
                <Link href='/projects/' className='btn btn-primary'>
                  View My Work
                </Link>
                <Link href='/contact/' className='btn btn-ghost'>
                  Let&apos;s Discuss Your Project
                </Link>
              </div>
              <div
                role='group'
                aria-label='Professional profiles'
                className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'
              >
                <a
                  href='https://www.linkedin.com/in/bilal-fullstack'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center rounded-md text-dark/65 underline decoration-dark/20 underline-offset-4 transition-colors hover:text-primary dark:text-light/65 dark:decoration-light/20 dark:hover:text-primaryDark'
                >
                  LinkedIn
                </a>
                <a
                  href='https://github.com/bilalchawdhary1'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center rounded-md text-dark/65 underline decoration-dark/20 underline-offset-4 transition-colors hover:text-primary dark:text-light/65 dark:decoration-light/20 dark:hover:text-primaryDark'
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className='flex justify-center lg:justify-center'>
              <HeroVisual />
            </div>
          </section>
        </Layout>
        <ScrollReveal>
          <FeaturedWork />
          <Services />
          <Skills />
          <Experience />
          <CallToAction />
        </ScrollReveal>
      </main>
    </>
  );
}
