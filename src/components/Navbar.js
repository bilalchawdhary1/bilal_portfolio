import {motion} from "motion/react";
import {useRouter} from "next/router";
import React, {useState} from "react";
import Link from "next/link";
import Logo from "./Logo";
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon} from "./Icons";
import {useThemeSwitch} from "./Hooks/useThemeSwitch";

const navItems = [
  {href: "/", title: "Home"},
  {href: "/about", title: "About"},
  {href: "/projects", title: "Projects"},
  {href: "/articles", title: "Articles"},
  {href: "/contact", title: "Contact"},
];

const socialLinks = [
  {
    href: "https://github.com/bilalchawdhary1",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/bilal-fullstack",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
];

const NavigationLink = ({href, title, onClick, mobile = false}) => {
  const router = useRouter();
  const isActive =
    href === "/"
      ? router.pathname === href
      : router.pathname === href || router.pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`site-nav-link rounded-md text-sm font-medium transition-colors hover:text-primary dark:hover:text-primaryDark ${
        mobile ? "block py-2 text-base" : "px-1 py-2"
      } ${isActive ? "text-primary dark:text-primaryDark" : "text-dark/75 dark:text-light/75"}`}
    >
      {title}
    </Link>
  );
};

const SocialLinks = ({mobile = false}) => (
  <div className='flex items-center gap-4'>
    {socialLinks.map(({href, label, Icon}) => (
      <motion.a
        key={label}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Visit my ${label} profile`}
        className={`rounded-full p-1 text-dark transition-colors hover:bg-dark/5 hover:text-primary dark:text-light dark:hover:bg-light/10 dark:hover:text-primaryDark ${
          mobile ? "h-6 w-6" : "h-5 w-5"
        }`}
        whileHover={{y: -2}}
        whileTap={{scale: 0.95}}
      >
        <Icon />
      </motion.a>
    ))}
  </div>
);

const ThemeButton = ({mode, setMode}) => (
  <button
    type='button'
    onClick={() => setMode(mode === "light" ? "dark" : "light")}
    aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    className='flex h-10 w-10 items-center justify-center rounded-full border border-dark/10 bg-white/60 text-dark transition-[transform,color,background-color,border-color] duration-200 hover:-rotate-12 hover:border-primary/30 hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light/20 dark:bg-dark/60 dark:text-light dark:hover:border-primaryDark/40 dark:hover:bg-primaryDark dark:focus-visible:ring-primaryDark'
  >
    {mode === "light" ? (
      <SunIcon className='h-5 w-5' />
    ) : (
      <MoonIcon className='h-5 w-5' />
    )}
  </button>
);

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-dark/10 bg-light/85 backdrop-blur-xl dark:border-light/10 dark:bg-dark/85'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4 sm:px-5'>
        <Logo />

        <nav aria-label='Main navigation' className='flex items-center gap-5 lg:hidden'>
          {navItems.map(item => (
            <NavigationLink key={item.href} {...item} />
          ))}
        </nav>

        <div className='flex items-center gap-5'>
          <div className='lg:hidden'>
            <SocialLinks />
          </div>
          <ThemeButton mode={mode} setMode={setMode} />
          <button
            type='button'
            className='hidden h-10 w-10 items-center justify-center rounded-full border border-dark/10 bg-white/50 text-dark transition-colors hover:border-primary/30 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light/20 dark:bg-dark/50 dark:text-light dark:hover:border-primaryDark/40 dark:hover:text-primaryDark dark:focus-visible:ring-primaryDark lg:flex'
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            aria-controls='mobile-menu'
            aria-expanded={isOpen}
            onClick={() => setIsOpen(open => !open)}
          >
            <span className='sr-only'>
              {isOpen ? "Close main menu" : "Open main menu"}
            </span>
            <span className='flex w-5 flex-col gap-1'>
              <span
                className={`h-0.5 w-full rounded bg-current transition-transform ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded bg-current transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded bg-current transition-transform ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <motion.nav
        id='mobile-menu'
        aria-label='Mobile navigation'
        aria-hidden={!isOpen}
        hidden={!isOpen}
        className='absolute left-4 right-4 top-[calc(100%-0.25rem)] z-50 rounded-2xl border border-dark/10 bg-light/95 p-6 shadow-xl shadow-dark/10 backdrop-blur-xl dark:border-light/10 dark:bg-[#202630]/95 dark:shadow-black/25'
        initial={false}
        animate={isOpen ? {opacity: 1, y: 0} : {opacity: 0, y: -8}}
        transition={{duration: 0.18}}
      >
        <div className='flex flex-col'>
          {navItems.map(item => (
            <NavigationLink
              key={item.href}
              {...item}
              mobile
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
        <div className='mt-5 border-t border-dark/10 pt-5 dark:border-light/10'>
          <SocialLinks mobile />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
