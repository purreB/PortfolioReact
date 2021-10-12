import React from 'react';

function FooterBar() {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="content has-text-centered">
          <p>Jakob Bergstrom, FrontEndStudent</p>
          <a
            href="https://github.com/purreB"
            className="fab fa-github fa-2x has-text-blue"
          ></a>
          <a
            href="https://www.linkedin.com/in/jakob-bergstr%C3%B6m/"
            className="fab fa-linkedin fa-2x has-text-lightblue"
          ></a>
        </div>
      </footer>
    </div>
  );
}

export default FooterBar;
