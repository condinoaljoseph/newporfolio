import React from 'react';
import Cards from './Cards';
import Lists from './Lists';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Projects = () => {
  configureAnchors({ scrollDuration: 1000 });

  return (
    <section className='projects'>
      <ScrollableAnchor id={'projects'}>
        <div className='container'>
          <div className='projects_con'>
            <h2>Project Portfolio</h2>
            <Cards projects={Lists} />
          </div>
        </div>
      </ScrollableAnchor>
    </section>
  );
};

export default Projects;
