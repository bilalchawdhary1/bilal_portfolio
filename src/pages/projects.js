import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import Link from "next/link";
import aiMockImage from "../../public/images/projects/AI_Mock.png";
import mentraImage from "../../public/images/projects/Mentra.png";
import styleNestImage from "../../public/images/projects/StyleNest.png";
import sharpBuildImage from "../../public/images/projects/SharpBuild.png";

const projectActionClassName =
  "inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-dark/20 px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light/20 dark:hover:border-primaryDark dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark dark:focus-visible:ring-offset-dark";

const supportingProjects = [
  {
    id: "mentra",
    title: "Mentra",
    category: "Tutorial-based voice AI learning",
    summary:
      "A tutorial-based voice learning platform with AI tutors, bookmarks, and recent sessions.",
    image: {
      src: mentraImage,
      alt: "Illustration of a voice-learning dashboard with tutor and microphone controls",
    },
    tagsLabel: "Technologies",
    tags: ["Next.js", "TypeScript", "Vapi", "Clerk", "Supabase"],
    links: [
      {
        href: "https://github.com/bilalchawdhary1/Mentra",
        label: "View source",
      },
    ],
  },
  {
    id: "ai-mock-interview-platform",
    title: "AI Mock Interview Platform",
    category: "AI interview practice",
    summary:
      "Practice mock interviews with AI, then use smart suggestions and a readiness score to identify what to work on next.",
    image: {
      src: aiMockImage,
      alt: "Illustration of an interview dashboard with candidate video and readiness score",
    },
    tagsLabel: "Highlights",
    tags: [
      "AI mock interviews",
      "Next.js",
      "Question bank",
      "Smart suggestions",
      "Readiness score",
    ],
    links: [
      {
        href: "/images/projects/AI_Mock.png",
        label: "View preview",
      },
    ],
  },
  {
    id: "stylenest",
    title: "StyleNest",
    category: "E-commerce web application",
    summary:
      "A fashion and lifestyle storefront centered on product discovery, category browsing, and new arrivals.",
    image: {
      src: styleNestImage,
      alt: "Illustration of a fashion storefront with a campaign model and product grid",
    },
    tagsLabel: "Highlights",
    tags: [
      "E-commerce",
      "Product catalog",
      "Category browsing",
      "New arrivals",
      "Vercel",
    ],
    links: [
      {
        href: "https://style-nest-com.vercel.app/",
        label: "View live project",
      },
      {
        href: "https://github.com/bilalchawdhary1/StyleNest.com",
        label: "View source",
      },
    ],
  },
];

