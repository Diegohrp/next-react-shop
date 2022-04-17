import React from 'react';
import closeIcon from '@icons/icon_close.png';
import {AppContext} from '../context/AppContext';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';
function OrderItem({product}) {
  const {removeFromCart} = React.useContext(AppContext);
  return (
    <div className={styles['shopping-cart']}>
      <img
        className={styles['shopping-cart__img']}
        src={product?.images[0] || product?.category.image}
        alt="item"
      />
      <p className={styles['shopping-cart__title']}>{product?.title}</p>
      <p className={styles['shopping-cart__price']}>{`$ ${product?.price}`}</p>
      <div>
        <Image
          src={closeIcon}
          alt="delete"
          onClick={() => removeFromCart(product)}
        />
      </div>
    </div>
  );
}

export {OrderItem};
