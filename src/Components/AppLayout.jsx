import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const StyledBaseLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function AppLayout() {
  return (
    <StyledBaseLayout>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </StyledBaseLayout>
  );
}

export default AppLayout;
