import React from 'react';
import styles from './Header.module.css';
import logo from './../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <img src={logo} alt="Лого VNV Solutions" className={styles.logo} width="150px" loading="lazy" />
      </div>
      <h1 className={styles['main-title']}>Ваші ідеї - наші рішення</h1>
      <button className={styles['order-button']}>Замовити</button>
    </header>
  );
};

export default Header;

