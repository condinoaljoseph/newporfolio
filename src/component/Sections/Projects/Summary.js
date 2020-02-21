import React, { useState, useEffect, Fragment } from 'react';
import Spinner from '../../UI/Spinner';

const Summary = ({ content }) => {
  const [project, setProject] = useState({
    title: null,
    details: null,
    description: null,
    source_link: null,
    backStyles: null,
    project_img: null
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProject({
      title: content.title,
      details: content.details,
      description: content.description,
      source_link: content.source_link,
      backStyles: content.backStyles,
      project_img: content.project_img
    });
    // setLoading(false);
  }, [content]);

  const {
    title,
    details,
    description,
    source_link,
    backStyles,
    project_img
  } = project;

  return (
    <div className='summary'>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  );
};

export default Summary;
