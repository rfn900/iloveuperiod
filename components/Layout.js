import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import PromoBar from "./PromoBar";
import { useActiveMobileMenu } from "../context/activeMobileMenu";
export default function Layout({ children }) {
  const { activeMobileMenu } = useActiveMobileMenu();

  return (
    <div>
      <Head>
        <title>I Love U Period</title>
        <link rel="icon" href="/iloveuperiod-favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className={`fixed z-40 top-0 h-screen w-screen bg-gray-50 transition duration-500 ${
          activeMobileMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>
      <div>
        {/* Set Promo Bar here*/}
        <PromoBar />
      </div>
      <div
        className={`overflow-hidden relative flex flex-col justify-between `}
      >
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
