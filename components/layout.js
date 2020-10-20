import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Flight - An extensible micro-framework for PHP</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="89188287-2ec0-4b91-9ab4-a5249e93a6b5"
            src="https://app.umami.is/umami.js"
          />
        )}
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <div id="container" className="container">
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
