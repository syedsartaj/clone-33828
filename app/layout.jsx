// app/layout.jsx
import './globals.css';
import { DataProvider } from './DataContext'; // Adjust path if needed
import Head from 'next/head';

export const metadata = {
  title: 'Smaksly — Build & Deploy Your Website',
  description: 'Smaksly helps you create and launch modern websites effortlessly, including free hosting and SEO tools.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
