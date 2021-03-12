/* eslint-disable prettier/prettier */
import Head from "next/head";
import Nav from './Nav';
import Footer from './Footer';

function Layout({ children, global }: any) {
  return (
    <div>
        <Head>
            <title>{global.siteName}</title>
        </Head>
        <main>
            <Nav />
            {children}
            <Footer />
        </main>
    </div>)
}
export default Layout;
