import Head from 'next/head';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dgs-logo.png" sizes="any" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
