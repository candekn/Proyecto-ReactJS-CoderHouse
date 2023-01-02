import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Row, Col, Container } from 'react-bootstrap';
import { CarouselComponent } from './components/CarouselComponent/CarouselComponent';

function App() {

  return (
        <main>
          <NavBar />
          <Container fluid>
          <CarouselComponent />
            <Row>
              <Col lg={4}></Col>
              <Col><ItemListContainer /></Col>
            </Row>
          </Container>      
        </main>

  )
}

export default App
