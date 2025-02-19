import styles from './StaffSection.module.css';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 2,
    img: '/hala.webp',
    name: 'Hala Basily',
    position: 'Clinic Director',
    info: 'Hala Basily has been practicing Physiotherapy for over 24 years. She earned her Bachelor degree in Physical',
  },
  {
    id: 3,
    img: '/himani.webp',
    name: 'Himani Goyal',
    position: 'Physiotherapist',
    info: 'Himani’s journey with physiotherapy started at an early age of 15, when her grandmother’s spinal injury at',
  },
  {
    id: 4,
    img: '/mariam.webp',
    name: 'Mariam Mamo',
    position: 'Massage Therapist',
    info: 'Mariam Mamo is a registered message therapist. She graduated from MaKami College 3000 hours program in Calgary',
  },
  {
    id: 5,
    img: '/marry.webp',
    name: 'Marry Carroll',
    position: 'Medical Office Assitant',
    info: 'Mary is medical office assistant, she was born and raised in the Philippines and came to Canada in 2009.',
  },
];

function StaffCard({ img, name, position, onClick }) {
  return (
    <div className={styles.staff__card} onClick={onClick}>
      <img src={img} alt=""></img>
      <div className={styles.staff__card_info}>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
}

function StaffSection() {
  return (
    <section className={styles.staff__section}>
      <h2>Our Staff</h2>
      <p>
        Our team of highly skilled and licensed physiotherapists, specializing
        in{' '}
        <Link to="/treatments" className={styles.link}>
          {'a broad range of treatments'}
        </Link>
        , brings a wealth of experience to ensure that you receive the highest
        quality of care. Whether you’re seeking professional physiotherapy
        services, physiotherapy closest to you, or advanced physical therapy
        services, we are here to guide you on the right path to optimal health.
      </p>
      <div className={styles.cards__container}>
        {data.map((staff, i) => (
          <StaffCard
            key={i}
            img={staff.img}
            name={staff.name}
            position={staff.position}
            onClick={() => <p>{staff.info}</p>}
          />
        ))}
      </div>
    </section>
  );
}

export default StaffSection;
