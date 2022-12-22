import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { getData } from "../../data/getDataMock";
import { Item } from "../Item/Item";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getData()
            .then((res) => {
                setProductos(res)
            })
    }, [])


    return (
        <Container className="d-flex flex-wrap justify-content-around">
            {productos.length > 0 
            ? productos.map((producto) => <Item key={producto.id} product={producto} /> ) 
            : <Spinner animation="border" variant="warning" className="m-5" />}
        </Container>
    )
}

