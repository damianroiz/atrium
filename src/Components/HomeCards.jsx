import styles from './HomeCards.module.css';

function HomeCards({ cardsContent }) {
  return (
    <div className={styles.card__container}>
      {cardsContent.map((card, i) => (
        <div key={i} className={styles.card}>
          <h3>{card.title}</h3>
          <span>{card.description}</span>
        </div>
      ))}
    </div>
  );
}

export default HomeCards;
