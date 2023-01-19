import { Row, Col, Container } from 'react-bootstrap';
import { useLoginContext } from '../../context/LoginContext';
import { CarouselComponent } from '../CarouselComponent/CarouselComponent';

export const Index = () => {
    const { login, user } = useLoginContext();
    return (
        <Container fluid>
            <CarouselComponent />
            {user.logged && <h4 className='mx-3'>¡Hola de nuevo, {user.name}!</h4>}
        </Container>
    )
}