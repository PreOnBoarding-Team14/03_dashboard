import styled from 'styled-components';
import Navbar from 'components/Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ASAA = styled.span``;
export default function Dashboard() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}
