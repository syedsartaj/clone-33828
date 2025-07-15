'use client';

import Head from 'next/head';
import { useContext } from 'react';
import { DataContext } from './DataContext';

export default function DynamicHead() {
  const { Heading, companySlogan } = useContext(DataContext);

  return (
    <Head>
      <title>{Heading || 'Smaksly — Build & Deploy Your Website'}</title>
      <meta name="description" content={companySlogan || 'Smaksly helps you create and launch modern websites effortlessly, including free hosting and SEO tools.'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://i.postimg.cc/cLjLPgpD/Chat-GPT-Image-Jul-9-2025-01-34-08-AM.png" />
    </Head>
  );
}
