import { useState } from 'react';
import styles from './OfficeCarousel.module.css';

const photos = [
  {
    id: 1,
    src: 'https://picsum.photos/id/1041/800/450',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/1043/800/450',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/1044/800/450',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/1045/800/450',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/1049/800/450',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    src: 'https://picsum.photos/id/1052/800/450',
    figCaption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const FeaturedImg = ({ selectedPhoto }) => {
  return (
    <figure className={styles.featuredImg}>
      <img src={photos[selectedPhoto].src} alt="" />
      {/* <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elite
      </figcaption> */}
    </figure>
  );
};

const Thumbnails = ({ setSelectedPhoto }) => {
  return (
    <div className={styles.thumnailsContainer}>
      {photos.map((photo, index) => (
        <div
          className={styles.thumbnail}
          key={photo.id}
          onClick={() => setSelectedPhoto(index)}
        >
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default function Carousel() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  return (
    <section className={styles.officeCarousel}>
      <FeaturedImg selectedPhoto={selectedPhoto} />
      <Thumbnails setSelectedPhoto={setSelectedPhoto} />
    </section>
  );
}
