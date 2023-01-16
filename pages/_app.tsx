import "../styles/globals.css";
import type {AppProps} from "next/app";

import {ThemeProvider} from "next-themes";
import {Inter} from "@next/font/google";

import Footer from "../components/Footer";

const interVariable = Inter({subsets: ["latin"]});

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
