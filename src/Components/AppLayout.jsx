import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const StyledBaseLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(1fr, 1500px);
  justify-items: center;
  gap: 4rem;
`;

function AppLayout() {
  return (
    <StyledBaseLayout>
      <Header />
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledBaseLayout>
  );
}

export default AppLayout;
