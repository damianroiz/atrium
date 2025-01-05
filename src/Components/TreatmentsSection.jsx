import { useState } from 'react';
import styles from './TreatmentsSection.module.css';

const TreatmentCard = ({ treatment, current, setCurrent }) => {
  const handleClick = () => {
    setCurrent(treatment.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.treatment__card} ${
        treatment.id === current ? styles.active : ''
      }`}
    >
      <span className={styles.treatment__card_title}>{treatment.title}</span>
    </div>
  );
};

const TreatmentContent = ({ treatment }) => {
  return (
    <article className={styles.treatment__content}>
      <h2>{treatment.title}</h2>
      <img src={treatment.image} alt="treatment-img" />
      <div>
        {Array.isArray(treatment.description) ? (
          treatment.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{treatment.description}</p>
        )}
        {treatment.hasOwnProperty('list') ? (
          <ul>
            {treatment.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};

function TreatmentsSection({ treatmentsData }) {
  const [current, setCurrent] = useState(1);

  return (
    <section className={styles.treatments__section}>
      <p>
        Explore our comprehensive range of professional physiotherapy treatments
        at Atrium Physiotherapy. The benefits of our services tailored to
        enhance your well-being.
      </p>
      <div className={styles.treatment__cards}>
        {treatmentsData.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            treatment={treatment}
            current={current}
            setCurrent={setCurrent}
          />
        ))}
      </div>

      {current &&
        treatmentsData.map(
          (treatment) =>
            treatment.id === current && (
              <TreatmentContent treatment={treatment} key={treatment.id} />
            )
        )}
    </section>
  );
}

export default TreatmentsSection;
