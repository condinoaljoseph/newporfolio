import React from 'react';

const Backdrop = props =>
  props.view ? <div className='backdrop' onClick={props.click}></div> : null;

export default Backdrop;
