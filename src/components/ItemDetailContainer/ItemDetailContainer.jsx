import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../data/getDataMock';
import { db } from '../../firebase/config';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const gameReference = doc(db, 'games', id);
        getDoc(gameReference)
        .then((res) => {
            setProducto({...res.data(), id: res.id})
        })
    }, [])

    return (
        <>
        {
            producto && <ItemDetail producto={producto} />
        } 
        </>
    )
}