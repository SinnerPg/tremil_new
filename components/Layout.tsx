/* eslint-disable prettier/prettier */
import Head from "next/head";

function Layout({ children }: any) {
  return (
    <div>
        <Head>
            <title>Tremil</title>
        </Head>
        <main>
            {children}
        </main>
    </div>)
}
export default Layout;
