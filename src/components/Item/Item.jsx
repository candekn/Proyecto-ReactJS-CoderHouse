import { Button, Card } from 'react-bootstrap';
import fairy from '../../assets/img/fairy-ships-war.png';
import { useState } from "react";
import { AddToCart } from "../AddToCart/AddToCart";
export const Item = ({ product }) => {
    const [show, setShow] = useState(false);

    const showDescription = () => setShow(true);
    const hideDescription = () => setShow(false);
    return (
        <Card bg="dark" text="light" style={{ width: '15rem' }}
            onMouseEnter={showDescription}
            onMouseLeave={hideDescription} >
            <Card.Header>
                <div className='bg-dark text-light text-center bg-opacity-50' >
                    <Card.Title className='user-select-none py-1 h-1 zen-font'>Fairy War</Card.Title>
                </div>              
            </Card.Header>
            <Card.Img variant="top" src={fairy}  />
            <Card.Body className='bg-dark text-light'>
                <div className='d-flex justify-content-between'>
                    <a>Aventura</a>
                    <p>$5000</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <AddToCart />
                </div>
            </Card.Body>

        </Card>
    )
}
