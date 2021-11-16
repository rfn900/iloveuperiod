import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { ActiveMobileMenu } from "../context/activeMobileMenu";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  return (
    <ActiveMobileMenu.Provider
      value={{ activeMobileMenu, setActiveMobileMenu }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActiveMobileMenu.Provider>
  );
}

export default MyApp;
