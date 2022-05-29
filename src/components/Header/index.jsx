import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <img src='./png/logo.png' alt='Logo' />
        <ul>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Калькулятор</li>
          <li>Вопрос-ответ</li>
          <li>Тип уборки</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
