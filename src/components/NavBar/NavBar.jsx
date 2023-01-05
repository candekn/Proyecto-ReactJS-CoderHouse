import { Dropdown, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoColor from "../../assets/img/logo-color.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Navbar.Toggle aria-controls="navbar-nav" className="me-0 mx-2" />
            <Navbar.Brand href="#home">
                <img
                    src={logoColor}
                    height="80"
                    className="d-inline-block align-middle ps-2"
                    alt="Tangerine Games logo"
                />
                <span className="text-primary d-none d-lg-inline-block align-middle" >Tangerine Games</span>
            </Navbar.Brand>
            <span className="d-lg-none ms-lg-auto">
                <CartWidget />
            </span>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mx-auto mx-lg-0 ms-lg-auto px-2">
                    <Link to="/">INICIO</Link>
                    <NavDropdown title="JUEGOS" menuVariant="dark">
                        <NavDropdown.Header>Explorar</NavDropdown.Header>
                        <NavDropdown.Item>Novedades</NavDropdown.Item>
                        <NavDropdown.Item>Próximamente</NavDropdown.Item>
                        <NavDropdown.Item><Link to="juegos">Todos los juegos</Link> </NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Header>Plataformas</NavDropdown.Header>
                        <NavDropdown.Item><Link to="juegos/pc">PC</Link> </NavDropdown.Item>
                        <NavDropdown.Item><Link to="juegos/playstation-5">Playstation 5</Link> </NavDropdown.Item>
                        <NavDropdown.Item><Link to="juegos/switch">Switch</Link> </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink>MERCHANDISING</NavLink>
                    <NavLink>NOSOTROS</NavLink>
                </Nav>
            </Navbar.Collapse>
            <span className="d-none d-lg-inline-block ms-lg-auto">
                <CartWidget />
            </span>
        </Navbar>

    )
}