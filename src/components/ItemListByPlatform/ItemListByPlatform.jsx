import { useEffect, useState } from "react";
import { getGamesByPlatform } from "../../data/getDataMock";
import { Spinner } from "react-bootstrap";
import { ItemList } from "../ItemList/ItemList";

export const ItemListByPlatform = ({platform, limit}) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getGamesByPlatform(platform, limit)
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
