import React from 'react';
import clone from '../assets/clone.jpg';

function Portfolio() {
  return (
    <>
      <div className="grid-container section has-text-centered">
        <section className="TaxCalculator has-text-centered" id="portfolio">
          <section className="TaxLeft section has-text-centered">
            <div className="container">
              <h1 className="title is-4 mt-3">Taxes. Simplified.</h1>
              <h1 className="subtitle is-3"> Tax Calculator</h1>
              <p className="is-size-3 has-text-centered has-text-weight-light is-size-5-mobile">
                A tax calculator in java, which will calculate the ammount of
                taxes depending on what the user salary, the breakpoint
                percentages is used from Skatteverket, 2019. <br />
              </p>
              <button
                className="button is-medium is-dark"
                onClick={() => {
                  window.location.href =
                    'https://github.com/purreB/TaxCalculator';
                }}
              >
                Link To Project
              </button>
            </div>
          </section>
          <section className="SpotifyClone section is-medium has-text-centered is-flex">
            <section className="CloneLeft section has-text-centered">
              <div className="container content is-normal">
                <h1 className="title mt-6">Our Biggest Project Yet</h1>
                <h1 className="subtitle is-3">A fullstack music app!</h1>
                <ul>
                  <li>Made Using React</li>
                  <li>CSS Framework - Material UI</li>
                  <li>Mobile First Principle</li>
                  <li>SQL Database</li>
                  <li>
                    No clear text passwords - Bcrypt hashes and salts pwds
                  </li>
                  <li>JsonWebTokens for authorization </li>
                  <li>Using YT iFrame API for music player</li>
                  <li>
                    Using public herokku api for fetching artist and song data
                  </li>
                </ul>
                <button
                  className="button is-medium is-dark"
                  onClick={() => {
                    window.location.href =
                      'https://github.com/paccao/Ljudio-group5';
                  }}
                >
                  Link To Project
                </button>
              </div>
            </section>
            <section className="CloneRight">
              <div className="container">
                <img
                  src={clone}
                  alt="A preview image of the spotify clone"
                  className="mt-6 pt-6"
                />
              </div>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
