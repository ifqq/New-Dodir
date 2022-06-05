import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { EmblaCarousel } from '../../components/EmblaCarousel';
import { PartnersCarousel } from '../../components/PartnersCarousel';
import { YandexMap } from '../../components/YandexMap';

import styles from './Home.module.scss';

const workpartners = [
  {
    title: 'ArtGroup',
    logoUrl: './png/logo/ArtGroup.png',
  },
  {
    title: 'MyBisnes',
    logoUrl: './png/logo/MyBisnes.png',
  },
  {
    title: 'MyDocument',
    logoUrl: './png/logo/MyDocument.png',
  },
  {
    title: 'RioFitness',
    logoUrl: './png/logo/RioFitness.png',
  },
];

const uspartners = [
  {
    title: 'Grass',
    logoUrl: './png/logo/Grass.png',
  },
  {
    title: 'Karcher',
    logoUrl: './png/logo/Karcher.png',
  },
  {
    title: 'Bahler',
    logoUrl: './png/logo/Bahler.png',
  },
  {
    title: 'Planet',
    logoUrl: './png/logo/Planet.png',
  },
  {
    title: 'ProBrite',
    logoUrl: './png/logo/ProBrite.png',
  },
  {
    title: 'Floor',
    logoUrl: './png/logo/Floor.png',
  },
];

const advantages = [
  {
    url: './png/leaf.png',
    text: 'Экологическая безопасность',
  },
  {
    url: './png/clock.png',
    text: 'Экономия времени',
  },
  {
    url: './png/handshake.png',
    text: 'Индивидуальный подход',
  },
  {
    url: './png/muscles.png',
    text: 'Экономия сил',
  },
  {
    url: './png/star.png',
    text: 'Технологичность',
  },
  {
    url: './png/bank.png',
    text: 'Экономия денег',
  },
];

function Home() {
  const [selectValues, setSelectValues] = React.useState({
    firstSelect: 'house',
    secondSelect: 'fast',
  });

  const navigate = useNavigate();

  const { setActiveModal, isContacts, setIsContacts } = useOutletContext();

  React.useEffect(() => {
    if (isContacts) {
      window.scroll({
        top: 5000,
        behavior: 'smooth',
      });
      setIsContacts(false);
    }
  }, [isContacts]);

  const handleChangeSelect = (e) => {
    setSelectValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onCalcBtn = () => {
    navigate(
      `calculator/${selectValues.firstSelect}?${selectValues.secondSelect}`
    );
  };

  return (
    <div className={styles.main}>
      <div
        className={styles.bgImage}
        style={{ backgroundImage: 'url(./jpg/girl.jpg)' }}
      >
        <div className={styles.calc}>
          <select
            name='firstSelect'
            value={selectValues.firstSelect}
            onChange={handleChangeSelect}
          >
            <option value='other'>Офис или Спортзал</option>
            <option value='house'>Квартира или дом</option>
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
          <button onClick={onCalcBtn}>Рассчитать</button>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.advantagesTitle}>Наши преимущества</h2>
        <div className={styles.advantages}>
          {advantages.map((obj) => (
            <div className={styles.advantage} key={obj.text}>
              <div className={styles.icon}>
                <img src={obj.url} alt='Img' />
              </div>
              <h3>{obj.text}</h3>
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.bgBenefitImage}
        style={{ backgroundImage: 'url(./jpg/benefit.jpg)' }}
      >
        <div className={styles.bgColor}>
          <div className={styles.benefitText}>
            <h2>129</h2>
            <span>Убрано офисов</span>
          </div>
          <div className={styles.benefitText}>
            <h2>194</h2>
            <span>Вымыто окон</span>
          </div>
          <div className={styles.benefitText}>
            <h2>217</h2>
            <span>Довольных клиентов</span>
          </div>
          <div className={styles.benefitText}>
            <h2>71</h2>
            <span>Уборок после ремонта</span>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h2>Мы работаем как с физическими, так и с юридическими лицами.</h2>
        <p>
          Предлагаем полный спектр клининговых услуг в Новом Уренгое. Работаем в
          любое время суток. Сотрудничаем как с индивидуальными клиентами, так и
          с крупными государственными и частными организациями. Мы не просто
          наводим порядок: мы заботимся о вашем здоровье, устраняя пыль и
          нейтрализуя грибки и вирусы; мы поднимаем настроение — грустные мысли
          испаряются вместе с грязью. Помещение, сияющее чистотой, заряжает
          энергией, позитивом и настраивает на более эффективную работу.
          Клининговая компания «Мойдодыр»: чистота — это к нам!
        </p>
      </div>
      <div className={styles.reviews}>
        <h2>Наши отзывы</h2>
        <EmblaCarousel />
      </div>
      <div className={styles.callBackInfo}>
        <h2>НУЖНО БОЛЬШЕ ИНФОРМАЦИИ?</h2>
        <button onClick={() => setActiveModal(true)}>Заказать звонок</button>
      </div>
      <div className={styles.partnersWork}>
        <h2>С кем мы работаем</h2>
        <PartnersCarousel partners={workpartners} />
      </div>
      <div className={styles.partnersWork}>
        <h2>Наши партнеры</h2>
        <PartnersCarousel partners={uspartners} />
      </div>
      <div className={styles.works}>
        <h2>Наши акции</h2>
        <EmblaCarousel worksmap />
      </div>
      <YandexMap />
    </div>
  );
}

export default Home;
