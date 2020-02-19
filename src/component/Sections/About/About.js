import React from 'react';
import LogoJs from './js.png';
import LogoNodejs from './nodejs.png';
import LogoReactjs from './reactjs.png';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about_con'>
          <h2>
            Front end focused <span>with full stack experience</span>
          </h2>
          <div className='about_row'>
            <div className='about_info'>
              <div>
                <h3>Motivated to produce results</h3>
                <p>
                  As a tenacious self-taught programmer, I use continuous
                  iteration to produce results quickly and continuously improve
                  products.
                </p>
              </div>
              <div>
                <h3>An agile collaborator</h3>
                <p>
                  I have contributed to open source projects, worked on
                  engineering teams, and always stay attuned to the newest
                  frameworks.
                </p>
              </div>
            </div>
            <div className='about_stacks'>
              <ul>
                <li>
                  <img src={LogoJs} alt='Javascript' />
                </li>
                <li>
                  <img src={LogoNodejs} alt='Node JS' />
                </li>
                <li>
                  <img src={LogoReactjs} alt='React JS' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
