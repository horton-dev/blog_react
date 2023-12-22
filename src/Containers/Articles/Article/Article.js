import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const location = useLocation();
  const fromHome = location.state?.fromHome;

  return (
    <div>
      <h1>Ma page article {id}</h1>
      {fromHome && <p>cliqué depuis home</p>}
    </div>
  );
};

export default Article;
