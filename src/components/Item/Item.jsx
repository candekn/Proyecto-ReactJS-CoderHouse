import { Badge, Button, Card } from 'react-bootstrap';
export const Item = ({ product }) => {
    const { id, title, year, price, genre, platform, stock, image } = product;
    return (
        <Card bg="dark" text="light" className='my-3' style={{ width: '15rem' }} >
            <Card.Header style={{'height': '5rem'}}>
                <div className='bg-dark text-light text-center bg-opacity-50' >
                    <Card.Title className='user-select-none py-1 zen-font' as="h6">{title}</Card.Title>
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image} height="250" className='fit-image'/>
            <Card.Body className='bg-dark text-light'>
                <div className='d-flex justify-content-between'>
                    <small>{genre.map((gen, i) => <Badge key={i.toString()} bg="info" text="light" className='me-1'>{gen}</Badge>)   }</small>
                    <p>${price}</p>
                </div>
                <div className='d-flex justify-content-center'>
                <Button variant='primary' className='mt-2' 
                    >Detalles</Button>
                </div>
            </Card.Body>

        </Card>
    )
}
