import { Dropdown, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
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
                    <NavLink>INICIO</NavLink>
                    <NavDropdown title="JUEGOS" menuVariant="dark">
                        <NavDropdown.Header>Explorar</NavDropdown.Header>
                        <NavDropdown.Item>Novedades</NavDropdown.Item>
                        <NavDropdown.Item>Próximamente</NavDropdown.Item>
                        <NavDropdown.Item>Todos los juegos</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Header>Plataformas</NavDropdown.Header>
                        <NavDropdown.Item>PC</NavDropdown.Item>
                        <NavDropdown.Item>Playstation 5</NavDropdown.Item>
                        <NavDropdown.Item>Switch</NavDropdown.Item>
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