import React from 'react';

import styles from './CleaningType.module.scss';

function CleaningType() {
  return (
    <div
      className={styles.bgImg}
      style={{ backgroundImage: 'url(./jpg/pattern2.jpg)' }}
    >
      <h2>Стоимость уборки</h2>
      <div className={styles.wrapper}>
        <p>
          При подсчете комнат - кухня, коридор и один санузел не участвуют. Цены
          за уборку офиса и спортзала рассчитываются индивидуально.
        </p>
        <table>
          <thead>
            <tr>
              <th>
                <b>Комнат:</b>
              </th>
              <th>
                <b>Одна</b>
              </th>
              <th>
                <b>Две</b>
              </th>
              <th>
                <b>Три</b>
              </th>
              <th>
                <b>Четыре</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Быстрая</td>
              <td>2500 ₽</td>
              <td>3500 ₽</td>
              <td>4500 ₽</td>
              <td>5500 ₽</td>
            </tr>
            <tr>
              <td>После ремона</td>
              <td>7500 ₽</td>
              <td>12500 ₽</td>
              <td>14500 ₽</td>
              <td>15500 ₽</td>
            </tr>
            <tr>
              <td>Генеральная</td>
              <td>6500 ₽</td>
              <td>9000 ₽</td>
              <td>1100 ₽</td>
              <td>13500 ₽</td>
            </tr>
          </tbody>
        </table>
        <p>Цены за уборку офиса и спортзала рассчитываются индивидуально.</p>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>
                <b>Офис (м²)</b>
              </th>
              <th>
                <b>Спортзал (м²)</b>
              </th>
              <th>
                <b>Дом или большая квартира (м²)</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Быстрая</td>
              <td>60 ₽</td>
              <td>60 ₽</td>
              <td>60 ₽</td>
            </tr>
            <tr>
              <td>После ремона</td>
              <td>120 ₽</td>
              <td>120 ₽</td>
              <td>125 ₽</td>
            </tr>
            <tr>
              <td>Генеральная</td>
              <td>75 ₽</td>
              <td>75 ₽</td>
              <td>100 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CleaningType;
