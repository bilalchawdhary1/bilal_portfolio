import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You | Muhammad Bilal</title>
        <meta name='description' content='Thank you for reaching out!' />
      </Head>

      <TransitionEffect />

      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16 text-center'>
          <AnimatedText
            text='Thank You! 🙌'
            className='mb-8 !text-7xl sm:!text-5xl'
          />
          <p className='text-lg text-dark/75 dark:text-light/75 mb-6'>
            Your message has been sent successfully. I’ll get back to you soon!
          </p>
          <Link
            href='/'
            className='px-6 py-2 font-bold text-light bg-dark border border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark transition-all'
          >
            Back to Home
          </Link>
        </Layout>
      </main>
    </>
  );
}
