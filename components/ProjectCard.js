"use client";

import {motion} from "framer-motion";
import {ExternalLink, Github, Star} from "lucide-react";

const ProjectCard = ({project, index}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: index * 0.1}}
      whileHover={{y: -10}}
      className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-800'
    >
      {/* Project Image */}
      <div className='relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 flex items-center justify-center'>
          <div className='text-6xl font-bold text-indigo-600 opacity-20'>
            {project.title.charAt(0)}
          </div>
        </div>
        {project.featured && (
          <div className='absolute top-4 right-4'>
            <div className='flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium'>
              <Star size={16} />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'>
          {project.title}
        </h3>

        <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className='px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex space-x-4'>
          <motion.a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className='flex-1 flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className='flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-700 hover:border-indigo-600 text-gray-700 dark:text-gray-300 hover:text-indigo-600 px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
