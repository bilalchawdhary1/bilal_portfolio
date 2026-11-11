import Head from "next/head";

const SITE_NAME = "Muhammad Bilal";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadbilal-lime.vercel.app";

const SEO = ({
  title,
  description,
  path,
  canonicalUrl,
  noIndex = false,
  person = false,
}) => {
  const pageUrl = canonicalUrl || (path ? new URL(path, SITE_URL).href : null);
  const socialImage = `${SITE_URL}/mg.png`;
  const personData = person
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE_NAME,
        jobTitle: "AI Application Developer | Python Backend Engineer",
        url: pageUrl || SITE_URL,
        email: "mailto:chbilalc627@gmail.com",
        sameAs: [
          "https://github.com/bilalchawdhary1",
          "https://www.linkedin.com/in/bilal-fullstack",
        ],
      }
    : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      {pageUrl && <link rel='canonical' href={pageUrl} />}
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={socialImage} />
      <meta property='og:image:alt' content='Muhammad Bilal monogram logo' />
      {pageUrl && <meta property='og:url' content={pageUrl} />}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={socialImage} />
      {noIndex && <meta name='robots' content='noindex, nofollow' />}
      {personData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{__html: JSON.stringify(personData)}}
        />
      )}
    </Head>
  );
};

export default SEO;
