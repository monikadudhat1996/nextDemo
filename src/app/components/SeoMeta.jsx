// app/components/SeoMeta.jsx
import React from 'react';
import { Metadata } from 'next';

export function generateSeoMeta({
  title = 'My Almari',
  description = 'Discover, rent, or sell stylish clothes and accessories.',
  url = 'https://myalmari.in',
  image = 'https://myalmari.in/default-og.jpg',
  keywords = 'almari, rent clothes, fashion, wardrobe, designer wear, online clothing',
}) {
  const metadata = {
    title,
    description,
    keywords,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: 'My Almari',
      images: [{ url: image }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@myalmari',
    },
    alternates: {
      canonical: url,
    },
  };

  return metadata;
}
