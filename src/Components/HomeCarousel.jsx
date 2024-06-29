import { useState, useEffect } from 'react';
import styles from './HomeCarousel.module.css';

const photos = [
  {
    title: 'Physiotherapy photo one',
    url: 'https://atriumphysiotherapy.com/wp-content/uploads/2023/11/f-physiotherapy.jpg',
  },
  {
    title: 'physiotherapy photo two',
    url: 'https://atriumphysiotherapy.com/wp-content/uploads/2023/11/Untitled-3.jpg',
  },
  {
    title: 'physiotherapy photo three',
    url: 'https://atriumphysiotherapy.com/wp-content/uploads/2023/11/Exercises-1.jpg',
  },
];

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCurrentIndex((currentIndex + 1) % photos.length);
  //     console.log(currentIndex)
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [currentIndex])

  function handlePrevious() {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  }

  function handleNext() {
    setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1);
  }

  return (
    <div className={styles.homeCarouselContainer}>
      <Photos currentIndex={currentIndex} />
      <CarouselButton className={styles.previousBtn} onClick={handlePrevious}>
        &lt;
      </CarouselButton>
      <CarouselButton className={styles.nextBtn} onClick={handleNext}>
        &gt;
      </CarouselButton>
      <Dots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}

function Photos({ currentIndex }) {
  return (
    <>
      {photos.map((photo, id) => (
        <div
          className={photos[currentIndex].id === id ? styles.show : styles.hide}
          key={id}
        >
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </>
  );
}

function CarouselButton({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function Dots({ currentIndex, setCurrentIndex }) {
  return (
    <div className={styles.dotsContainer}>
      {photos.map((photo, id) => (
        <span
          key={id}
          className={
            photos[currentIndex].id === id ? `${styles.dot} active` : styles.dot
          }
          onClick={() => setCurrentIndex(photos.indexOf(photo))}
        ></span>
      ))}
    </div>
  );
}
