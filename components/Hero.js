"use client";

import {motion} from "framer-motion";
import {ArrowDown, Github, Linkedin, Mail} from "lucide-react";

const Hero = () => {
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-24'
    >
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900'></div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className='absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className='absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'
          >
            Hi, I'm{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
              Muhammad Bilal
            </span>
          </motion.h1>

          <motion.h2
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4}}
            className='text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium'
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.6}}
            className='text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed'
          >
            I create modern, scalable web applications with React, Next.js,
            Node.js, and MongoDB. Passionate about building exceptional user
            experiences and solving complex problems.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.8}}
            className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-16'
          >
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              onClick={() => scrollToSection("#projects")}
              className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500'
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              onClick={() => scrollToSection("#contact")}
              className='border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:border-indigo-500 dark:text-indigo-400'
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 1}}
            className='flex items-center justify-center space-x-6'
          >
            <motion.a
              href='https://github.com/bilalchawdhary1'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{scale: 1.2, y: -5}}
              whileTap={{scale: 0.9}}
              className='text-gray-600 hover:text-indigo-600 transition-colors duration-300'
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href='https://linkedin.com/in/muhammad-bilal-dev'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{scale: 1.2, y: -5}}
              whileTap={{scale: 0.9}}
              className='text-gray-600 hover:text-indigo-600 transition-colors duration-300'
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href='mailto:chbilalc627@gmail.com'
              whileHover={{scale: 1.2, y: -5}}
              whileTap={{scale: 0.9}}
              className='text-gray-600 hover:text-indigo-600 transition-colors duration-300'
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 1.5}}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <motion.button
            animate={{y: [0, 10, 0]}}
            transition={{duration: 2, repeat: Infinity}}
            onClick={() => scrollToSection("#about")}
            className='text-gray-400 hover:text-indigo-600 transition-colors duration-300'
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
