import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import House from './House';
import Other from './Other';

import styles from './Calculator.module.scss';

function Calculator() {
  const { plc } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.btns}>
        <button onClick={() => navigate('/calculator/house')}>
          Квартира или дом
        </button>
        <button onClick={() => navigate('/calculator/other')}>
          Офис или Спортзал
        </button>
      </div>
      {plc === 'house' && <House />}
      {plc === 'other' && <Other />}
    </>
  );
}

export default Calculator;
