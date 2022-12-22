import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Row, Col, Container } from 'react-bootstrap';

function App() {

  return (
        <main>
          <NavBar />
          <Container fluid>
            <Row>
              <Col lg={4}></Col>
              <Col><ItemListContainer greeting='Tangerine Games es una desarrolladora y distribuidora de juegos para diversas plataformas' /></Col>
            </Row>
          </Container>      
        </main>

  )
}

export default App
