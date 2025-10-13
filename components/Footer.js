"use client";

import {motion} from "framer-motion";
import {Github, Linkedin, Mail, Heart} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/bilalchawdhary1",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/muhammad-bilal-dev",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:chbilalc627@gmail.com",
      icon: Mail,
    },
  ];

  const quickLinks = [
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
  };

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className='space-y-4'
          >
            <div className='flex items-center space-x-2'>
              <span className='text-2xl font-bold text-indigo-400'>MB</span>
              <span className='text-xl font-semibold'>Muhammad Bilal</span>
            </div>
            <p className='text-gray-400 leading-relaxed'>
              Full Stack Developer passionate about creating exceptional web
              experiences with modern technologies and clean code.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    link.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  whileHover={{scale: 1.1, y: -2}}
                  whileTap={{scale: 0.9}}
                  className='w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-300'
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1}}
            className='space-y-4'
          >
            <h3 className='text-lg font-semibold'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{x: 5}}
                    className='text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-left'
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className='space-y-4'
          >
            <h3 className='text-lg font-semibold'>Get In Touch</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <Mail size={18} className='text-indigo-400' />
                <a
                  href='mailto:chbilalc627@gmail.com'
                  className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                >
                  chbilalc627@gmail.com
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-4 h-4 bg-indigo-400 rounded-full'></div>
                <span className='text-gray-400'>Lahore, Pakistan</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.3}}
          className='border-t border-gray-800 mt-8 pt-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex items-center space-x-2 text-gray-400'>
              <span>© {currentYear} Muhammad Bilal — All Rights Reserved</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-400'>
              <span>Made with</span>
              <motion.div
                animate={{scale: [1, 1.2, 1]}}
                transition={{duration: 1, repeat: Infinity}}
              >
                <Heart size={16} className='text-red-500' />
              </motion.div>
              <span>in Lahore, Pakistan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
