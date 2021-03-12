/* eslint-disable import/no-duplicates */
import { AppProps } from 'next/app';
import App from 'next/app';
import { createContext } from "react";
import Head from 'next/head';
import SimpleReactLightbox from 'simple-react-lightbox';
import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";
import Layout from '../../components/Layout';
import '@/styles/global.css';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" />
      </Head>
      <GlobalContext.Provider value={global}>
        <Layout global={global}>
          <SimpleReactLightbox>
            <Component {...pageProps} />
          </SimpleReactLightbox>
        </Layout>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI(`/global`);
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
