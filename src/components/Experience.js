import React, {useRef} from "react";
import {motion, useScroll} from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}{" "}
          <a
            className='capitalize text-slideGreen dark:text-primaryDark'
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className='relative w-[75%] mx-auto lg:w-[90%] md:w-full'>
        <motion.div
          className='absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl'
          style={{scaleY: scrollYProgress}}
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Full Stack Developer (Freelance)'
            company='Upwork & Fiverr'
            time='2022 - Present'
            address='Remote | Worldwide Clients'
            companyLink='https://github.com/bilalchawdhary1'
            work='As a freelance Full Stack Developer, I specialize in building modern, scalable, and responsive web applications for international clients. My expertise includes React.js, Next.js, Node.js, Express.js, and MongoDB, with a strong focus on clean UI and high-performance code. I’ve successfully delivered projects such as StyleNest (eCommerce store), Ads Analytica (agency site), GymVibe (fitness app), and an Oman client dashboard for business management. I’m passionate about creating impactful digital experiences that combine technical excellence with intuitive design.'
          />

          <Details
            position='Frontend Developer'
            company='Ads Analytica'
            time='2023 - 2025'
            address='Remote'
            companyLink='https://adsanalytica.com/'
            work='At Ads Analytica, I worked as a Frontend Developer where I was responsible for developing, optimizing, and maintaining client websites using Next.js, React.js, and Tailwind CSS. I collaborated with cross-functional teams to deliver visually appealing, SEO-friendly, and high-performing web applications. Some notable projects include Go-Invest, Ahtshamul Haq Portfolio, and the company’s official website built with Next.js.'
          />
          <Details
            position='Frontend Developer Intern'
            company='Gamca Cloud'
            time='2022 - 2023'
            address='Remote'
            companyLink='https://github.com/bilalchawdhary1'
            work='During my internship at Gamca Cloud, I focused on learning and implementing core front-end technologies, including HTML, CSS, JavaScript, and React.js. I built several small-scale projects that improved my understanding of responsive design, component-based development, and web application structure.'
          />
        </ul>
      </div>
      <div className='mt-40 flex items-center justify-between gap-3 grid-cols-2'>
        {/* <Link
          href='/projects/'
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link> */}
        {/* <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link> */}
      </div>
    </div>
  );
};

export default Experience;
