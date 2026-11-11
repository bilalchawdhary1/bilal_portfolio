import {motion} from "motion/react";

const TransitionEffect = () => {
  return (
    <motion.div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-[60] bg-light dark:bg-dark'
      initial={{opacity: 0.45}}
      animate={{opacity: 0}}
      exit={{opacity: 0.28}}
      transition={{duration: 0.28, ease: "easeOut"}}
    />
  );
};

export default TransitionEffect;
