import { useState } from 'react'
import { Button } from 'react-bootstrap'

export const AddToCart = ({productID}) => {
    const [texto, setTexto] = useState('Agregar al carrito');
    const [variant, setVariant] =  useState('primary')
    const cambiarTexto = () => {
        setTexto('Producto Agregado! ✅');
        setVariant('success')
        setTimeout(() => {
            setTexto('Agregar al carrito')
            setVariant('primary')
        }, 1000)
    }

    return (
        <Button variant={variant} className='mt-2' 
        onClick={cambiarTexto}
        >{texto}</Button>
    )
}
