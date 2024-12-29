import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import ContactButtons from './ContactButtons';
import AppointmentBtn from './AppointmentBtn';

const StyledHeader = styled.section`
  background: var(--c-background);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  gap: 4rem;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    padding-bottom: 3rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo type={'large'} />
      <ContactButtons />
      <AppointmentBtn />
    </StyledHeader>
  );
};

export default Header;
