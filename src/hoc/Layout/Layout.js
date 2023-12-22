//Libraries
import React from 'react';
import Header from '../../Components/Header/Header';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
    <Header />

    {props.children}

    {/* pied de page */}
    </>
  );
};

export default Layout;