import { useState } from 'react'
import { Button, Toast } from 'react-bootstrap'
import {  useCartContext } from '../../context/CartContext';

export const AddToCart = ({disabled=false, game, format, platform}) => {
    const [texto, setTexto] = useState('Agregar al carrito');
    const [showAlert, setShowAlert] = useState(false);

    const { agregarAlCarrito } = useCartContext();
    const agregar = () => {
        const {title, price, id, image} = game;
        const item = {
            format,
            id,
            image,
            platform,
            price,
            title,
        }
        agregarAlCarrito(item)
        setShowAlert(true);
    }

    return (
                <>
        <Toast className='custom-toast'
        show={showAlert} bg="success" delay={2000}
        onClose={() => setShowAlert(false)}
        animation autohide>
        <Toast.Body>
            Producto Agregado!
        </Toast.Body>
        </Toast>
        <Button variant='primary' className='mt-2' 
        onClick={agregar}
        disabled={disabled}>{texto}</Button>
                </>
    )
}
