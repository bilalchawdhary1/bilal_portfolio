import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const navLinks = [
  {href: "/", label: "Home"},
  {href: "/about", label: "About"},
  {href: "/projects", label: "Projects"},
  {href: "/articles", label: "Articles"},
  {href: "/contact", label: "Contact"},
];

const externalLinks = [
  {href: "https://www.linkedin.com/in/bilal-fullstack", label: "LinkedIn"},
  {href: "https://github.com/bilalchawdhary1", label: "GitHub"},
  {href: "mailto:chbilalc627@gmail.com", label: "Email"},
];

const linkClass =
  "inline-flex min-h-11 items-center rounded-md transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark";

const Footer = () => {
  return (
    <footer className='w-full border-t border-dark/10 dark:border-white/[0.06]'>
      <Layout className='!py-8'>
        <div className='grid grid-cols-[1.2fr_1fr_1fr] gap-8 text-sm text-dark/70 dark:text-light/70 md:grid-cols-1 md:gap-4'>
          <div>
            <p className='font-semibold text-dark dark:text-light'>
              Muhammad Bilal
            </p>
            <p className='mt-1 max-w-xs leading-6'>
              AI Application Developer and Python Backend Engineer.
            </p>
          </div>
          <nav
            aria-label='Footer'
            className='flex flex-wrap gap-x-5 md:gap-x-4'
          >
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className='flex flex-wrap gap-x-5 md:gap-x-4'>
            {externalLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={linkClass}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className='mt-6 border-t border-dark/10 pt-5 text-xs text-dark/55 dark:border-white/[0.06] dark:text-light/55'>
          &copy; {new Date().getFullYear()} Muhammad Bilal. All rights reserved.
        </p>
      </Layout>
    </footer>
  );
};

export default Footer;
