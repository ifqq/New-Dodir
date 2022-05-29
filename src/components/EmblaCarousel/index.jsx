import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton } from '../EmblaCarouselButton';

import styles from './EmblaCarousel.module.scss';

const works = [
  {
    title: '10proc',
    imgUrl: './jpg/works/10proc.jpg',
  },
  {
    title: 'HappyBirth',
    imgUrl: './jpg/works/HappyBirth.jpg',
  },
  {
    title: 'Uborka',
    imgUrl: './jpg/works/Uborka.jpg',
  },
];

export const EmblaCarousel = ({ worksmap }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);

  const scrollPrev = React.useCallback(
    () => embla && embla.scrollPrev(),
    [embla]
  );
  const scrollNext = React.useCallback(
    () => embla && embla.scrollNext(),
    [embla]
  );
  const onSelect = React.useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  React.useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={`${styles.embla} ${worksmap ? styles.emblaMap : ''}`}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {worksmap ? (
            works.map((obj) => (
              <div className={styles.embla__slideMap} key={obj.title}>
                <div className={styles.embla__slide__inner}>
                  <img
                    className={styles.embla__slide__img}
                    src={obj.imgUrl}
                    alt='Img'
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              <div
                className={styles.embla__slide}
                style={{ backgroundImage: 'url(/jpg/room.jpg)' }}
              >
                <div className={styles.bgColor}>
                  <div className={styles.benefitText}>
                    <h3>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Deleniti, animi natus! Quaerat, consequuntur. Id hic
                      cumque eos dolorem, delectus magni aspernatur corrupti vel
                      animi eaque. Ratione id iste cum libero.
                    </h3>
                    <span>Ваня</span>
                  </div>
                </div>
              </div>
              <div
                className={styles.embla__slide}
                style={{ backgroundImage: 'url(/jpg/room.jpg)' }}
              >
                <div className={styles.bgColor}>
                  <div className={styles.benefitText}>
                    <h3>
                      Qweqweqweqwe qweqwe qweq qweqweqwe qweqweqwe qweqweq
                      qweqweqweqw qewqe
                    </h3>
                    <span>Андрей</span>
                  </div>
                </div>
              </div>
              <div
                className={styles.embla__slide}
                style={{ backgroundImage: 'url(/jpg/room.jpg)' }}
              >
                <div className={styles.bgColor}>
                  <div className={styles.benefitText}>
                    <h3>123123123123</h3>
                    <span>Вася</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
