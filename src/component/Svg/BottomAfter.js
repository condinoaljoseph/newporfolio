import React from 'react';

const BottomAfter = () => {
  const svgStyle = {
    position: 'absolute',
    bottom: '-1px',
    width: '100%',
    height: '8vw'
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='bottomAfter'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      style={svgStyle}
    >
      <polygon fill='#f7f7f7' points='0,100 100,0 100,100' />
    </svg>
  );
};

export default BottomAfter;
