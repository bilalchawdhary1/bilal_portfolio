import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Riley.png";
import {useInView, useMotionValue, useSpring} from "framer-motion";
import {useEffect, useRef} from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import {HireMe2} from "@/components/HireMe2";

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
      <Head>
        <title>About Muhammad Bilal</title>
        <meta
          name='description'
          content='Muhammad Bilal, A open-source portfolio theme built with Nextjs'
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className='pt-16'>
          <AnimatedText
            text='Code with Passion. Create with Purpose 🔥'
            className='mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />

          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                BIOGRAPHY
              </h2>
              <p className='font-medium'>
                I'm Bilal, a passionate Full Stack Developer dedicated to
                building modern, responsive, and high-performance web
                applications. As a freelancer, I specialize in crafting clean,
                scalable, and user-friendly digital experiences using React.js,
                Next.js, Node.js, Express.js, and MongoDB.
              </p>
              <p className='my-4 font-medium'>
                Over the past few years, I've had the opportunity to collaborate
                with clients worldwide on a variety of projects — including
                eCommerce stores, business dashboards, and portfolio websites.
                Some of my notable works include StyleNest (E-Commerce
                Platform), Ads Analytica (Agency Website), and the Oman Client
                Dashboard built with the MERN stack.
              </p>
              <p className='my-4 font-medium'>
                I’m always excited to explore new technologies, refine my
                skills, and turn ideas into real-world solutions that make an
                impact.
              </p>
              <p className='my-4 font-medium'>
                P.S. I’m a huge tech enthusiast — and sometimes, a little
                obsessed with clean UI ✌️.
              </p>
            </div>

            <div
              className='relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
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
                className='h-auto w-full rounded-2xl border-2 border-solid border-dark'
                priority={true}
                src={profile}
                alt='Bilal Chawdhary'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
            <div
              className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3'
            >
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumberFramerMotion value={1261} />+
                </span>
                <h3
                  className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  Days of Coding
                </h3>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumberFramerMotion value={150} />
                </span>
                <h3
                  className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  Bugs Made
                </h3>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumberFramerMotion value={99} />
                </span>
                <h3
                  className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  Bugs Crushed
                </h3>
              </div>
            </div>
            <HireMe2 />
          </div>

          <Skills />
        </Layout>
      </main>
    </>
  );
}
