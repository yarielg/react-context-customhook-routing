import { useState, useEffect } from 'react';

export const useFetchData = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [setData, url]);

  return data;
};
