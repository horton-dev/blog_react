//Libraries
import React from 'react';
import classes from './Navigation.module.css';

//Components
import NavigationItem from './NavigationItem/NavigationItem';
import routes from '../../../config/routes';

const Navigation = () => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to={routes.HOMES}>Accueil</NavigationItem>
      <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
      <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
    </ul>
  );
};

export default Navigation;