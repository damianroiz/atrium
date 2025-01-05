import { useState } from 'react';
import styles from './Clinic.module.css';

const photos = [
  {
    src: './clinic1.webp',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    src: './clinic2.webp',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    src: './clinic4.webp',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    src: './clinic3.webp',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    src: './clinic5.webp',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const FeaturedImg = ({ selectedPhoto }) => {
  return (
    <figure className={styles.featuredImg}>
      <img src={photos[selectedPhoto].src} alt="" />
      <figcaption>
        We embrace evidence-based techniques and state-of-the-art technologies
        at our physiotherapy clinic to craft personalized treatment plans that
        address your unique needs and aspirations. Your health is our mission,
        and we are dedicated to helping you achieve your goals with compassion
        and expertise.
      </figcaption>
    </figure>
  );
};

const Thumbnails = ({ setSelectedPhoto }) => {
  return (
    <div className={styles.thumnailsContainer}>
      {photos.map((photo, index) => (
        <div
          className={styles.thumbnail}
          key={index}
          onClick={() => setSelectedPhoto(index)}
        >
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default function Clinic() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  return (
    <section className={styles.clinic}>
      <h2>Our Clinic</h2>
      <div className={styles.officeCarousel}>
        <FeaturedImg selectedPhoto={selectedPhoto} />
        <Thumbnails setSelectedPhoto={setSelectedPhoto} />
      </div>
    </section>
  );
}
