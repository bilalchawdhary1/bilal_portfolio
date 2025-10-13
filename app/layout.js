import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Muhammad Bilal - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Creating modern, scalable web applications with a focus on user experience and performance.",
  keywords:
    "Full Stack Developer, React, Next.js, Node.js, MongoDB, JavaScript, TypeScript, Web Development, Lahore, Pakistan",
  authors: [{name: "Muhammad Bilal"}],
  creator: "Muhammad Bilal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadbilal-lime.vercel.app",
    title: "Muhammad Bilal - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
    siteName: "Muhammad Bilal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Clean up browser extension modifications before React hydration
              (function() {
                if (typeof window !== 'undefined') {
                  const cleanup = () => {
                    const html = document.documentElement;
                    if (html.hasAttribute('data-arp')) {
                      html.removeAttribute('data-arp');
                    }
                  };
                  
                  // Run immediately
                  cleanup();
                  
                  // Run after DOM is ready
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', cleanup);
                  }
                  
                  // Run after a short delay to catch late modifications
                  setTimeout(cleanup, 100);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
