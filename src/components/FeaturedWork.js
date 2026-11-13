import Image from "next/image";
import Link from "next/link";
import mentraImage from "../../public/images/projects/Mentra.png";
import mockInterviewImage from "../../public/images/projects/AI_Mock.png";
import styleNestImage from "../../public/images/projects/StyleNest.png";

const pipeline = ["Crawl", "Index", "Retrieve", "Answer"];

const work = [
  {
    slug: "sharpbuild-ai-website-assistant",
    title: "SharpBuild AI Website Assistant",
    label: "Retrieval-backed AI assistant",
    description:
      "Answers questions from published website content, with source links and a human contact path when more help is needed.",
    tags: ["FastAPI", "Gemini", "PostgreSQL", "pgvector", "Next.js"],
  },
  {
    slug: "mentra",
    title: "Mentra",
    label: "Tutorial-based voice AI learning",
    description:
      "A voice-learning platform with AI tutors, bookmarks, and recent sessions.",
    image: mentraImage,
    alt: "Mentra project preview",
    tags: ["Next.js", "TypeScript", "Vapi", "Clerk", "Supabase"],
  },
  {
    slug: "ai-mock-interview-platform",
    title: "AI Mock Interview Platform",
    label: "AI interview practice",
    description:
      "Practice interview questions, review performance, and turn feedback into a readiness score.",
    image: mockInterviewImage,
    alt: "AI Mock Interview Platform preview",
    tags: ["AI mock interviews", "Question bank", "Smart suggestions"],
  },
  {
    slug: "stylenest",
    title: "StyleNest",
    label: "E-commerce platform",
    description:
      "A fashion and lifestyle storefront with product discovery and category browsing.",
    image: styleNestImage,
    alt: "StyleNest project preview",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
  },
];

const PipelinePanel = () => (
  <div
    aria-hidden='true'
    className='flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-dark/10 bg-dark/[0.025] px-4 dark:border-light/10 dark:bg-light/[0.03]'
  >
    <ol className='flex items-center gap-2 font-mono text-[0.72rem] font-medium text-dark/70 dark:text-light/70'>
      {pipeline.map((step, index) => (
        <li key={step} className='flex items-center gap-2'>
          <span className='rounded-md border border-dark/15 bg-white px-2.5 py-1.5 dark:border-light/15 dark:bg-card'>
            {step}
          </span>
          {index < pipeline.length - 1 && (
            <span className='text-primary dark:text-primaryDark'>→</span>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const FeaturedWork = () => (
  <section
    aria-labelledby='featured-work-heading'
    className='band mx-auto w-full max-w-7xl px-8 py-16 sm:px-5 sm:py-12'
  >
    <div
      className='mb-10 flex flex-wrap items-end justify-between gap-4'
      data-scroll-reveal
    >
      <div>
        <p className='eyebrow'>Selected work</p>
        <h2
          id='featured-work-heading'
          className='text-balance text-3xl font-semibold tracking-tight sm:text-2xl'
        >
          Things I have built
        </h2>
      </div>
      <Link
        href='/projects/'
        className='inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-semibold text-primary transition-colors hover:text-dark focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-primaryDark dark:hover:text-light dark:focus-visible:ring-primaryDark'
      >
        View all projects <span aria-hidden='true'>→</span>
      </Link>
    </div>

    <ul className='grid grid-cols-2 gap-5 lg:grid-cols-1'>
      {work.map(item => (
        <li key={item.title} data-scroll-reveal className='flex'>
          <Link
            href={`/projects/#${item.slug}`}
            aria-label={`Read the ${item.title} project details`}
            className='surface-card surface-card-interactive accent-card flex w-full flex-col rounded-2xl border focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-primaryDark'
          >
            {item.image ? (
              <div className='aspect-[16/10] overflow-hidden border-b border-dark/10 dark:border-light/10'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className='h-full w-full object-cover'
                  sizes='(max-width: 1023px) 100vw, 50vw'
                />
              </div>
            ) : (
              <PipelinePanel />
            )}
            <div className='flex flex-1 flex-col p-5'>
              <p className='eyebrow !mb-2'>{item.label}</p>
              <h3 className='text-lg font-semibold tracking-tight'>
                {item.title}
              </h3>
              <p className='mt-2 text-sm leading-6 text-dark/70 dark:text-light/70'>
                {item.description}
              </p>
              <ul
                aria-label={`${item.title} highlights`}
                className='mt-auto flex flex-wrap gap-1.5 pt-5'
              >
                {item.tags.map(tag => (
                  <li key={tag} className='chip'>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default FeaturedWork;
