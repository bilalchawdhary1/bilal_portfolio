"use client";

import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {Menu, X, Github, Linkedin, Mail} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
  ];

  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{y: -100}}
      animate={{y: 0}}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/70 dark:border-gray-800/70"
          : "bg-transparent"
      }`}
    >
      <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center p-6 m-7 h-16'>
          {/* Logo */}
          <motion.div whileHover={{scale: 1.05}} className='flex-shrink-0'>
            <span className='text-2xl font-bold text-indigo-600'>MB</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navItems.map(item => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className='text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 rounded-md'
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links - Desktop */}
          <div className='hidden md:flex items-center space-x-4'>
            <motion.a
              href='https://github.com/bilalchawdhary1'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className='text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 rounded-md'
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href='https://linkedin.com/in/muhammad-bilal-dev'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className='text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 rounded-md'
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href='mailto:chbilalc627@gmail.com'
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className='text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 rounded-md'
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <motion.button
              whileTap={{scale: 0.95}}
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            className='md:hidden'
          >
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/60 dark:border-gray-800/60'>
              {navItems.map(item => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className='text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 rounded-md'
                >
                  {item.name}
                </motion.button>
              ))}
              <div className='flex items-center space-x-4 pt-4 border-t border-gray-200'>
                <motion.a
                  href='https://github.com/bilalchawdhary1'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className='text-gray-600 hover:text-indigo-600 transition-colors duration-200'
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href='https://linkedin.com/in/muhammad-bilal-dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className='text-gray-600 hover:text-indigo-600 transition-colors duration-200'
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href='mailto:chbilalc627@gmail.com'
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className='text-gray-600 hover:text-indigo-600 transition-colors duration-200'
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
