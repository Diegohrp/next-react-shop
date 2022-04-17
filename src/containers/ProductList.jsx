import React from 'react';
import { ProductItem } from '@components/ProductItem';
import { useGetProducts } from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';
function ProductList() {
  const products = useGetProducts(API);
  return (
    <main className={styles['main-container']}>
      <section className={styles['product-list']}>
        {products.map((product, index) => (
          <ProductItem item={product} key={product.id} index={index} />
        ))}
      </section>
    </main>
  );
}

export { ProductList };
