import { useState } from "react"
import { ButtonGroup, Button } from "react-bootstrap";

export const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1);
    const stock = 10;

    const sumarCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <ButtonGroup className="m-5">
            <Button variant="secondary" onClick={restarCantidad}> - </Button>
            <Button variant="secondary">{cantidad}</Button>
            <Button variant="secondary" onClick={sumarCantidad}> + </Button>
        </ButtonGroup>
    )
}