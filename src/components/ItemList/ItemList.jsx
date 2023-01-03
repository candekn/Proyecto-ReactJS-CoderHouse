import { Container } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({productos = []}) => {
    return (
        <Container className="d-flex flex-wrap justify-content-around">
            {
                productos.length > 0  
                ? productos.map((producto) => <Item key={producto.id} product={producto}  />)
                : <h3> No se encuentran productos 🥺</h3> 
            }
        </Container>
    )
}

