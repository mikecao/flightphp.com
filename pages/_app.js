import React from 'react';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';
import 'styles/syntax.css';
import mixpanel from 'mixpanel-browser';

mixpanel.init('ecb2430cbf1503f9566b58e4eb9a3294', { debug: true });

function getRandomChars(
  n,
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
) {
  const arr = chars.split('');
  let s = '';
  for (let i = 0; i < n; i++) {
    s += arr[Math.floor(Math.random() * arr.length)];
  }
  return s;
}

export default function App({ Component, pageProps }) {
  mixpanel.track('visit', {
    random: getRandomChars(16),
  });

  return <Component {...pageProps} />;
}
