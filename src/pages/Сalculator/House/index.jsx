import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  itemTotalMinus,
  itemTotalPlus,
  setCleaningPrice,
} from '../../../redux/actions/calc';

import styles from './House.module.scss';

function House() {
  const [selectValues, setSelectValues] = React.useState({
    firstSelect: 'room1',
    secondSelect: 'general',
  });
  const state = useSelector((state) => state.calc);
  const dispatch = useDispatch();
  const { search } = useLocation();

  React.useEffect(() => {
    if (search) {
      setSelectValues((prev) => ({
        ...prev,
        secondSelect: search.slice(1),
      }));
      dispatch(setCleaningPrice(search.slice(1), selectValues));
    }
  }, []);

  const onClickMinus = (id, price) => {
    dispatch(itemTotalMinus(id, price));
  };
  const onClickPlus = (id, price) => {
    dispatch(itemTotalPlus(id, price));
  };

  const handleChangeSelect = (e) => {
    setSelectValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    dispatch(setCleaningPrice(e.target.value, selectValues));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <h2 className={styles.h2}>Калькулятор</h2>
        <div>
          <select
            name='firstSelect'
            value={selectValues.firstSelect}
            onChange={handleChangeSelect}
          >
            <option value='room1'>1 комната</option>
            <option value='room2'>2 комнаты</option>
            <option value='room3'>3 комнаты</option>
            <option value='room4'>4 комнаты</option>
          </select>
          <select
            name='secondSelect'
            value={selectValues.secondSelect}
            onChange={handleChangeSelect}
          >
            <option value='general'>Генеральная</option>
            <option value='fast'>Быстрая</option>
            <option value='repair'>После ремонта</option>
          </select>
        </div>
        <h3>Дополнительные услуги</h3>
        {state.items.map((obj) => (
          <div className={styles.item} key={obj.id}>
            <div className={styles.itemText}>
              <h2>{obj.title}</h2>
            </div>
            <div className={styles.itemPrice}>
              <p>{obj.price} р.</p>
            </div>
            <div className={styles.btn}>
              <button
                onClick={() => onClickMinus(obj.id, obj.price)}
                disabled={obj.total <= 0}
              >
                -
              </button>
              <p>{obj.total}</p>
              <button
                onClick={() => onClickPlus(obj.id, obj.price)}
                disabled={(obj.id === 17 || obj.id === 14) && obj.total >= 1}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.pay}>
          <h2>К оплате {state.totalPrice + state.cleaningPrice} руб.</h2>
        </div>
        <div className={styles.input}>
          <h3>Имя</h3>
          <input placeholder='Ваше имя' />
        </div>
        <div className={styles.input}>
          <h3>Телефон</h3>
          <input placeholder='+7 (987) 654-32-10' />
        </div>
        <div className={styles.input}>
          <h3>Дата уборки</h3>
          <input type='date' />
        </div>
        <div className={styles.input}>
          <h3>
            Комментарии к <br />
            заказу
          </h3>
          <textarea placeholder='Например: помыть кота, сходить за продуктами, забрать вещи из химчистки' />
        </div>

        <button className={styles.payBtn}>Заказать</button>
        <span>
          Нажимая кнопку Вы принимаете условия «пользовательского соглашения» и
          даёте согласие на «обработку персональных данных»
        </span>
      </div>
    </div>
  );
}

export default House;
