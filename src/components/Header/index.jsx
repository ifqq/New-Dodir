import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

function Header({ setIsContacts }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickContacts = () => {
    setIsContacts(true);
    navigate('/');
  };

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
          <li
            className={`${
              pathname.includes('/calculator') ? styles.selected : ''
            }`}
            onClick={() => navigate('calculator/house')}
          >
            Калькулятор
          </li>
          <li
            className={`${pathname === '/qna' ? styles.selected : ''}`}
            onClick={() => navigate('qna')}
          >
            Вопрос-ответ
          </li>
          <li
            className={`${
              pathname === '/cleaning-type' ? styles.selected : ''
            }`}
            onClick={() => navigate('cleaning-type')}
          >
            Тип уборки
          </li>
          <li onClick={handleClickContacts}>Контакты</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
