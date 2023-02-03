import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { Nosotros } from '../components/Nosotros/Nosotros';
import { NotFound } from '../components/NotFound/NotFound';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, Navigate } from "react-router-dom"
import { Index } from "../components/Index/Index";
import { Cart } from '../components/Cart/Cart';
import { Checkout } from '../components/Checkout/Checkout';
import { MyPurchases } from '../components/MyPurchases/MyPurchases';

const PrivateRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/juegos' element={ <ItemListContainer />} />
            <Route path='/juegos/plataforma/:plataforma' element={ <ItemListContainer />} />
            <Route path='/juegos/detalle/:id' element={ <ItemDetailContainer /> } />
            <Route path='/nosotros' element={ <Nosotros />} />
            <Route path='/carrito' element={ <Cart />} />
            <Route path='/checkout' element={ <Checkout /> } />
            <Route path="/login" element={ <Navigate to="/" /> }/>
            <Route path="/mis-compras" element={ <MyPurchases/> }/>
            <Route path='*' element={ <NotFound />} />
        </Routes>  
    )
}

export default PrivateRoutes