import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import BottomAfter from '../Svg/BottomAfter';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header_con'>
          <div className='nav_bar'>
            <Logo className='App-logo' ariaLabel='logo' />
            <Navigation />
          </div>
          <Banner />
        </div>
      </div>
      <BottomAfter />
    </header>
  );
};

export default Header;
