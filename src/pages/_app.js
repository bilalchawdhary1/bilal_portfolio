import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import {AnimatePresence, MotionConfig} from "motion/react";
import {Montserrat} from "next/font/google";
import Head from "next/head";
import {useRouter} from "next/router";
import PortfolioAtmosphere from "@/components/PortfolioAtmosphere";

const montserrat = Montserrat({subsets: ["latin"], variable: "--font-mont"});

export default function App({Component, pageProps}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='#F5F7FA'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='#090B10'
        />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='alternate icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/mg.png' />
      </Head>
      <MotionConfig reducedMotion='user'>
        <div
          className={`${montserrat.variable} relative isolate min-h-screen w-full bg-light font-mont dark:bg-dark`}
        >
          <a className='skip-link' href='#content'>
            Skip to content
          </a>
          <PortfolioAtmosphere />
          <div className='relative z-10 flex min-h-screen flex-col'>
            <Navbar />
            <div id='content' className='flex-1'>
              <AnimatePresence initial={false} mode='wait'>
                <Component key={router.asPath} {...pageProps} />
              </AnimatePresence>
            </div>
            <Footer />
          </div>
        </div>
      </MotionConfig>
    </>
  );
}
