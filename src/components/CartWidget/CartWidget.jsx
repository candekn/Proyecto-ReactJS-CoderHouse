import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { useLoginContext } from '../../context/LoginContext';

export const CartWidget = () => {
    const { user } = useLoginContext();
    const { cantidadTotal } = useCartContext();
    const [linkTo, setLinkTo] = useState('/login');
    useEffect(() => {
        setLinkTo(user.logged ? '/carrito' :'/login');
    }, [user, linkTo])
    return (
        <div className="icono-carrito">          
                <Link to={linkTo} style={{textDecoration:'none'}}>      
                    <IconContext.Provider value={{size:"2.25em", color:"#f28500"}} >
                        <AiOutlineShoppingCart />
                    </IconContext.Provider>
                    <span className="text-light fs-5">{cantidadTotal()}</span>
                </Link>
        </div>
    )
}
