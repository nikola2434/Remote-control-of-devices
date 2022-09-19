import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress color="#edf4ff" startPosition={0.2} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
