import { motion } from "framer-motion";
import React from "react";

const heading = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.04},
  },
};

const word = {
  hidden: {opacity: 0, y: 12},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.35},
  },
};

const AnimatedText = ({text, className = ""}) => (
  <div className='w-full overflow-hidden'>
    <motion.h1
      className={`w-full text-center text-5xl font-bold leading-tight tracking-tight text-dark dark:text-light ${className}`}
      variants={heading}
      initial='hidden'
      animate='visible'
    >
      {text.split(/\s+/).map((part, index) => (
        <motion.span
          className='inline-block'
          key={`${part}-${index}`}
          variants={word}
        >
          {part}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  </div>
);

export default AnimatedText;
