import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import PromoBar from "./PromoBar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>I Love U Period</title>
        <link rel="icon" href="/iloveuperiod-favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PromoBar />
      <div className="relative flex min-h-screen flex-col justify-between ">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
