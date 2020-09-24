import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="buttons">
        <a
          className="github-button"
          href="https://github.com/mikecao/flight"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star mikecao/flight on GitHub"
        >
          Star
        </a>

        <a
          className="github-button"
          href="https://github.com/mikecao/flight/fork"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork mikecao/flight on GitHub"
        >
          Fork
        </a>
      </div>
      <div>Copyright © Mike Cao</div>
    </footer>
  );
}
