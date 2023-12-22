import React from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import classes from './Contact.module.css';

const Contact = () => {
  const navigate = useNavigate();

  const emailClickedHandler = () => {
    navigate('email');
  };

  const callClickedHandler = () => {
    navigate('call');
  };

  return (
    <>
      <h1>Contact</h1>
      <p>Par quel moyen de contact voulez vous nous contacter ?</p>
      <button onClick={emailClickedHandler} className={classes.button}>Email</button>
      <button onClick={callClickedHandler} className={classes.button}>Téléphone</button>

      <Routes>
        <Route path="email" element={<h1>Email</h1>} />
        <Route path="call" element={<h1>Call</h1>} />
      </Routes>
      <Outlet />
    </>
  );
};

export default Contact;
