<<<<<<< HEAD
import {motion} from "framer-motion";
=======
import {motion} from "motion/react";
>>>>>>> 9a456ef6f43e89478a55f4a21ce148f56b7c0999

const TransitionEffect = () => {
  return (
    <motion.div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-[60]'
      style={{
        background:
          "linear-gradient(112deg, transparent 38%, rgba(84, 132, 218, 0.12) 50%, transparent 62%)",
      }}
      initial={{opacity: 0, x: "-12%"}}
      animate={{opacity: 1, x: "0%"}}
      exit={{opacity: 0, x: "12%"}}
      transition={{duration: 0.32, ease: "easeOut"}}
    />
  );
};

export default TransitionEffect;
