const data = [
  {
    id: 1,
    staffImg: '/carolynh.jpg',
    name: 'Carolyn Hackenberg',
    position: 'Office Manager',
    info: 'Carolyn started her career in the business world, attending university in both Nova Scotia and in California where she',
  },
  {
    id: 2,
    staffImg: '/hala.jpg',
    name: 'Hala Basily',
    position: 'Clinic Director',
    info: 'Hala Basily has been practicing Physiotherapy for over 24 years. She earned her Bachelor degree in Physical',
  },
  {
    id: 3,
    staffImg: '/himani.jpg',
    name: 'Himani Goyal',
    position: 'Physiotherapist',
    info: 'Himani’s journey with physiotherapy started at an early age of 15, when her grandmother’s spinal injury at',
  },
  {
    id: 4,
    staffImg: '/mariam.jpg',
    name: 'Mariam Mamo',
    position: 'Massage Therapist',
    info: 'Mariam Mamo is a registered message therapist. She graduated from MaKami College 3000 hours program in Calgary',
  },
  {
    id: 5,
    staffImg: '/marry.jpg',
    name: 'Marry Carroll',
    position: 'Medical Office Assitant',
    info: 'Mary is medical office assistant, she was born and raised in the Philippines and came to Canada in 2009.',
  },
  {
    id: 6,
    staffImg: '/caleb.jpg',
    name: 'Caleb Menjivar',
    position: 'Kinesiologist',
    info: 'Caleb graduated from University of Calgary BSc Kinesiology program in 2021 and has since become a registered kinesiologist',
  },
  {
    id: 7,
    staffImg: '/enzo.jpg',
    name: 'Enzo',
    position: 'The Best Office Pet',
    info: 'He loves welcoming patients in the waiting area',
  },
];

function StaffCard({ img, name, position }) {
  return (
    <div className="staff-card">
      <img src={`../images/${img}`} alt=""></img>
      <div className="staff-card-info">
        <span>{name}</span>
        <span>{position}</span>
      </div>
    </div>
  );
}

function StaffSection() {
  return (
    <section  className="cards-section">
      <h2>Our Staff</h2>
      {data.map((item) => (
        <StaffCard
          key={item.id}
          img={item.staffImg}
          name={item.name}
          position={item.position}
          info={item.info}
        />
      ))}
    </section>
  );
}

export default StaffSection;
