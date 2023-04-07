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
