import { useState } from 'react'
import { Button } from 'react-bootstrap'
import {  useCartContext } from '../../context/CartContext';

export const AddToCart = ({disabled=false, game}) => {
    const [texto, setTexto] = useState('Agregar al carrito');
    const [variant, setVariant] =  useState('primary');

    const { agregarAlCarrito } = useCartContext();
    const cambiarTexto = () => {
        setTimeout(() => {
            setTexto('Producto Agregado! ✅');
            setVariant('success')
        }, 500);
        setTimeout(() => {
            setTexto('Agregar al carrito')
            setVariant('primary')
        }, 2000)
    }

    return (
        <Button variant={variant} className='mt-2' 
        onClick={() => agregarAlCarrito(game)}
        disabled={disabled}>{texto}</Button>
    )
}
