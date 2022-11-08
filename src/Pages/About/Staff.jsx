import React from 'react'
import "../../../src/style.css"
import StaffCards from './StaffCards'
import carolynh from '../../assets/images/carolynh.jpg'
import hala from '../../assets/images/hala.jpg'
import himani from '../../assets/images/hamani.jpg'
import mariam from '../../assets/images/mariam.jpg'
import marry from '../../assets/images/marry.jpg'
import caleb from '../../assets/images/caleb.jpg'
import enzo from '../../assets/images/enzoDog.jpg'

const staffinfo = [
  {
    id: 1,
    name: 'Carolyn Hackenberg',
    info: 'Carolyn started her career in the business world, attending university in both Nova Scotia and in California where she',
    image: carolynh,
    load: 'OFFICE MANAGER',
  },
  {
    id: 2,
    name: 'Hala Basily',
    info: 'Hala Basily has been practicing Physiotherapy for over 24 years. She earned her Bachelor degree in Physical',
    image: hala,
    load: 'PT CLINIC DIRECTOR',
  },
  {
    id: 3,
    name: 'Himani Goyal',
    info: 'Himani’s journey with physiotherapy started at an early age of 15, when her grandmother’s spinal injury at',
    image: himani,
    load: 'PT',
  },
  {
    id: 4,
    name: 'Mariam Mamo',
    info: 'Mariam Mamo is a registered message therapist. She graduated from MaKami College 3000 hours program in Calgary',
    image: mariam,
    load: 'RMT',
  },
  {
    id: 5,
    name: 'Marry Carroll',
    info: 'Mary is medical office assistant, she was born and raised in the Philippines and came to Canada in 2009. She',
    image: marry,
    load: 'MOA',
  },
  {
    id: 6,
    name: 'Caleb Menjivar',
    info: 'Caleb graduated from University of Calgary BSc Kinesiology program in 2021 and has since become a registered kinesiologist',
    image: caleb,
    load: 'KINESIOLOGIST',
  },
  {
    id: 7,
    name: 'Enzo',
    image: enzo,
    load: 'OFFICE DOG',
  },
]

const Staff = () => {
  return (
    <div className='staff'>
      <h1 className='title-staff'>Our Staff</h1>
      <span className='p-staff'>Your Team: The Experts</span>
      <p className='span-staff'>
        Nationally renowned physiotherapists working in partnership with a team
        of skilled kinesiologists, massage therapists and amazing support staff.
      </p>
      <div className='staff-box'>
        {staffinfo.map((staf) => {
          return (
            <div className='staff-container' key={staf.id}>
              <StaffCards
                id={staf.id}
                name={staf.name}
                info={staf.info}
                image={staf.image}
                load={staf.load}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Staff
