import React from 'react';
import styles from './Advantages.module.css';

const Advantages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.advantages}>
        <div className={styles['advantage-cell']}>
          <div className={styles.icon}>✨</div>
          <p>Компетентні фахівці</p>
        </div>
        <div className={styles['advantage-cell']}>
          <div className={styles.icon}>💡</div>
          <p>Інноваційні рішення</p>
        </div>
        <div className={styles['advantage-cell']}>
          <div className={styles.icon}>🚀</div>
          <p>Швидке вирішення завдань</p>
        </div>
        <div className={styles['advantage-cell']}>
          <div className={styles.icon}>💻</div>
          <p>Сучасні технології</p>
        </div>
        <div className={styles['advantage-cell']}>
          <div className={styles.icon}>🌐</div>
          <p>Глобальний підхід</p>
        </div>
        <div className={styles['advantage-cell']}>
          <div className={styles.icon}>📈</div>
          <p>Стабільність і розвиток</p>
        </div>
      </div>
      <button className={styles['order-button']}>Замовити</button>
    </div>
  );
};

export default Advantages;
