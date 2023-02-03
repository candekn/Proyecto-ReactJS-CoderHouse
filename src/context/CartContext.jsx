import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init);


    const agregarAlCarrito = (item) => {
        if(!verificarItem(item)){
            item.cantidad = 1;
            setCart([...cart, item]);
        }else{
            setCart(cart.map(c => {
                if(c.id == item.id && c.platform == item.platform && c.format == item.format){
                    c.cantidad++
                }
                return c
            }))
        }
    }
    
    const quitarCantidadDelCarrito = (item) => {
        setCart(cart.map(c => {
            if(c.id == item.id && c.platform == item.platform && c.format == item.format){
                c.cantidad--
            }
            return c
        }))
    }

    const eliminarDelCarrito = ({id, platform, format}) => {
        setCart(cart.filter(item => !(item.id === id && item.platform == platform && item.format == format)));
    }

    const verificarItem = ({id, platform, format}) => {
        const verify = cart.some(item => item.id === id && item.platform == platform && item.format == format);
        return verify
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
            eliminarDelCarrito,
            verificarItem,
            vaciarElCarrito,
            cart,
            quitarCantidadDelCarrito,
            cantidadTotal,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
)
}