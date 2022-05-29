import React from 'react';

import styles from './Service.module.scss';

const services = [
  {
    title: 'Мойка окон (двустворчатые)',
    price: '700 Р. ЗА ШТУКУ',
    text: 'Стандартное двустворчатое окно, целиком с двух сторон',
    imgUrl: './png/service/window.png',
  },
  {
    title: 'Мойка окон (одностворчатые)',
    price: '500 Р. ЗА ШТУКУ',
    text: 'Одностворчатое окно, целиком с двух сторон',
    imgUrl: './png/service/window.png',
  },
  {
    title: 'Мытье холодильника внутри',
    price: '350 Р. ЗА ШТУКУ',
    text: 'Удаление запахов и дезинфекция',
    imgUrl: './png/service/fridge.png',
  },
  {
    title: 'Мытье духовки/СВЧ внутри',
    price: '300 Р. ЗА ШТУКУ',
    text: 'Обезжиривание и очистка духового шкафа и/или СВЧ печи',
    imgUrl: './png/service/microwave.png',
  },
  {
    title: 'Мытье люстры',
    price: '250 Р. ЗА ШТУКУ',
    text: 'Указывайте только те люстры, которые висят на потолке',
    imgUrl: './png/service/chandelier.png',
  },
  {
    title: 'Особые поручения',
    price: '700 Р. ЗА ЧАС',
    text: 'Например: разложить вещи по цветам, сходить в магазин, отнести вещи в химчистку',
    imgUrl: './png/service/cat.png',
  },
  {
    title: 'Уборка на балконе (полностью)',
    price: '2000 Р. ЗА ШТУКУ',
    text: 'Мытье пола, обеспыливание поверхностей на балконе',
    imgUrl: './png/service/balcony.png',
  },
  {
    title: 'Химчистка стула',
    price: '600 Р. ЗА ШТУКУ',
    text: 'Глубокая чистка стула, бережный подход к покрытию',
    imgUrl: './png/service/seat.png',
  },
  {
    title: 'Химчистка кресла',
    price: '1200 Р. ЗА ШТУКУ',
    text: 'Глубокая чистка кресла, бережный подход к покрытию',
    imgUrl: './png/service/armchair.png',
  },
  {
    title: 'Химчистка дивана',
    price: '3000 Р. ЗА ШТУКУ',
    text: 'Глубокая чистка дивана, бережный подход к покрытию',
    imgUrl: './png/service/sofa.png',
  },
  {
    title: 'Потолок',
    price: '700 Р. ЗА ШТУКУ',
    text: 'Очистим потолок от пыли и загрязнений',
    imgUrl: './png/service/roof.png',
  },
  {
    title: 'Стены в одной комнате',
    price: '900 Р. ЗА ШТУКУ',
    text: 'Очистим стены от пыли и загрязнений',
    imgUrl: './png/service/wall.png',
  },
  {
    title: 'Мойка окон (трехтворчатые)',
    price: '1000 Р. ЗА ШТУКУ',
    text: 'Трехстворчатое окно, целиком с двух сторон',
    imgUrl: './png/service/window.png',
  },
  {
    title: 'Уборка на балконе (без стекол)',
    price: '700 Р. ЗА ШТУКУ',
    text: 'Мытье пола, обеспыливание поверхностей на балконе (мойка окон не входит в стоимость)',
    imgUrl: './png/service/balcony.png',
  },
  {
    title: 'Химчистка',
    price: '40 % + К СТОИМОСТИ УБОРКИ',
    text: 'Заказывается вместе с уборкой дома или квартиры и включает в себя чистку мягкой мебели',
    imgUrl: './png/service/sg.png',
  },
  {
    title: 'Заехать за ключами',
    price: '350 Р. + К СТОИМОСТИ УБОРКИ',
    text: 'Если у вас совсем нет времени, мы поможем :)',
    imgUrl: './png/service/key.png',
  },
  {
    title: 'Парогенератор',
    price: '700 Р. + К СТОИМОСТИ УБОРКИ',
    text: 'Отлично чистит межплиточные швы, дезинфицирует сантехнику, удаляет трудные загрязнения',
    imgUrl: './png/service/sg.png',
  },
  {
    title: 'Уборка санузла',
    price: '350 Р. ЗА ШТУКУ',
    text: 'Мытье пола, обеспыливание поверхности (мытье окон не входит)',
    imgUrl: './png/service/toulet.png',
  },
];

function Service() {
  return (
    <div className={styles.wrapper}>
      <h2>Дополнительные услуги</h2>
      <div className={styles.services}>
        {services.map((obj) => (
          <div key={obj.title} className={styles.service}>
            <img src={obj.imgUrl} alt='Img' />
            <h3>{obj.title}</h3>
            <p>{obj.price}</p>
            <span>{obj.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
