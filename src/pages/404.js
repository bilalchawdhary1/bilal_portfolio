import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import SEO from "@/components/SEO";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <SEO
        title='Page Not Found | Muhammad Bilal'
        description='The page you requested could not be found.'
        noIndex
      />
      <TransitionEffect />
      <main className="flex min-h-[65vh] w-full items-center justify-center dark:bg-dark">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className="!text-7xl sm:!text-6xl" />
          <AnimatedText
            text="Page Not Found."
            className="!text-4xl sm:!text-3xl"
          />
          <Link
            href="/"
            className="mt-4 inline-flex min-h-11 items-center justify-center self-center rounded-lg border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition-colors hover:bg-transparent hover:text-dark focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:focus-visible:ring-primaryDark"
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
