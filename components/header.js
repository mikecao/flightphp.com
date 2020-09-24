import React from 'react';

export default function Header() {
  return (
    <header id="header" className="row justify-content-center">
      <div className="title col-12">Flight</div>
      <div className="subtitle col-12">An extensible micro-framework for PHP</div>
      <nav id="nav" className="col-10 col-md-4">
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
