import { useState } from 'react'
import { Button } from 'react-bootstrap'

export const AddToCart = ({disabled=false}) => {
    const [texto, setTexto] = useState('Agregar al carrito');
    const [variant, setVariant] =  useState('primary');
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
        onClick={cambiarTexto}
        disabled={disabled}>{texto}</Button>
    )
}
