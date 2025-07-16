'use client';

import Head from 'next/head';
import { useContext } from 'react';
import { useData } from './DataContext';

export default function DynamicHead() {
  const { sheet2Data, loading } = useData();

  // Prevent rendering until data is loaded
  if (loading) return null;

  const headerRow = sheet2Data.find(row => row.Header);
  const Heading = headerRow?.Heading || 'Smaksly — Build & Deploy Your Website';
  const companySlogan = headerRow?.companySlogan || 'Smaksly helps you create and launch modern websites effortlessly, including free hosting and SEO tools.';

  return (
    <Head>
      <title>{Heading}</title>
      <meta name="description" content={companySlogan} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://i.postimg.cc/cLjLPgpD/Chat-GPT-Image-Jul-9-2025-01-34-08-AM.png" />
    </Head>
  );
}
