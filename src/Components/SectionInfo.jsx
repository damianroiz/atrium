import styled from 'styled-components';
import React from 'react';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';
import AppointmentBtn from '../ui/AppointmentBtn';

const StyledSectionInfo = styled.div`
  background: var(--c-bg-blue);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`

const SectionInfo = () => {
  return (
    <StyledSectionInfo id="inicio">
      <div className="logo-container">
        <a href="/">
          <Logo />
        </a>
      </div>

      <div className="contact-info-container">
        <div className="contact-info-card">
          <div>
            <i className="card-icon far fa-envelope"></i>
            <p>admin@atriumphysiotherapy.com</p>
          </div>
          <div>
            <i className="card-icon fas fa-map-marker-alt"></i>
            <p className="info-address">
              340 Midpark Way SE - Suite 140
              <br />
              Calgary, AB, T2X 1P1
            </p>
          </div>
          <div>
            <i className="card-icon fas fa-phone"></i>
            <p>+1(403)-255 4461</p>
          </div>
          <div>
            <i className="card-icon fas fa-fax"></i>
            <p>+1(403)-259 8776</p>
          </div>
        </div>
      </div>
      <div>
        <AppointmentBtn />
      </div>
    </StyledSectionInfo>
  );
};

export default SectionInfo;
