import React from 'react';
import axios from 'axios';

function useGetProducts(API) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getProducts();
  }, [API]);
  return products;
}

export {useGetProducts};
