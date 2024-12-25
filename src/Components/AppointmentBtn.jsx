import styled from 'styled-components';

const StyledAppointmentBtn = styled.button`
  font: 600 small-caps var(--fs-16) var(--ff-btn);
  letter-spacing: 0.08em;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  color: var(--c-white);
  background: var(--c-btn-green);
  box-shadow: 0 3px 15px rgba(9, 9, 9, 0.2);
  transition: transform 200ms ease-in;
  cursor: pointer;
  &:hover {
    transform: translateY(-7px);
  }
`;

export default function AppointmentBtn() {
  return <StyledAppointmentBtn>Book Your Appoinment</StyledAppointmentBtn>;
}
