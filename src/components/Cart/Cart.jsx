import { useContext, useEffect } from "react"
import { Container, Row, Col, Image, Badge, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount";

export const Cart = () => {
    const {cantidadTotal, cart, precioTotal, vaciarElCarrito} = useContext(CartContext);
    const handleCheckout = () => {
        alert("Compra realizada!")
    }
    const handleVaciarElCarrito = () => {
        vaciarElCarrito();
    }
    return (
        <Container>
            {
                (cantidadTotal() == 0)
                ?   <div className="text-center m-5">
                        <h2>Tu carrito está vacío 😐</h2>
                        <Link to='/juegos' className="text-primary dropdown-item">Vamos a comprar</Link>
                    </div>
                : 
                <>
                <Table responsive>
                    <thead className="text-center fs-4 text-primary">
                        <th></th>
                        <th>Juego</th> 
                        <th>Cantidad</th> 
                        <th>Precio</th> 
                        <th>Total</th>
                    </thead>
                    <tbody className="text-center">
                        {cart.map((c, i) => 
                            <tr key={i.toString()}>
                                <td className="text-center">
                                    <Image rounded thumbnail src={c.image}  className="fit-image" style={{maxHeight:'5em'}}/></td>
                                    <td>
                                    <span>
                                        {c.title}
                                    </span>  
                                    <br/>
                                    <Badge bg="info" text="light" className='me-1'>{c.format}</Badge>
                                    <Badge bg="info" text="light" className='me-1'>{c.platform.toUpperCase()}</Badge>
                                </td>
                                <td><ItemCount itemCantidad={c.cantidad} item={c} /></td>
                                <td>${c.price}</td>
                                <td>${c.price * c.cantidad}</td>
                            </tr>
                        )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center fs-4 text-primary fw-bold">${precioTotal()}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="d-flex justify-content-around">
                    <Button variant="info" onClick={handleVaciarElCarrito}>Vaciar el Carrito</Button>
                    <Button variant="primary" onClick={handleCheckout}>Comprar</Button>
                </div>
                </>

                

            }
        </Container>
        
    )
}