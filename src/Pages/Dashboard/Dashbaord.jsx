import Heading from './ui/Heading';
import Row from './ui/Row';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">This is the dashboard</Heading>
      <p>And this is a test</p>
      <Outlet />
    </Row>
  );
}

export default Dashboard;
