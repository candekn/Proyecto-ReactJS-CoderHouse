import { useEffect, useState } from "react";
import { getAllGames } from "../../data/getDataMock";
import { Spinner } from "react-bootstrap";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {plataforma, genero} = useParams(); 
    useEffect(() => {
        if(plataforma){
            getGamesByPlatform(platform, limit)
            .then((res) => {            
                setProductos(res)
            })
        }
        else if(genero){

        }
        else{
            getAllGames()
                .then((res) => {
                    setProductos(res)
                })
        }
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
