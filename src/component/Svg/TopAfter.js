import React from 'react';

const TopAfter = () => {
  const svgStyle = {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '8vw',
    zIndex: '1'
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='topAfter'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      style={svgStyle}
    >
      <polygon fill='#f7f7f7' points='0,100 0,0 100,0' />
    </svg>
  );
};

export default TopAfter;
