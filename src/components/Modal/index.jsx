import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './Modal.module.scss';

export const Modal = ({ setActiveModal }) => {
  const [isVerified, setIsVerified] = React.useState(false);
  const handleOnChange = (value) => {
    console.log(value);
    setIsVerified(true);
  };

  return (
    <div className={styles.bg} onClick={() => setActiveModal(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>ЗАПОЛНИТЕ ФОРМУ</h2>
        </div>
        <div className={styles.body}>
          <input type='text' placeholder='Ваше имя' />
          <input type='text' placeholder='Телефон' />
          <ReCAPTCHA
            sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
            onChange={handleOnChange}
          />
        </div>
        <button
          className={`${!isVerified ? styles.disabled : ''}`}
          disabled={!isVerified}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};
