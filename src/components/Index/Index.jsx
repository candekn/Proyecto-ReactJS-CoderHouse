import { Container } from 'react-bootstrap';
import { useLoginContext } from '../../context/LoginContext';
import { CarouselComponent } from '../CarouselComponent/CarouselComponent';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const Index = () => {
    const { user } = useLoginContext();
    return (
        <Container fluid>
            <CarouselComponent />
            {user.logged && <h4 className='mx-3'>¡Hola de nuevo, {user.name}!</h4>}
                <ItemListContainer showTitle={false} />
        </Container>
    )
}