import React from 'react';

const Summary = ({ content }) => {
  const { title, details, description, source_link, backStyles } = content;

  return (
    <div className='summary'>
      <div className='showcase'></div>
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
