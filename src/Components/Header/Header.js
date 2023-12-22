import React from 'react';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={['container', classes.flex].join(' ')}>
      <div className={classes.logo}>
        Blog
      </div>
      <nav>
        <Navigation />
      </nav>
      </div>
    </header>
  );
};

export default Header;