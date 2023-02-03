import { Button, Dropdown, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logoColor from "../../assets/img/logo-color.png";
import { useLoginContext } from "../../context/LoginContext";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    const { logout, user } = useLoginContext()
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout();
        navigate('/');
    }



    return (
        <Navbar bg="dark" expand="lg" variant="dark"  >
            <Navbar.Toggle aria-controls="navbar-nav" className="me-0 mx-2" />
            <Navbar.Brand>
                <Link to="/">
                <img
                    src={logoColor}
                    height="80"
                    className="d-inline-block align-middle ps-2"
                    alt="Tangerine Games logo"
                />               
                <span className="text-primary d-none d-lg-inline-block align-middle" >Tangerine Games</span>
                </Link>
            </Navbar.Brand>
            <span className="d-lg-none ms-lg-auto">
                <CartWidget />
            </span>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mx-auto mx-lg-0 ms-lg-auto px-2">
                    {user.logged 
                    && <NavDropdown title={(`Hola, ${user.name}!`.toUpperCase())}>
                            <Link className="dropdown-item" to="/mis-compras">Mis Compras</Link>
                            <Button  className="dropdown-item" onClick={handleLogOut}>Salir</Button>
                        </NavDropdown>
                    }
                    <Link  className="nav-link" to="/">INICIO</Link>
                    <NavDropdown title="JUEGOS" menuVariant="dark">
                        <Link to="/juegos" className="dropdown-item">Todos los juegos</Link> 
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Header>Plataformas</NavDropdown.Header>
                        <Link className="dropdown-item" to="/juegos/plataforma/pc">PC</Link> 
                        <Link className="dropdown-item" to="/juegos/plataforma/playstation-5">Playstation 5</Link>
                        <Link className="dropdown-item" to="/juegos/plataforma/switch">Switch</Link>
                    </NavDropdown>
                    <Link to="/nosotros" className="nav-link">NOSOTROS</Link> 
                </Nav>
            </Navbar.Collapse>
            <span className="d-none d-lg-inline-block ms-lg-auto">
                <CartWidget />
            </span>
        </Navbar>

    )
}