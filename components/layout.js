import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Html from "./html";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Flight - An extensible micro-framework for PHP</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-101933-10"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','UA-101933-10');`}}>
        </script>
      </Head>
      <div id="container">
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
