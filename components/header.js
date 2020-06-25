import React from 'react';

export default function Header() {
  return (
    <header id="header">
      <div className="title">Flight</div>
      <div className="subtitle">An extensible micro-framework for PHP</div>
      <nav>
        <ul>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/install">install</a>
          </li>
          <li>
            <a href="/learn">learn</a>
          </li>
          <li>
            <a href="https://github.com/mikecao/flight">code</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
