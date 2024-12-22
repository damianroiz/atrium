import styled from 'styled-components';

const StyledAppointmentBtn = styled.button`
    font: 500 small-caps var(--fs-20) var(--ff-btn);
    letter-spacing: 0.08em;
    border-radius: 8px;
    padding: 1rem;
    color: var(--c-white);
    background: var(--c-btn-green);
    box-shadow: -3px 3px 5px rgba(0, 0, 0, 0.2),
    3px -1px 5px rgba(255, 255, 2555, 0.3);
    cursor: pointer;
    transition: all 200ms ease-in;
    &:hover {
        transform: translateY(-7px);
    }
`


export default function AppointmentBtn() {
  return <StyledAppointmentBtn>Book Your Appoinment</StyledAppointmentBtn>;
}

