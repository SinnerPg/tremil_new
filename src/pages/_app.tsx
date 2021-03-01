import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../../components/Layout';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
