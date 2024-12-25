import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import ContactButtons from './ContactButtons';
import AppointmentBtn from './AppointmentBtn';

const StyledHeader = styled.section`
  background: var(--c-bg-blue);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3.5rem 2rem;
  gap: 4rem;
  flex-wrap: wrap;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <ContactButtons />
      <AppointmentBtn />
    </StyledHeader>
  );
};

export default Header;
