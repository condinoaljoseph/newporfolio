import React, { Fragment, useState } from 'react';
import Modal from '../../UI/Modal';
import Summary from './Summary';

const Cards = ({ projects }) => {
  const [view, setView] = useState(false);
  const [summary, setSummary] = useState({});

  const viewModal = index => {
    setSummary(projects[index]);
    setView(true);
  };
  const closeModal = () => setView(false);

  const card = projects.map((project, i) => {
    const { id, title, details, description, styles, backStyles } = project;
    return (
      <div className='card' key={id}>
        <div className='card_inner'>
          <div className='card_front'>
            <div className='card_heading' style={styles}>
              <h4>{title}</h4>
            </div>
            <div className='card_details'>
              <ul>
                {details.split(',').map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='card_back' style={backStyles}>
            <p>{description}</p>
            <button onClick={() => viewModal(i)}>Demo</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className='cards'>{card}</div>
      <Modal view={view} close={closeModal}>
        <Summary content={summary} />
      </Modal>
    </Fragment>
  );
};

export default Cards;
