import React, { Fragment } from 'react';
import Backdrop from './Backdrop';

const Modal = props => {
  return (
    <Fragment>
      <Backdrop view={props.view} click={props.close} />
      <div
        className='modal'
        style={{
          opacity: props.view ? '1' : '0',
          transform: props.view ? 'translateY(0)' : 'translateY(-100vh)'
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
