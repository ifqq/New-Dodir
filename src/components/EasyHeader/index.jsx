import React from 'react';

import styles from './EasyHeader.module.scss';

function EasyHeader({ setActiveModal }) {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.callback} onClick={() => setActiveModal(true)}>
          Обратный звонок
        </div>
        <div className={styles.contacts}>
          <a href='tel:89292525677' className={styles.phone}>
            <img src='./png/phone.png' alt='Phone' />
            89292525677
          </a>
          <a href='mailto:kk.moidodyr@gmail.com' className={styles.email}>
            <img src='./png/email.png' alt='Email' />
            kk.moidodyr@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default EasyHeader;
