import Link from "next/link";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

export default function Thanks() {
  return (
    <>
      <SEO
        title='Thank You | Muhammad Bilal'
        description='Thank you for reaching out to Muhammad Bilal.'
        path='/thanks'
        noIndex
      />

      <TransitionEffect />

      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16 text-center'>
          <AnimatedText
            text='Thank You! 🙌'
            className='mb-8 !text-7xl sm:!text-5xl'
          />
          <p className='mb-6 text-lg text-dark/75 dark:text-light/75'>
            Your message has been sent successfully. I’ll get back to you soon!
          </p>
          <Link
            href='/'
            className='inline-flex min-h-11 items-center justify-center rounded-lg border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-dark focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:focus-visible:ring-primaryDark'
          >
            Back to Home
          </Link>
        </Layout>
      </main>
    </>
  );
}
