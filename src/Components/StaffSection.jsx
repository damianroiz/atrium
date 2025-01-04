import styles from './StaffSection.module.css';

const data = [
  {
    id: 1,
    img: 'carolynh.webp',
    name: 'Carolyn Hackenberg',
    position: 'Office Manager',
    info: 'Carolyn started her career in the business world, attending university in both Nova Scotia and in California where she',
  },
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
  {
    id: 6,
    img: '/vinci.jpg',
    name: 'Vinci Gomez',
    position: 'Kinesiologist',
    info: 'Vinci has over 20 years of experience in Musculoskeletal physiotherapy and Neuro- rehabilitation',
  },
  {
    id: 7,
    img: '/enzo.webp',
    name: 'Enzo',
    position: 'The Best Office Pet',
    info: 'He loves welcoming patients in the waiting area',
  },
];

function StaffCard({ img, name, position }) {
  return (
    <div className={styles.staff__card}>
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
      <div className={styles.cards__container}>
        {data.map((staff) => (
          <StaffCard
            key={staff.id}
            img={staff.img}
            name={staff.name}
            position={staff.position}
            info={staff.info}
          />
        ))}
      </div>
    </section>
  );
}

export default StaffSection;
