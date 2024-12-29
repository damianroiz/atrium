import Heading from './ui/Heading';
import Row from './ui/Row';

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">This is the dashboard</Heading>
      <p>And this is a test</p>
    </Row>
  );
}

export default Dashboard;
