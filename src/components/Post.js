import React from 'react';
import { useFetchData } from '../utils/useFetchData';
import Content from './Content';

const Post = () => {
  const data = useFetchData('https://jsonplaceholder.typicode.com/posts');
  return <Content data={data} />;
};

export default Post;
