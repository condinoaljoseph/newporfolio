import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer_con'>
          <div className='footer_logo'>
            <a href='#hero'>
              <Logo />
            </a>
          </div>
          <div className='footer_bottom'>
            <Navigation />
            <div className='author'>
              <p>
                Site by <a href='#!'>Al Joseph Condino</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
