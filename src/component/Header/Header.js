import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import BottomAfter from '../Svg/BottomAfter';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const Header = () => {
  configureAnchors({ scrollDuration: 1000 });

  return (
    <ScrollableAnchor id={'hero'}>
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
    </ScrollableAnchor>
  );
};

export default Header;
