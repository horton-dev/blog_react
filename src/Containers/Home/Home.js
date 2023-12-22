import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <Link to="/articles/1">Voir les articles</Link>
      <Link 
  to={{
    pathname: '/articles/1',
    state: { testState: "Hello" }
  }} 
  style={{ marginLeft: '15px' }}
>
  Lien de test
</Link>

    </div>
  );
};

export default Home;
