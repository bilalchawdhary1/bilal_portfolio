"use client";

import {motion} from "framer-motion";
import {useInView} from "../hooks/useInView";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Zap,
  Shield,
  GitBranch,
  Layers,
} from "lucide-react";

const Skills = () => {
  const {ref: inViewRef, isInView} = useInView({once: true, margin: "-100px"});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        {name: "React", level: 95},
        {name: "Next.js", level: 90},
        {name: "JavaScript", level: 95},
        {name: "TypeScript", level: 85},
        {name: "Tailwind CSS", level: 90},
        {name: "HTML5/CSS3", level: 95},
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        {name: "Node.js", level: 90},
        {name: "Express.js", level: 85},
        {name: "MongoDB", level: 88},
        {name: "REST APIs", level: 90},
        {name: "GraphQL", level: 75},
        {name: "JWT", level: 85},
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      skills: [
        {name: "Git", level: 90},
        {name: "Docker", level: 70},
        {name: "AWS", level: 75},
        {name: "Vercel", level: 85},
        {name: "Figma", level: 80},
        {name: "Postman", level: 85},
      ],
    },
  ];

  const techStack = [
    {name: "React", icon: "⚛️"},
    {name: "Next.js", icon: "▲"},
    {name: "Node.js", icon: "🟢"},
    {name: "MongoDB", icon: "🍃"},
    {name: "TypeScript", icon: "🔷"},
    {name: "Tailwind", icon: "🎨"},
    {name: "Express", icon: "🚀"},
    {name: "Git", icon: "📦"},
  ];

  return (
    <section
      id='skills'
      className='py-24 md:py-28 bg-gray-50 dark:bg-gray-950 scroll-mt-24 border-t border-gray-200 dark:border-gray-800'
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
            Skills & Technologies
          </h2>
          <div className='w-24 h-1 bg-indigo-600 mx-auto mb-8'></div>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto'>
            A comprehensive overview of my technical expertise and the tools I
            use to build amazing applications
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
          transition={{duration: 0.8, delay: 0.2}}
          className='flex flex-wrap justify-center gap-6 mb-16'
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{opacity: 0, scale: 0}}
              animate={
                isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0}
              }
              transition={{duration: 0.5, delay: 0.3 + index * 0.1}}
              whileHover={{scale: 1.1, y: -5}}
              className='flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800'
            >
              <span className='text-3xl mb-2'>{tech.icon}</span>
              <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className='grid lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{opacity: 0, y: 50}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
              transition={{duration: 0.8, delay: 0.4 + categoryIndex * 0.2}}
              className='bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800'
            >
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-4'>
                  <category.icon
                    className='text-indigo-600 dark:text-indigo-400'
                    size={24}
                  />
                </div>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  {category.title}
                </h3>
              </div>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{opacity: 0, x: -20}}
                    animate={
                      isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -20}
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className='space-y-2'
                  >
                    <div className='flex justify-between items-center'>
                      <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
                        {skill.name}
                      </span>
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2'>
                      <motion.div
                        initial={{width: 0}}
                        animate={
                          isInView ? {width: `${skill.level}%`} : {width: 0}
                        }
                        transition={{
                          duration: 1,
                          delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        className='bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full'
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
          transition={{duration: 0.8, delay: 1}}
          className='mt-16 text-center'
        >
          <div className='bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Always Learning & Growing
            </h3>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              I'm passionate about staying up-to-date with the latest
              technologies and best practices. Currently exploring advanced
              React patterns, microservices architecture, and cloud technologies
              to deliver even better solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
