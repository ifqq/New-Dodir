import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Other.module.scss';

function Other() {
  const [price, setPrice] = React.useState('');
  const [fields, setFields] = React.useState({ square: '', tel: '' });
  const [selectValues, setSelectValues] = React.useState('fast');
  const { search } = useLocation();

  React.useEffect(() => {
    if (search) {
      setSelectValues(search.slice(1));
      calcCost(fields.square, search.slice(1));
    } else {
      calcCost();
    }
  }, []);

  const handleChangeSelect = (e) => {
    setSelectValues(e.target.value);
    calcCost(fields.square, e.target.value);
  };

  const handleChangeFields = (e) => {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === 'square') {
      calcCost(e.target.value, selectValues);
    }
  };

  const calcCost = (cost = 100, plc = 'fast') => {
    if (plc === 'fast') {
      if (cost * 60 < 6000) {
        setPrice('6000* руб.');
      } else {
        setPrice(`${cost * 60}* руб.`);
      }
    }
    if (plc === 'general') {
      if (cost * 75 < 7500) {
        setPrice('7500* руб.');
      } else {
        setPrice(`${cost * 75}* руб.`);
      }
    }
    if (plc === 'repair') {
      if (cost * 120 < 12000) {
        setPrice('12000* руб.');
      } else {
        setPrice(`${cost * 120}* руб.`);
      }
    }
  };

  return (
    <div className={styles.other}>
      <h2>Сколько стоит уборка офиса/ спортзала?</h2>
      <p>
        Стоимость зависит от количества квадратных метров, от количества мебели,
        сан-узлов и других параметров.
      </p>
      <span>
        <strong>
          *Финальная стоимость уборки рассчитывается индивидуально
        </strong>
      </span>
      <div className={styles.calc}>
        <div className={styles.inp}>
          <h3>Площадь</h3>
          <input
            name='square'
            value={fields.square}
            onChange={(e) => handleChangeFields(e)}
            type='text'
            placeholder='100 м&sup2;'
          />
        </div>
        <div className={styles.inp}>
          <h3 style={{ marginTop: 35 }}>Тип уборки</h3>
          <select
            value={selectValues}
            onChange={handleChangeSelect}
            style={{ marginRight: '37%' }}
          >
            <option value='general'>Генеральная</option>
            <option value='fast'>Быстрая</option>
            <option value='repair'>После ремонта</option>
          </select>
        </div>
        <div className={styles.inp}>
          <h3>Стоимость:</h3>
          <input value={price} type='text' readOnly />
        </div>
        <div className={styles.inp}>
          <h3>Телефон</h3>
          <input
            name='tel'
            value={fields.tel}
            onChange={(e) => handleChangeFields(e)}
            type='text'
          />
        </div>
      </div>
      <button className={styles.payBtn}>Запросить рассчёт</button>
    </div>
  );
}

export default Other;
