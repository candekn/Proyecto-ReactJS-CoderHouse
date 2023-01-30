import { useState } from 'react'
import { Button } from 'react-bootstrap'
import {  useCartContext } from '../../context/CartContext';

export const AddToCart = ({disabled=false, game, format, platform}) => {
    const [texto, setTexto] = useState('Agregar al carrito');
    const [variant, setVariant] =  useState('primary');

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
    }

    return (
        <Button variant={variant} className='mt-2' 
        onClick={agregar}
        disabled={disabled}>{texto}</Button>
    )
}