const ProjectCard = ({project}) => (
  <article
    id={project.id}
    data-scroll-reveal
    className='surface-card surface-card-interactive group flex h-full flex-col overflow-hidden rounded-2xl border'
  >
    {project.image && (
      <div className='relative aspect-[16/10] overflow-hidden border-b border-dark/10 bg-[#f3f5f9] dark:border-light/10 dark:bg-[#171c25]'>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-[1.025]'
          sizes='(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc((100vw - 5rem) / 2), 38rem'
        />
      </div>
    )}

    <div className='flex flex-1 flex-col p-6 sm:p-5'>
      <div>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary dark:text-primaryDark'>
          {project.category}
        </p>
        <h3 className='text-xl font-semibold leading-snug tracking-tight'>
          {project.title}
        </h3>
        <p className='mt-3 text-sm leading-6 text-dark/70 dark:text-light/70'>
          {project.summary}
        </p>
      </div>

      {project.tags?.length > 0 && (
        <ul
          aria-label={`${project.title} ${project.tagsLabel}`}
          className='mt-4 flex flex-wrap gap-1.5'
        >
          {project.tags.map(tag => (
            <li key={tag} className='chip'>
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className='mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-4'>
        {project.links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${link.label} for ${project.title}`}
            className={projectActionClassName}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </article>
);

const SharpBuildProject = () => (
  <article
    id='sharpbuild-ai-website-assistant'
    data-scroll-reveal
    className='surface-card overflow-hidden rounded-[1.75rem] border'
  >
    <div className='grid grid-cols-[minmax(0,1.3fr)_minmax(250px,0.7fr)] gap-8 p-8 lg:grid-cols-1 sm:p-5'>
      <div>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary dark:text-primaryDark'>
          Featured · Retrieval-backed AI
        </p>
        <h2 className='text-balance text-3xl font-semibold tracking-tight sm:text-2xl'>
          SharpBuild AI Website Assistant
        </h2>
        <p className='mt-4 max-w-3xl text-sm leading-7 text-dark/70 dark:text-light/70'>
          A website knowledge assistant that answers from published content,
          links answers to their sources, streams responses, and offers a human
          contact path when the available information is not enough.
        </p>
        <div
          className='mt-6 flex flex-wrap gap-2'
          aria-label='Technology stack'
        >
          {["FastAPI", "Gemini", "PostgreSQL", "pgvector", "Next.js"].map(
            technology => (
              <span key={technology} className='chip chip-lg'>
                {technology}
              </span>
            ),
          )}
        </div>
      </div>

        <div className='flex flex-col justify-center gap-4 rounded-2xl border border-dark/5 bg-light/75 p-4 dark:border-light/5 dark:bg-[#151a23]/75 sm:p-5'>
        <div className='relative aspect-[16/10] overflow-hidden rounded-xl'>
          <Image
            src={sharpBuildImage}
            alt='Illustration of a website assistant with grounded chat and source citations'
            fill
            className='object-cover'
            sizes='(max-width: 1023px) 100vw, 30vw'
          />
        </div>
        <div className='px-1 pb-1'>
          <p className='text-xs font-bold uppercase tracking-[0.16em] text-dark/55 dark:text-light/55'>
            System at a glance
          </p>
          <p className='mt-3 text-sm leading-6 text-dark/75 dark:text-light/75'>
            A focused retrieval pipeline keeps answers tied to the website’s
            indexed material.
          </p>
          <Link
            href='https://github.com/bilalchawdhary1/SharpBuild-AI-Website-Assistant'
            target='_blank'
            rel='noopener noreferrer'
            className={`${projectActionClassName} mt-5`}
          >
            Explore the public repository
          </Link>
        </div>
      </div>
    </div>

    <div className='border-t border-dark/10 px-8 py-7 dark:border-light/10 sm:px-5'>
      <h3 className='mb-5 text-lg font-semibold'>How the answer is grounded</h3>
      <ol className='grid grid-cols-4 gap-3 xl:grid-cols-2 md:grid-cols-1'>
        {[
          {
            step: "01",
            title: "Prepare content",
            detail:
              "Crawl, clean, and split site pages into section-aware chunks.",
          },
          {
            step: "02",
            title: "Index knowledge",
            detail:
              "Create Gemini embeddings and store them with page metadata.",
          },
          {
            step: "03",
            title: "Retrieve context",
            detail: "Search PostgreSQL with pgvector and filter weak matches.",
          },
          {
            step: "04",
            title: "Answer with sources",
            detail:
              "Generate a grounded reply with citations and optional SSE streaming.",
          },
        ].map(item => (
          <li
            key={item.step}
            className='rounded-xl border border-dark/10 p-4 dark:border-light/10'
          >
            <p className='font-mono text-xs font-semibold tracking-widest text-primary dark:text-primaryDark'>
              {item.step}
            </p>
            <h4 className='mt-3 text-sm font-semibold'>{item.title}</h4>
            <p className='mt-2 text-sm leading-6 text-dark/65 dark:text-light/65'>
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </article>
);

export default function Projects() {
  return (
    <>
      <SEO
        title='Selected Projects | Muhammad Bilal'
        description='Explore Muhammad Bilal’s AI application, retrieval assistant, voice learning, and full-stack software projects.'
        path='/projects'
      />

      <TransitionEffect />
      <main className='text-dark dark:text-light'>
        <Layout className='!pb-20'>
          <header className='mb-10 max-w-3xl'>
            <p className='eyebrow'>Selected work</p>
            <h1 className='text-5xl font-semibold tracking-tight sm:text-4xl'>
              Software built around real product needs
            </h1>
            <p className='mt-4 text-base leading-7 text-dark/70 dark:text-light/70'>
              Practical AI applications, thoughtful integrations, and full-stack
              product work. Technical details are included where they can be
              verified in the public source.
            </p>
          </header>

          <ScrollReveal>
            <div className='space-y-6'>
              <SharpBuildProject />

              <section aria-labelledby='other-projects-heading'>
                <div className='mb-5 pt-7' data-scroll-reveal>
                  <p className='eyebrow'>More selected work</p>
                  <h2
                    id='other-projects-heading'
                    className='text-2xl font-semibold tracking-tight'
                  >
                    Learning, interview practice, and commerce products
                  </h2>
                </div>

                <div className='grid grid-cols-3 gap-4 lg:grid-cols-1'>
                  {supportingProjects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>
            </div>
          </ScrollReveal>

          <div className='mt-12 flex flex-wrap gap-3'>
            <Link
              href='/contact/'
              className='inline-flex min-h-11 items-center justify-center rounded-lg border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition-colors hover:bg-transparent hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light'
            >
              Discuss a project
            </Link>
            <Link
              href='/about/'
              className='inline-flex min-h-11 items-center justify-center rounded-lg border border-dark/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-dark dark:border-light/20 dark:hover:border-light'
            >
              About me
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
}
