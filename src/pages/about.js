import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import profile from "../../public/images/profile/Riley.png";

const services = [
  "AI application development",
  "AI agent development",
  "AI chatbot development",
  "OpenAI API integration",
  "Google Gemini integration",
  "LLM integration and prompt engineering",
  "Python and FastAPI backend development",
  "REST API development",
  "PostgreSQL database integration",
  "Full-stack SaaS development",
  "AI workflow automation",
];

export default function About() {
  return (
    <>
      <SEO
        title='About Muhammad Bilal'
        description='Learn about Muhammad Bilal, an AI Application Developer and Python Backend Engineer building AI-powered products and reliable backend systems.'
        path='/about'
      />

      <TransitionEffect />
      <main className='text-dark dark:text-light'>
        <ScrollReveal>
          <Layout>
            <section className='grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] items-center gap-12 md:grid-cols-1 md:gap-8'>
              <div data-scroll-reveal>
                <p className='eyebrow'>About me</p>
                <h1 className='max-w-2xl text-balance text-5xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl'>
                  Practical AI. Reliable Python.
                </h1>
                <div className='mt-6 max-w-2xl space-y-4 text-base leading-7 text-dark/75 dark:text-light/75'>
                  <p>
                    I’m Muhammad Bilal, an AI Application Developer and Python
                    Backend Engineer. Since December 2022, I’ve worked as a
                    Freelance Full-Stack AI Developer.
                  </p>
                  <p>
                    I build practical AI-powered applications, integrate LLMs
                    into existing products, develop AI chatbots and intelligent
                    workflows, and build reliable Python backend systems.
                  </p>
                  <p>
                    My focus is on useful product outcomes: applying AI where it
                    helps, connecting it to existing systems, and building
                    dependable backend foundations.
                  </p>
                </div>
              </div>

              <div
                data-scroll-reveal
                className='surface-card mx-auto w-full max-w-sm rounded-[1.5rem] border p-3'
              >
                <Image
                  className='aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top'
                  src={profile}
                  alt='Muhammad Bilal'
                  sizes='(max-width: 767px) 80vw, 370px'
                />
              </div>
            </section>

            <section
              aria-labelledby='services-heading'
              className='mt-20 sm:mt-14'
            >
              <div className='mb-7 max-w-2xl' data-scroll-reveal>
                <p className='eyebrow'>How I can help</p>
                <h2
                  id='services-heading'
                  className='text-3xl font-semibold tracking-tight sm:text-2xl'
                >
                  Services
                </h2>
              </div>
              <ul
                data-scroll-reveal
                className='surface-card flex flex-wrap gap-2.5 rounded-2xl border p-6 sm:p-5'
              >
                {services.map(service => (
                  <li key={service} className='chip chip-lg'>
                    {service}
                  </li>
                ))}
              </ul>
            </section>
          </Layout>
          <Skills />
        </ScrollReveal>
      </main>
    </>
  );
}
