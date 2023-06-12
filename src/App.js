import { Container } from 'react-bootstrap';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <>
      <Background />
      <Container>
        <Header />
        <MainContent />
      </Container>
    </>
  );
}

export default App;
