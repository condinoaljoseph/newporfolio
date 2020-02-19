import React from 'react';
import Cards from './Cards';
import Lists from './Lists';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='container'>
        <div className='projects_con'>
          <h2>Project Portfolio</h2>
          <Cards projects={Lists} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
