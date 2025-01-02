import { useState } from 'react';
import styles from './TreatmentsSection.module.css';

const TreatmentCard = ({ treatment, current, setCurrent }) => {
  const handleClick = () => {
    setCurrent(treatment.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.treatment__card} ${treatment.id === current ? 'active' : ''}`}
    >
      <span className={styles.treatment__card_title}>{treatment.title}</span>
    </div>
  );
};

const TreatmentContent = ({ treatment }) => {
  return (
    <article className={styles.treatment__container}>
      <h2>{treatment.title}</h2>
      <div className={styles.treatment__body}>
        <img
          style={{ height: '300px' }}
          src={treatment.image}
          alt="treatment-img"
        />
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


function TreatmentsSection ({treatmentsData}) {
  const [current, setCurrent] = useState(1);

  return (
      <section className={styles.treatments__section}>
        <p>Take a look at our treatments</p>
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
