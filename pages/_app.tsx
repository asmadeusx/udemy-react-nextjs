import Head from "next/head";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>MyTop - наш лучший топ!</title>
        <meta name="description" content="Generated by create next app" />
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </React.Fragment>
  );
}

export default MyApp;
