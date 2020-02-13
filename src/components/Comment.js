import React from 'react';
import { useFetchData } from '../utils/useFetchData';
import Content from './Content';

const Comment = () => {
  const data = useFetchData('https://jsonplaceholder.typicode.com/comments');
  return <Content data={data} />;
};

export default Comment;
