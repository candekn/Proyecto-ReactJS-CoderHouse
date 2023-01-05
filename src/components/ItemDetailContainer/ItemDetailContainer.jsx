import React from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../data/getDataMock';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { productID } = useParams();
    useEffect(() => {
        getProduct(productID)
            .then((res) => {
                setProducto(res)
            })
    }, [])

    return (
        <>
        {
            producto && <ItemDetail />
        } 
        </>
    )
}