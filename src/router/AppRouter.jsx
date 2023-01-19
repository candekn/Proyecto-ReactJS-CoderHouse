import { BrowserRouter } from "react-router-dom"
import { NavBar } from "../components/Navbar/Navbar"
import { useLoginContext } from "../context/LoginContext"
import PrivateRoutes from "./PrivateRouter"
import PublicRoutes from "./PublicRouter"

export const AppRouter = () => {
    const { user } = useLoginContext()

    return (
        <BrowserRouter>
            <NavBar />
            { user.logged 
                ? <PrivateRoutes />
                : <PublicRoutes />
            }
        </BrowserRouter>
    )
}