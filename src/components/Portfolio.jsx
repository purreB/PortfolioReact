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
                A tax calculator in java, which will calculate the amount of
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
          <section className="Internship section has-text-centered">
            <h1 className="subtitle is-3">My journey so far.</h1>
            <h1 className="title mt-6">
              Fullstack intern at a very early startup.
            </h1>
            <p className="is-size-3 has-text-centered has-text-weight-light is-size-5-mobile">
              In my previous internship i worked as a fullstack intern in a very
              early startup project, the company consists of the owner, project
              manager and then a team of junior/intern developers. I had
              somewhat of a leader role within the team and worked with
              Frontend, Backend and DevOps aswell.
              <br />
              <br />
              Some of the things i got to do is set up the entire backend in
              Node.js, that includes middleware, routes, api. As well as fixed
              our database, for that we use MongoDB (mongoose), and i also wrote
              the database CRUD functions. To store passwords and sensitive user
              data we hash it before saving to DB.
              <br />
              <br />
              For the Frontend we used next.js and i setup our fetch requests
              aswell as creating components, not much styling though, but alot
              of logic.
              <br />
              <br />
            </p>
            <h1 className="title mt-6">
              Fullstack intern at FrontEdgeIT, An IT consult firm.
            </h1>
            <p className="is-size-3 has-text-centered has-text-weight-light is-size-5-mobile">
              In my current internship i've been working with a quite
              interesting project consisting of React, Node.JS and Python
              scripts. The project is an email crawler that crawls an inbox,
              fetches data from email body or attatchments (PDF, Excel files
              etc), it then sents relevant info to Node that then sends it to DB
              and displays info on the Frontend. The Email Crawler is written in
              Python and that is what i've been working with the most during
              this time, but also some node.
              <br />
              <br />
              Another fun assignment i just recently finished was performing a
              pentest on one of our customers, as i have somewhat experience in
              performing pentests and ethical hacking i loved this oppertunity
              and helped our customer improve their security posture and
              identify security flaws that could be leveraged by an attacker to
              gain unauthorized access to data.
            </p>
          </section>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
