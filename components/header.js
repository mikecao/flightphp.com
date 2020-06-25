import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header id="header">
      <div className="title">Flight</div>
      <div className="subtitle">An extensible micro-framework for PHP</div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/install">
              <a>install</a>
            </Link>
          </li>
          <li>
            <Link href="/learn">
              <a>learn</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/mikecao/flight">code</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
