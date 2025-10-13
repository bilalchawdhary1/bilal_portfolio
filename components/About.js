"use client";

import {motion} from "framer-motion";
import {useInView} from "../hooks/useInView";
import {MapPin, Calendar, Code, Users} from "lucide-react";

const About = () => {
  const {ref: inViewRef, isInView} = useInView({once: true, margin: "-100px"});

  const stats = [
    {icon: Code, label: "Projects Completed", value: "50+"},
    {icon: Users, label: "Happy Clients", value: "25+"},
    {icon: Calendar, label: "Years Experience", value: "3+"},
  ];

  return (
    <section
      id='about'
      className='py-24 md:py-28 bg-white dark:bg-gray-950 scroll-mt-24 border-t border-gray-200 dark:border-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={inViewRef}
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
          transition={{duration: 0.8}}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            About Me
          </h2>
          <div className='w-24 h-1 bg-indigo-600 mx-auto mb-8'></div>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto'>
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
            transition={{duration: 0.8, delay: 0.2}}
            className='space-y-8 px-2 sm:px-0'
          >
            {/* Profile Image Placeholder */}
            <div className='relative'>
              <div className='w-80 h-80 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center'>
                <div className='w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl flex items-center justify-center'>
                  <span className='text-6xl font-bold text-indigo-600'>MB</span>
                </div>
              </div>
              <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center'>
                <Code className='text-white' size={32} />
              </div>
            </div>

            {/* Location */}
            <div className='flex items-center justify-center space-x-2 text-gray-600'>
              <MapPin size={20} />
              <span className='text-lg'>Lahore, Pakistan</span>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
            transition={{duration: 0.8, delay: 0.4}}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Full Stack Developer & Problem Solver
              </h3>
              <p className='text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6'>
                I'm a passionate Full Stack Developer with expertise in modern
                web technologies. I specialize in creating scalable, performant
                applications using React, Next.js, Node.js, and MongoDB. My goal
                is to build solutions that not only meet requirements but exceed
                expectations.
              </p>
              <p className='text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed'>
                With a strong foundation in both frontend and backend
                development, I bring ideas to life through clean, efficient code
                and intuitive user experiences. I'm always eager to learn new
                technologies and take on challenging projects.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8'>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{opacity: 0, y: 20}}
                  animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                  transition={{duration: 0.6, delay: 0.6 + index * 0.1}}
                  className='text-center'
                >
                  <div className='w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                    <stat.icon className='text-indigo-600' size={24} />
                  </div>
                  <div className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-600 dark:text-gray-300'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.6, delay: 0.9}}
              className='pt-6'
            >
              <motion.a
                href='/Muhammad Bilal Dev.pdf'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className='inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500'
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
