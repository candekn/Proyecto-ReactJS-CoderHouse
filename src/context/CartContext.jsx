import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init);

    const agregarAlCarrito = (item) => {
        setCart([...cart, item]);
    }

    const quitarDelCarrito = (item) => {
        setCart(cart.filter(item => item.id != id));
    }

    const verificarItem = (id) => {
        return cart.some(item => item.id === id);
    }

    const vaciarElCarrito = () => {
        setCart([]);
    }

    const cantidadTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    return (
        <CartContext.Provider value={{ 
            agregarAlCarrito,
            quitarDelCarrito,
            verificarItem,
            vaciarElCarrito,
            cantidadTotal,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
)
}