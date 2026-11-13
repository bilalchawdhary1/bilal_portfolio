import {motion} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MotionLink = motion.create(Link);

const Logo = () => {
  return (
    <MotionLink
      href='/'
      aria-label='Muhammad Bilal home'
      className='group inline-flex items-center gap-3 rounded-md'
      whileTap={{scale: 0.98}}
    >
      <span className='flex h-10 w-10 items-center justify-center rounded-full bg-dark dark:bg-light'>
        <Image
          src='/mg.png'
          alt=''
          width={32}
          height={32}
          sizes='32px'
          className='h-8 w-8 rounded-full object-contain p-1'
        />
      </span>
      <span className='text-sm font-bold tracking-tight text-dark dark:text-light'>
        Muhammad Bilal
      </span>
    </MotionLink>
  );
};

export default Logo;
