import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <img src='./png/logo.png' alt='Logo' onClick={() => navigate('/')} />
        <ul>
          <li
            className={`${pathname === '/about-us' ? styles.selected : ''}`}
            onClick={() => navigate('about-us')}
          >
            О нас
          </li>
          <li
            className={`${pathname === '/services' ? styles.selected : ''}`}
            onClick={() => navigate('services')}
          >
            Услуги
          </li>
          <li>Калькулятор</li>
          <li
            className={`${pathname === '/qna' ? styles.selected : ''}`}
            onClick={() => navigate('qna')}
          >
            Вопрос-ответ
          </li>
          <li>Тип уборки</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
