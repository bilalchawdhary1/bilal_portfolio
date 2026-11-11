import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
<<<<<<< HEAD
import { AnimatePresence, MotionConfig } from "framer-motion";
=======
import { AnimatePresence, MotionConfig } from "motion/react";
>>>>>>> 9a456ef6f43e89478a55f4a21ce148f56b7c0999
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import PortfolioAtmosphere from "@/components/PortfolioAtmosphere";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1b1b1b" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/mg.png" />
      </Head>
      <MotionConfig reducedMotion="user">
        <div
          className={`${montserrat.variable} relative isolate min-h-screen w-full bg-light font-mont dark:bg-dark`}
        >
          <PortfolioAtmosphere />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">
              <AnimatePresence initial={false} mode="wait">
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
