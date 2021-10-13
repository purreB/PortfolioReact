import React from 'react';

function Skills() {
  return (
    <>
      <section className="section has-text-centered" id="skills">
        <section className="iconSection section has-text-centered">
          <div className="container">
            <h1 className="title is-1">Skills</h1>
            <span style={{ color: 'darkorange' }}>
              <i className="fab fa-html5 fa-5x"></i>
            </span>
            <span style={{ color: 'lightblue' }}>
              <i className="fab fa-css3-alt fa-5x"></i>
            </span>
            <span style={{ color: 'yellow' }}>
              <i className="fab fa-js fa-5x"></i>
            </span>
            <span style={{ color: 'blue' }}>
              <i className="fab fa-react fa-5x"></i>
            </span>
            <span style={{ color: 'green' }}>
              <i className="fab fa-node fa-5x"></i>
            </span>
            <span style={{ color: 'blue' }}>
              <i className="fab fa-linux fa-5x"></i>
            </span>
            <span style={{ color: 'black' }}>
              <i className="fas fa-database fa-5x"></i>
            </span>
            <span style={{ color: 'green' }}>
              <i className="fas fa-file-excel fa-5x"></i>
            </span>
          </div>
        </section>
        <section className="textSection section has-text-centered">
          <div className="container">
            <p className="is-size-3 has-text-centered has-text-weight-light is-size-5-mobile">
              Besides the skills shown above i have an gymnasieexamen in
              societal science were i studied subjects such as:
            </p>
            <ul>
              <li>Behavioral science</li>
              <li>Group psychology</li>
              <li>Leadership and organisation</li>
              <li>Corporate Economics</li>
              <li>Communication</li>
            </ul>
            <br />
            <p className="is-size-3 has-text-centered has-text-weight-light is-size-5-mobile">
              Moreover, i have a passion for learning new skills and improving
              already existing skills. A good example of current applied skills
              is that i am our student representative, a role that comes with
              responsibility and proffesionalism. <br /> <br />
              Being a student representative, i attend meetings together with
              other representatives from other classes aswell as a large variety
              of IT-companies. In these meetings we discuss the current need of
              the IT-sector and make sure our education reflects those needs.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Skills;
