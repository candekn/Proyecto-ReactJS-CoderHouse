import { Routes, Route, Navigate } from "react-router-dom"
import { Index } from "../components/Index/Index"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { Login } from "../components/Login/Login"
import { Nosotros } from "../components/Nosotros/Nosotros"
import { SignUp } from "../components/SignUp/SignUp"

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path="/login" element={ <Login /> }/>
            <Route path="/registro" element={ <SignUp />} />
            <Route path='/juegos' element={ <ItemListContainer />} />
            <Route path='/juegos/plataforma/:plataforma' element={ <ItemListContainer />} />
            <Route path='/nosotros' element={ <Nosotros />} />
            <Route path='*' element={ <Navigate to="/login"/> } />
        </Routes>
    )
}

export default PublicRoutes