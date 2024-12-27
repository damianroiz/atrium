import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const StyledBaseLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(90rem , 1fr);
  align-items: center;
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
