import { Dropdown, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import logoColor from "../../assets/img/logo-color.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" >
                <Navbar.Brand href="#home">
                    <img
                        src={logoColor}
                        height="80"
                        className="d-inline-block align-middle ps-2"
                        alt="Tangerine Games logo"
                    />
                    <span className="text-primary d-none d-lg-block">Tangerine Games</span>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
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
            <CartWidget />

        </Navbar>
        
    )
}