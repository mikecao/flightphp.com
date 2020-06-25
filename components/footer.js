import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">
      <div>Copyright © Mike Cao and other flightphp.com contributors</div>
      <div>
        <a href="https://github.com/mikecao/flightphp.com">Fork this website on GitHub</a>
      </div>
      <div className="buttons">
        <a
          className="github-button"
          href="https://github.com/mikecao/flight"
          data-count-href="/mikecao/flight/stargazers"
          data-count-api="/repos/mikecao/flight#stargazers_count"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star mikecao/flight on GitHub"
        >
          Star
        </a>

        <a
          className="github-button"
          href="https://github.com/mikecao/flight/fork"
          data-count-href="/mikecao/flight/network"
          data-count-api="/repos/mikecao/flight#forks_count"
          data-count-aria-label="# forks on GitHub"
          aria-label="Fork mikecao/flight on GitHub"
        >
          Fork
        </a>
      </div>

      <script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>
    </footer>
  );
}
