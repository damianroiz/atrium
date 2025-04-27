import { useState, memo } from 'react';
import { GoStarFill } from 'react-icons/go';
import styles from './GoogleReviews.module.css';

const reviews = [
  {
    id: 0,
    name: 'Sharon Wynder',
    review:
      'I have recently been doing the GLAD program with Hala to work on my knee. The entire team at Atrium have been welcoming and encouraging. Hala’s expertise in regards to my therapy has been so helpful. She is extremely thorough and explains things carefully. I have had the pleasure of working with Mary also and she has helped me through some challenging exercises. We have all had some good laughs together making my whole experience positive. I highly recommend Atrium to anyone needing therapy.',
  },
  {
    id: 1,
    name: 'Ana-Maria Stoica',
    review:
      'Great physio team all around. Friendly atmosphere and you’re made to feel comfortable from your first visit. Hala did an amazing job helping me with my back and Miriam did a great massage. I highly recommend Atrium to anyone needing therapy.',
  },
  {
    id: 2,
    name: 'Monique Moe',
    review:
      'I’m so happy to have relief from ongoing pain in both elbows as well as back pain! Hala is so knowledgeable and friendly, I feel so comfortable and well looked after. They have technology as well as traditional treatments. I would highly recommend Atrium.',
  },
  {
    id: 3,
    name: 'Jim Baker',
    review:
      'Hala and her team of specialists, especially Mariam are exemplary in their processes to assist clients in their recovery from so many ailments.Once healed up, it\'s great to be able to return for "tune ups" to stay healthy and athletic! Enzo keeps the clinic on the straight and narrow! Great clinic with great people. Thanks',
  },
  {
    id: 4,
    name: 'Daniel Romero (Dan)',
    review:
      "This place is awesome! The staff is not onky super friendly and helpful, which is a huge plus. They're also really professional and know what they're doing. Above all they listen to your needs=). I had a great experience and would definitely recommend them. Five stars all the way!",
  },
];

function Slides({ curIndex }) {
  return (
    <>
      {reviews.map((slide, index) => {
        const transformValue = `translateX(${100 * (index - curIndex)}%)`;
        return (
          <div
            key={index}
            className={styles.slide}
            style={{ transform: transformValue }}
          >
            <div className={styles.testimonial}>
              <blockquote className={styles.testimonial__text}>
                {`" ${slide.review} "`}
              </blockquote>
              <div className={styles.testimonial__author}>
                <h3 className={styles.testimonial__name}>{slide.name}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function CarouselButton({ arrow, direction, onClick }) {
  return (
    <button
      className={`${styles.slider__btn} ${styles[`slider__btn--${direction}`]}`}
      onClick={onClick}
    >
      {arrow}
    </button>
  );
}

// function Dots() {
//   return (
//     <div className={styles.dots}>
//       {reviews.map((_, index) => (
//         <span
//           key={index}
//           className={`${styles.dots__dot} ${index === 0 ? styles.active : ''}`}
//         ></span>
//       ))}
//     </div>
//   );
// }

function Dots({ curIndex, setCurIndex }) {
  return (
    <div className={styles.dots}>
      {reviews.map((_, index) => (
        <span
          key={index}
          className={
            curIndex === index
              ? `${styles.dots__dot} ${styles.active}`
              : styles.dots__dot
          }
          onClick={() => setCurIndex(index)}
        ></span>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [curIndex, setCurIndex] = useState(0);

  function handlePrevious() {
    setCurIndex(curIndex === 0 ? reviews.length - 1 : curIndex - 1);
  }

  function handleNext() {
    setCurIndex(curIndex === reviews.length - 1 ? 0 : curIndex + 1);
  }

  return (
    <div className={styles.slider}>
      <a
        href="https://www.google.com/search?hl=en-CA&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzdEyjppjy7PNoBNLPiouZL38rv0Z8rJIcYOyMuYOXaE8bOVH7h2Lxi7yd9Ngp4wqgYt9sw4oIEMD1mRJo2nSIeZWJCzkegtx6X_2JJ4e3R_Y7HrzFg%3D%3D&q=Atrium+Physiotherapy+Reviews&sa=X"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.google_link}
        onClick={(e) => {
          e.stopPropagation(); // Ensure no parent event blocks the link
        }}
      >
        <img src={'./google.webp'} alt={'google reviews'} />
      </a>
      <Slides curIndex={curIndex} />
      <CarouselButton arrow={'←'} direction={'left'} onClick={handlePrevious} />
      <CarouselButton arrow={'→'} direction={'right'} onClick={handleNext} />
      <Dots curIndex={curIndex} setCurIndex={setCurIndex} />
    </div>
  );
}
