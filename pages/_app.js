import React from 'react';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';
import 'styles/syntax.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
