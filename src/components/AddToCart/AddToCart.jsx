import { useState } from 'react'
import { Button } from 'react-bootstrap'

export const AddToCart = ({productID}) => {
    const [texto, setTexto] = useState('Agregar al carrito');

    const cambiarTexto = () => {
        setTexto('Producto Agregado!');
        setTimeout(() => {
            setTexto('Agregar al carrito')
        }, 1000)
    }

    return (
        <Button variant='primary' className='pointer' 
        onClick={cambiarTexto}
        >{texto}</Button>
    )
}
