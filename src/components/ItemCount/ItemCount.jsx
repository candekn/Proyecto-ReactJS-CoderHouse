import { doc, getDoc } from "firebase/firestore/lite";
import { useContext, useEffect, useState } from "react"
import { ButtonGroup, Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { BsTrash } from "react-icons/bs";
export const ItemCount = ({itemCantidad, item}) => {


    const [cantidad, setCantidad] = useState(itemCantidad);
    const {agregarAlCarrito, quitarCantidadDelCarrito, eliminarDelCarrito} = useContext(CartContext);
    const [stock, setStock] = useState(1);

    const sumarCantidad = () => {
        if ((cantidad < stock && item.format == 'Fisico') || item.format == 'Digital') {
            setCantidad(cantidad + 1)
            agregarAlCarrito(item)
        }
    }

    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
            quitarCantidadDelCarrito(item)
        }
    }

    const eliminarItemDelCarrito = () => {
        eliminarDelCarrito(item)
    }

    useEffect(() => {
        const gameReference = doc(db, 'games', item.id);
        getDoc(gameReference)
        .then((res) => {
            setStock(res.data().stock)
        })
    })

    return (
        <div >
            <div className="d-flex justify-content-center">
                <ButtonGroup style={{maxWidth:'102px'}}>
                    {cantidad > 1 
                    ? <Button variant="secondary" onClick={restarCantidad}> - </Button>
                    : <Button variant="secondary" onClick={eliminarItemDelCarrito}> <BsTrash /> </Button>}
                    <Button variant="secondary">{cantidad}</Button>
                    <Button variant="secondary" onClick={sumarCantidad}> + </Button>
                </ButtonGroup>
            </div>
            {
                item.format == 'Fisico' &&
                <span className="text-muted fst-italic">{stock} disponibles</span>
            }
        </div>
    )
}