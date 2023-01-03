import { useEffect, useState } from "react";
import { getAllGames } from "../../data/getDataMock";
import { Spinner } from "react-bootstrap";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getAllGames()
            .then((res) => {
                setProductos(res)
            })
    }, [])


    return (
        <>
            {
                productos.length > 0 
                ? <ItemList productos={productos} />
                : <Spinner animation="border" variant="warning" className="m-5" />
            }
        </>
    )
}
