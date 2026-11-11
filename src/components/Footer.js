import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className='w-full border-t border-dark/10 dark:border-white/[0.06]'>
      <Layout className='!py-6'>
        <div className='flex items-center justify-between gap-3 text-sm text-dark/65 dark:text-light/65 sm:flex-col sm:items-start'>
          <span>&copy; {new Date().getFullYear()} Muhammad Bilal</span>
          <Link
            href='https://github.com/bilalchawdhary1'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-md underline decoration-dark/25 underline-offset-4 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:decoration-light/25 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark'
          >
            GitHub
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
