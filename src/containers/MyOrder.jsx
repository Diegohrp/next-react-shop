import React from 'react';
import {OrderItem} from '../components/OrderItem';
import {AppContext} from '../context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import littleArrowIcon from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

function MyOrder() {
  const {state, handleToggleOrder} = React.useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumutator, currentValue) =>
      accumutator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles['main-carts-container']}>
      <div className={styles['carts-container']}>
        <div className={styles['back-button-carts']}>
          <figure>
            <Image
              src={littleArrowIcon}
              alt="back"
              onClick={handleToggleOrder}
            />
          </figure>
          <p>Shopping cart</p>
        </div>
        {state.cart.map((product, index) => (
          <OrderItem
            product={product}
            key={`orderItem-${product.id}${index}`}
          />
        ))}
        <div className={styles['shopping-total']}>
          <p>Total</p>
          <p>${sumTotal()}</p>
        </div>
      </div>
      <Link href="/checkout">
        <a className={styles['shopping-cart__button']}>Checkout</a>
      </Link>
    </aside>
  );
}

export {MyOrder};
