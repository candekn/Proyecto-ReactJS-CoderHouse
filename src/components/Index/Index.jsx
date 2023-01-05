import { Row, Col, Container } from 'react-bootstrap';
import { CarouselComponent } from './components/CarouselComponent/CarouselComponent';
import { ItemListByPlatform } from './components/ItemListByPlatform/ItemListByPlatform';

export const Index = () => {
    return (
        <Container fluid>
            <CarouselComponent />
            {
                platforms.map((plat) =>
                    <>
                        <Row key={plat} className='my-3'>
                            <Col>
                                <h3 className='mx-5 zen-font'>{plat}</h3>
                                <ItemListByPlatform platform={plat} limit={5} />
                            </Col>
                        </Row>
                        <hr />
                    </>
                )
            }
        </Container>
    )
}