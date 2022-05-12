import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/styles.css';
import { Tokens } from '@/components/shared/tokens/Tokens';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to Music-Finder!</title>
      </Head>

      <Tokens />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
