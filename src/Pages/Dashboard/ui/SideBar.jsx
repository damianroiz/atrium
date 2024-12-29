import styled from 'styled-components';
import Logo from '../../../Components/Logo';
// import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--c-grey-200);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--c-grey-500);
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <h1>Sidebar</h1>
      {/* <MainNav /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
