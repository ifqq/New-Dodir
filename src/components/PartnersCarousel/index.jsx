import React from 'react';
import { PrevButton, NextButton } from '../EmblaCarouselButton';
import useEmblaCarousel from 'embla-carousel-react';

import styles from './PartnersCarousel.module.scss';

export const PartnersCarousel = ({ partners }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
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
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {partners.map((obj) => (
            <div className={styles.embla__slide} key={obj.title}>
              <div className={styles.embla__slide__inner}>
                <img
                  className={styles.embla__slide__img}
                  src={obj.logoUrl}
                  alt='Logo'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
