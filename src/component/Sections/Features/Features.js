import React from 'react';
import BottomAfter from '../../Svg/BottomAfter';
import TopAfter from '../../Svg/TopAfter';

const Features = () => {
  return (
    <section className='features'>
      <TopAfter />
      <div className='container'>
        <div className='features_con'>
          <div className='feature_box'>
            <span className='lnr lnr-code'></span>
            <h3>Front End</h3>
            <ul>
              <li>HTML5 | CSS3</li>
              <li>JavaScript | React</li>
            </ul>
          </div>
          <div className='feature_box'>
            <span className='lnr lnr-layers'></span>
            <h3>Server</h3>
            <ul>
              <li>Node JS</li>
              <li>Express</li>
            </ul>
          </div>
          <div className='feature_box'>
            <span className='lnr lnr-database'></span>
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className='feature_box'>
            <span className='lnr lnr-cloud'></span>
            <h3>Deployment</h3>
            <ul>
              <li>Git</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
      <BottomAfter />
    </section>
  );
};

export default Features;
