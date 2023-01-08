import { useEffect, useState } from "react";
import { getAllGames, getGamesByPlatform } from "../../data/getDataMock";
import { Spinner } from "react-bootstrap";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [plataformaNombre, setPlataformaNombre] = useState("");
    const {plataforma} = useParams(); 
    useEffect(() => {
        if(plataforma){
            setPlataformaNombre(plataforma)
            getGamesByPlatform(plataforma)
            .then((res) => {            
                setProductos(res)
            })
        }
        else{
            getAllGames()
                .then((res) => {
                    setProductos(res)
                })
        }
    }, [plataforma])


    return (
        <>
            <h2 className="text-primary mx-5 my-3">{plataformaNombre.replace('-', ' ').toUpperCase()}</h2>
            {
                productos.length > 0 
                ? <ItemList productos={productos} />
                : <Spinner animation="border" variant="warning" className="m-5" />
            }
        </>
    )
}
