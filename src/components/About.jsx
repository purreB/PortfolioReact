import React from 'react';
import jakob from '../assets/JakobB.jpg';

function About() {
  return (
    <>
      <section
        className="section is-flex has-text-centered mt-4 mx-1"
        id="about"
      >
        <div className="container">
          <h1 className="title is-1 is-size-3-mobile">Jakob Bergström</h1>
          <p className="subtitle is-3"> FrontEnd Student</p>
          <typography className="is-size-3 has-text-centered has-text-weight-light is-size-5-mobile">
            Hello and welcome to my simple portfolio! <br /> My name is Jakob as
            mentioned above and i am 21 years old, i live in a small (ish)
            village outside of Skövde called Timmersdala. I am in the midst of
            learning FrontEnd-Development with focus on webbsecurity! <br />
            <br /> I also have a great intrest in gaming, i have even competed
            in Esports were i believe i have learnt a great deal about working
            in teams and especially the importance of good communication skills.
          </typography>
        </div>
        <article>
          <img
            src={jakob}
            alt="An Image of me"
            className="is-align-self-flex-end"
          />
          <div>
            <p>Jakob Bergström</p>
            <p>jakob.bergstrom@live.se</p>

            <a
              href="https://github.com/purreB"
              className="fab fa-github fa-2x has-text-grey"
            ></a>
            <a
              href="https://www.linkedin.com/in/jakob-bergstr%C3%B6m/"
              className="fab fa-linkedin fa-2x has-text-lightblue"
            ></a>
          </div>
        </article>
      </section>
    </>
  );
}

export default About;
