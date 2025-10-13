"use client";

import {motion} from "framer-motion";
import {useInView} from "../hooks/useInView";
import ProjectCard from "./ProjectCard";
import {projects} from "../utils/data";

const Projects = () => {
  const {ref: inViewRef, isInView} = useInView({once: true, margin: "-100px"});

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section
      id='projects'
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
            Featured Projects
          </h2>
          <div className='w-24 h-1 bg-indigo-600 mx-auto mb-8'></div>
          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto'>
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional web experiences
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
          transition={{duration: 0.8, delay: 0.2}}
          className='grid lg:grid-cols-2 gap-8 mb-16'
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
              transition={{duration: 0.8, delay: 0.4}}
              className='text-center mb-12'
            >
              <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                Other Projects
              </h3>
              <p className='text-lg text-gray-600 dark:text-gray-200'>
                Additional projects that demonstrate my versatility and growth
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
              transition={{duration: 0.8, delay: 0.6}}
              className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'
            >
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
          transition={{duration: 0.8, delay: 0.8}}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Interested in Working Together?
            </h3>
            <p className='text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
              I'm always excited to take on new challenges and create amazing
              projects. Let's discuss how we can bring your ideas to life!
            </p>
            <motion.a
              href='#contact'
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className='inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500'
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
