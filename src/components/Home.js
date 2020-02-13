import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/post');
  };

  return (
    <>
      <button onClick={handleClick}>To Post</button>
    </>
  );
};

export default Home;
