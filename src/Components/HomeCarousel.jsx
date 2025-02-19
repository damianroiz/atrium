import styles from './HomeCarousel.module.css';
import { useState, useEffect, memo } from 'react';

const photos = [
  {
    id: 0,
    title: 'Carousel photo one',
    url: '/atrium-home-1.webp',
  },
  {
    id: 1,
    title: 'Carousel photo two',
    url: '/atrium-home-2.webp',
  },
  {
    id: 2,
    title: 'Carousel photo three',
    url: '/atrium-home-3.jpg',
  },
  {
    id: 3,
    title: 'Carousel photo four',
    url: '/atrium-home-4.webp',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex])

  function handlePrevious() {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  }

  function handleNext() {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
  }

  return (
    <div className={styles.carouselContainer}>
      <Photos currentIndex={currentIndex} />
      <CarouselButton
        className={styles.backBtn}
        arrow={'<'}
        onClick={handlePrevious}
      />
      <CarouselButton
        className={styles.nextBtn}
        arrow={'>'}
        onClick={handleNext}
      />
      <Dots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}

function Photos({ currentIndex }) {
  return (
    <>
      {photos.map((photo, index) => (
        <div
          className={
            photos[currentIndex].id === index ? styles.show : styles.hide
          }
          key={photo.id}
        >
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </>
  );
}

function CarouselButton({ arrow, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {arrow}
    </button>
  );
}

function Dots({ currentIndex, setCurrentIndex }) {
  return (
    <div className={styles.dotsContainer}>
      {photos.map((photo, index) => (
        <span
          key={photo.id}
          className={
            photos[currentIndex].id === index
              ? `${styles.dot} ${styles.active}`
              : styles.dot
          }
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  );
}

export default memo(Carousel);
