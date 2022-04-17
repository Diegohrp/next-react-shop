import React from 'react';
import iconAddToCart from '@icons/bt_add_to_cart.svg';
import iconAddedToCart from '@icons/bt_added_to_cart.svg';
import {useCart} from '@hooks/useCart';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

function ProductItem({item}) {
  //custom hook useCart para poder cambiar el estado del ícono add
  //Para que cuando se elimine el producto desde el chekout, cambie el ícono igual
  const {added, handleCart} = useCart(item);

  return (
    <div className={styles['product-item']}>
      <img
        src={item.images[0] || item.category.image}
        alt={item.title}
        className={styles['product-item__img']}
      />
      <div>
        <div className={styles['product-item__details']}>
          <p>${item.price}</p>
          <p>{item.title}</p>
        </div>
        <button className={styles['product-item__cart']} onClick={handleCart}>
          {!added && <Image src={iconAddToCart} alt="shopping cart" />}
          {!!added && <Image src={iconAddedToCart} alt="shopping cart added" />}
        </button>
      </div>
    </div>
  );
}

export {ProductItem};
