// components/SeoHead.jsx
"use client";

import Head from "next/head";

const SeoHead = ({ title, description, image, url }) => {
  console.log(title,"title");
  return (
    <Head>
      
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SeoHead;
