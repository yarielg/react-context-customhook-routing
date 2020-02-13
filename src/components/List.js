import React, { useContext } from 'react';
import ExpansionContext from '../contexts/expansion';

const List = ({ data }) => {
  const { state: expansion } = useContext(ExpansionContext);

  return (
    <>
      <h2>{data.name ? data.name : data.title}</h2>
      {expansion ? <p>{data.body}</p> : null}
    </>
  );
};

export default List;
