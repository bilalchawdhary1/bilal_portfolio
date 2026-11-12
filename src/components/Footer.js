import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import {GithubIcon, LinkedInIcon} from "./Icons";

const navLinks = [
  {href: "/", label: "Home"},
  {href: "/about", label: "About"},
  {href: "/projects", label: "Projects"},
  {href: "/articles", label: "Articles"},
  {href: "/contact", label: "Contact"},
];

const externalLinks = [
  {
    href: "https://www.linkedin.com/in/bilal-fullstack",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://github.com/bilalchawdhary1",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {href: "mailto:chbilalc627@gmail.com", label: "Email", Icon: EmailIcon},
];

const linkClass =
  "inline-flex min-h-11 items-center rounded-md transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark";

const socialLinkClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 transition-colors hover:border-primary/40 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-white/10 dark:hover:border-primaryDark/50 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark";

function EmailIcon({className = "h-full w-full"}) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      focusable='false'
      className={className}
    >
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='m3.5 7 8.5 6 8.5-6' />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className='w-full border-t border-dark/10 dark:border-white/[0.06]'>
      <Layout className='!py-8'>
        <div className='grid grid-cols-[1.2fr_1fr_1fr] gap-8 text-sm text-dark/70 dark:text-light/70 md:grid-cols-1 md:gap-4'>
          <div>
            <p className='font-semibold text-dark dark:text-light'>
              Muhammad Bilal
            </p>
            <p className='mt-1 max-w-xs leading-6'>Full-Stack AI Developer.</p>
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
          <nav
            aria-label='Social links'
            className='flex flex-wrap justify-end gap-3'
          >
            {externalLinks.map(({href, label, Icon}) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={
                  label === "Email" ? "Email me" : `Visit my ${label} profile`
                }
                title={label}
                className={socialLinkClass}
              >
                <Icon className='h-5 w-5' />
              </a>
            ))}
          </nav>
        </div>
        <p className='mt-6 border-t border-dark/10 pt-5 text-xs text-dark/55 dark:border-white/[0.06] dark:text-light/55 text-center'>
          &copy; {new Date().getFullYear()} Muhammad Bilal. All rights reserved.
        </p>
      </Layout>
    </footer>
  );
};

export default Footer;
