import { IconContext } from 'react-icons';
import {AiOutlineShoppingCart} from 'react-icons/ai';

export const CartWidget = () => {
    const cantidad = 1;
    return (
        <div className="icono-carrito">

            <IconContext.Provider value={{size:"2.25em", color:"#f28500"}} >
                <AiOutlineShoppingCart />
            </IconContext.Provider>

                

            <span className="text-light fs-5">{cantidad}</span>
        </div>
    )
}
