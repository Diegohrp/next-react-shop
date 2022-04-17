import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';
function Menu() {
  return (
    <>
      <ul className={styles['menu-desktop']}>
        <div>
          <li>
            <Link href="/">My orders</Link>
          </li>
          <li>
            <Link href="/">My account</Link>
          </li>
        </div>
        <li className={styles['menu-desktop__sign-out']}>Sign out</li>
      </ul>
      <ul className={styles['menu-mobile']}>
        <div className={styles['menu-mobile__categories']}>
          <li>
            <p>CATEGORIES</p>
          </li>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Cothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </div>
        <li className={styles['menu-mobile__border']}></li>
        <div className={styles['menu-mobile__account']}>
          <li>
            <Link href="/">My orders</Link>
          </li>
          <li>
            <Link href="/">My account</Link>
          </li>
        </div>
        <div className={styles['menu-mobile__sign-out']}>
          <li>
            <p>myemail@gmail.com</p>
          </li>
          <li>
            <Link href="/">Sign out</Link>
          </li>
        </div>
      </ul>
    </>
  );
}

export {Menu};
