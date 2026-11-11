import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Image from "next/image";
import Link from "next/link";
import {useInView, useMotionValue, useSpring} from "framer-motion";
import {useEffect, useRef} from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import {GithubIcon} from "@/components/Icons";
import {DevIcon} from "@/components/Icons";

import proj1 from "/public/images/projects/clay-theme.jpg";

function AnimatedNumberFramerMotion({value}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once: true});
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", latest => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <SEO
        title='Clay Gatsby Theme | Muhammad Bilal'
        description='An overview of the Clay Gatsby theme and its original project resources.'
        canonicalUrl='https://travislord.xyz/projects/clay-gatsby-theme'
        noIndex
      />

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className='pt-16'>
          <AnimatedText
            text='Clay - Gatsby Theme'
            className='mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />

          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div
              className='col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8'
            >
              <h2 className='mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75'>
                Unlocking the Power of Gatsby v5+ & NetlifyCMS with Clay Theme.
              </h2>
              <h3 className='mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark'>
                Content | Web Design | UX/UI | Development
              </h3>
              <div classNname='w-full border-2 border-solid border-light bg-light'></div>
              <p className=''>
                I am thrilled to share some exciting news with the web
                development community! I have recently launched a cutting-edge
                Gatsby Framework Template called Clay, meticulously crafted to
                seamlessly integrate with Netlify CMS, providing an effortless
                and efficient solution for content management in the realm of
                web development.
              </p>
              <h4 className='mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75'>
                Unleashing the Power of Gatsby Framework
              </h4>
              <p className='my-4'>
                At the heart of Clay lies the robust Gatsby Framework. This
                innovative framework empowers developers to leverage the latest
                web technologies, including React, GraphQL, and Webpack. The
                outcome is nothing short of exceptional—Clay delivers
                lightning-fast, highly optimized websites, waving goodbye to the
                era of slow load times and ushering in an age of unparalleled
                performance.
              </p>

              <div className='mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8'>
                <Link
                  className='rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base'
                  aria-label='Visit Theme Demo'
                  href='https://clay-theme.netlify.app'
                  target={"_blank"}
                  rel='noopener noreferrer'
                >
                  Visit Demo
                </Link>
                <Link
                  href='https://github.com/lilxyzz/clay-theme'
                  target={"_blank"}
                  className='w-10'
                  rel='noopener noreferrer'
                  aria-label='View the original Clay Theme repository'
                >
                  <GithubIcon />
                </Link>
                <Link
                  href='https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn'
                  target={"_blank"}
                  className='w-10'
                  rel='noopener noreferrer'
                  aria-label='Read the Clay Theme article on DEV'
                >
                  <DevIcon />
                </Link>
              </div>
            </div>
            <div
              className='relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            '
            >
              <div
                className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  '
              />
              <Image
                className='h-auto w-full rounded-2xl'
                src={proj1}
                alt='Clay Gatsby Theme'
                sizes='(max-width: 639px) calc(100vw - 6.75rem),
              (max-width: 767px) calc(100vw - 8.25rem),
              (max-width: 1279px) calc((100vw - 16.5rem) / 2),
              31.75rem'
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
