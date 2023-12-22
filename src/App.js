//Librairies
import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {  Route, Routes } from 'react-router-dom';
import routes from './config/routes';

import Home from './Containers/Home/Home';
import Contact from './Components/Contact/Contact';
import Articles from './Containers/Articles/Articles';
import Article from './Containers/Articles/Article/Article';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={routes.HOMES} element={<Home />} />
          <Route path={routes.CONTACT} element={<Contact />} />
          <Route path={routes.ARTICLES} element={<Articles />} />
          <Route path={routes.ARTICLES + '/:id'} element={<Article />} />


          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
