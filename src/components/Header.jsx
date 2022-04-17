import React from 'react';
import {Menu} from './Menu';
import {MyOrder} from '@containers/MyOrder';
import {AppContext} from '@context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import logoYardSale from '@images/logo_yard_sale.svg/';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import menuIcon from '@icons/icon_menu.svg';
import styles from '@styles/Header.module.scss';

function Header() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const {state, handleToggleOrder} = React.useContext(AppContext);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles['navbar__items-container']}>
          <button className={styles['navbar__menu']} onClick={handleToggle}>
            <Image src={menuIcon} alt="menu" />
          </button>
          <div className={styles['navbar__items-container--left']}>
            <li className={styles['navbar__logo']}>
              <Link href="/" passHref={true}>
                <figure>
                  <Image src={logoYardSale} alt="yard sale logo" />
                </figure>
              </Link>
            </li>
            <div className={styles['navbar__categories']}>
              <li>
                <Link href="/">All</Link>
              </li>
              <li>
                <Link href="/">Clothes</Link>
              </li>
              <li>
                <Link href="/">Electronics</Link>
              </li>
              <li>
                <Link href="/">Furniture</Link>
              </li>
              <li>
                <Link href="/">Toys</Link>
              </li>
              <li>
                <Link href="/">Others</Link>
              </li>
            </div>
          </div>
          <div className={styles['navbar__shopping']}>
            <button onClick={handleToggle}>myemail@example.com</button>
            <button
              className={styles['navbar__shopping-cart']}
              onClick={handleToggleOrder}>
              <Image src={iconShoppingCart} alt="shopping cart" />
            </button>
            {!!state.cart.length && (
              <li className={styles['navbar__num-products']}>
                {state.cart.length}
              </li>
            )}
          </div>
        </ul>
        {!!toggleMenu && <Menu />}
        {!!state.toggleOrder && !!state.cart.length && <MyOrder />}
      </nav>
    </header>
  );
}

export {Header};
