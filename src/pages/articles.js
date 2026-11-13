import {motion, useMotionValue} from "motion/react";
import SEO from "@/components/SEO";
import Image from "next/image";
import blog1 from "../../public/images/articles/Clay-Gatsby-theme.webp";
import blog2 from "../../public/images/articles/My-MacBook-Setup-For-Development-2024.webp";
import loading from "../../public/images/articles/GTA6-VICE.webp";

import Layout from "@/components/Layout";
import Link from "next/link";
import {useRef} from "react";
import TransitionEffect from "@/components/TransitionEffect";
import {HireMe2} from "@/components/HireMe2";

const FramerImage = motion.create(Image);

const MovingImg = ({title, img, link}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    if (!imgRef.current) return;
    imgRef.current.style.display = "inline-block";
    x.set(event.clientX + 16);
    y.set(event.clientY + 16);
  }

  function handleMouseLeave() {
    if (imgRef.current) imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        rel='noopener noreferrer'
        className='relative'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className='capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start'>
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className='fixed left-0 top-0 z-30 hidden h-auto w-72 rounded-xl border border-dark/10 shadow-2xl shadow-dark/20 md:!hidden dark:border-light/15'
          initial={{opacity: 0}}
          whileInView={{opacity: 1, transition: {duration: 0.2}}}
          style={{
            x: x,
            y: y,
          }}
          sizes='(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw'
        />
      </Link>
    </>
  );
};

const Article = ({img, title, date, link}) => {
  return (
    <motion.li
      initial={{opacity: 0, y: 18}}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {duration: 0.42, ease: "easeOut"},
      }}
      viewport={{once: true}}
      className='surface-card surface-card-interactive relative my-2 flex w-full items-center justify-between rounded-2xl border p-5 text-dark first:mt-0 sm:flex-col sm:items-start sm:gap-3 dark:text-light'
    >
      <MovingImg img={img} title={title} link={link} />
      <span className='min-w-max pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
  priority = false,
}) => {
  return (
    <li className='surface-card surface-card-interactive relative col-span-1 w-full rounded-2xl border p-4'>
      <Link
        href={link}
        target={"_blank"}
        rel='noopener noreferrer'
        className='inline-block w-full overflow-hidden rounded-xl'
      >
        <FramerImage
          src={img}
          alt={title}
          className='h-64 w-full object-cover sm:h-52'
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3, ease: "easeOut"}}
          sizes='(max-width: 639px) calc(100vw - 4.5rem),
            (max-width: 767px) calc(100vw - 6rem),
            (max-width: 1279px) calc((100vw - 12rem) / 2),
            34rem'
          priority={priority}
        />
      </Link>

      <Link href={link} target={"_blank"} rel='noopener noreferrer'>
        <h2 className='my-2 mt-4 text-xl font-bold leading-snug hover:text-primary dark:hover:text-primaryDark xs:text-lg'>
          {title}
        </h2>
      </Link>
      <p className='mb-3 text-sm leading-6 text-dark/70 dark:text-light/70'>
        {summary}
      </p>
      <span className='text-sm font-semibold text-primary dark:text-primaryDark'>
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <SEO
        title='Articles and Resources | Muhammad Bilal'
        description='Selected web development articles and reading resources.'
        path='/articles'
      />
      <TransitionEffect />
      <main className='mb-16 flex w-full flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <header className='mb-12 max-w-3xl sm:mb-8'>
            <p className='eyebrow'>Writing</p>
            <h1 className='text-balance text-5xl font-semibold tracking-tight sm:text-4xl'>
              Articles
            </h1>
            <p className='mt-4 text-base leading-7 text-dark/70 dark:text-light/70'>
              Selected web development articles and reading resources.
            </p>
          </header>
          <ul className='grid grid-cols-2 gap-6 lg:gap-5 md:grid-cols-1'>
            <FeaturedArticle
              img={blog1}
              title='Unlocking the Power of Gatsby & Netlify'
              time='2 min read'
              summary='Image-centric Gatsby theme for publishers, portfolio, photographers blogs and more.'
              link='https://travislord.xyz/articles/guide-to-clay-theme-gatsby-web-app'
              priority
            />

            <FeaturedArticle
              img={blog2}
              title='My MacBook Setup For Development 2024'
              time='4 min read'
              summary="As we step into another year of exciting journeys, I figured it was the perfect moment to unveil the newest adjustments and tools I'm using in my MacBook setup."
              link='https://travislord.xyz/articles/top-macbook-setup-tips-for-2024'
            />
          </ul>

          <h2 className='mb-8 mt-20 w-full text-3xl font-semibold tracking-tight sm:mt-14 sm:text-2xl'>
            All Articles
          </h2>

          <ul className='relative flex flex-col items-center'>
            <Article
              title='Adding more soon, thanks for the interest!'
              img={loading}
              time='1 min read'
              date=''
              link='https://github.com/bilalchawdhary1/'
            />
          </ul>

          <div className='mt-6 flex flex-wrap items-center gap-3'>
            <Link
              href='/about/'
              target={"_self"}
              className='inline-flex min-h-11 items-center rounded-lg border border-dark/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light/20 dark:hover:border-primaryDark dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark'
            >
              Get To Know Me
            </Link>
            <Link
              href='/projects/'
              target={"_self"}
              className='inline-flex min-h-11 items-center rounded-lg border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition-colors hover:bg-transparent hover:text-dark focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:focus-visible:ring-primaryDark'
            >
              View Projects
            </Link>
          </div>
          <HireMe2 />
        </Layout>
      </main>
    </>
  );
}
