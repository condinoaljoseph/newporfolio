import React from 'react';

const Summary = ({ content }) => {
  const {
    title,
    details,
    description,
    source_link,
    backStyles,
    project_img
  } = content;

  console.log(project_img);

  return (
    <div className='summary'>
      <div className='showcase'>
        <a href='#!'>
          <img src={project_img} alt={title} />
        </a>
      </div>
      <div className='details'>
        <h3 style={backStyles}>{title}</h3>
        <h4>{details}</h4>
        <p>{description}</p>
        <a
          href={source_link}
          style={backStyles}
          target='_blank'
          rel='noopener noreferrer'
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Summary;
