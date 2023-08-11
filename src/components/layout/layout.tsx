import Head from 'next/head';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import ContactButton from '../button/whatsappButton';
import { useRouter } from 'next/router';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  const router = useRouter();

  const onClickWhatsAppButton = () => {
    router.push('https://wa.me/525624767064');
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dgs-logo.png" sizes="any" />
      </Head>
      <Navbar />
      <main>
        {children}
        <ContactButton onClick={onClickWhatsAppButton} isWhatsapp />
      </main>
      <Footer />
    </>
  );
}
