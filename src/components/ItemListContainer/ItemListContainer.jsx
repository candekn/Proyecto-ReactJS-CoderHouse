import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

export const ItemListContainer = () => {
    const [games, setGames] = useState([]);
    const [plataformaNombre, setPlataformaNombre] = useState("");
    const {plataforma} = useParams(); 
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const gamesReference = collection(db, 'games');
        setLoading(true);
        if(plataforma){
            const q = query(gamesReference, where('platform', 'array-contains', plataforma));
            getDocs(q)
            .then((res) => {
                setGames(res.docs.map((doc) => {
                    return {
                        ...doc.data(), 
                        id: doc.id
                    }
                }));
            })  
            .finally(() => {
                setLoading(false);
            })
        }
        else{
            setPlataformaNombre("Todos los juegos")
            setLoading(true);
            getDocs(gamesReference)
            .then((res) => {
                setGames(res.docs.map((doc) => {
                    return {
                        ...doc.data(), 
                        id: doc.id
                    }
                }));
            })
            .finally(() => {
                setLoading(false);
            })
        }
    }, [plataforma])


    return (
        <>
            <h2 className="text-primary mx-5 my-3">{plataformaNombre.replace('-', ' ').toUpperCase()}</h2>
            {
                !loading 
                ? <ItemList productos={games} />
                : <Spinner animation="border" variant="warning" className="m-5" />
            }
        </>
    )
}
