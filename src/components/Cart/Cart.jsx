import { useContext, useEffect } from "react"
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount";

export const Cart = () => {
    const {cantidadTotal, cart} = useContext(CartContext);

    return (
        <Container>
            {
                (cantidadTotal() == 0)
                ?   <div className="text-center m-3">
                        <h2>Tu carrito está vacío 😐</h2>
                        <Link to='/juegos' className="text-primary dropdown-item">Vamos a comprar</Link>
                    </div>
                : 
                <Container fluid>
                <Row className="text-center h3">
                    <Col lg={4}>Juego</Col> 
                    <Col lg={3}>Cantidad</Col> 
                    <Col lg={2}>Precio</Col> 
                    <Col lg={2}>Total</Col>
                </Row>
                {cart.map((c, i) => 
                <Row className="text-center d-flex align-items-center border-bottom my-2" key={i.toString()}>
                    <Col lg={2}><Image rounded thumbnail src={c.image}  className="fit-image" style={{maxHeight:'5em'}}/></Col>
                    <Col lg={2}>
                        {c.title}  <br/>
                        <Badge bg="info" text="light" className='me-1'>{c.format}</Badge>
                        <Badge bg="info" text="light" className='me-1'>{c.platform.toUpperCase()}</Badge>
                    </Col>
                    <Col lg={3}><ItemCount itemCantidad={c.cantidad} item={c} /></Col>
                    <Col lg={2}>${c.price}</Col>
                    <Col lg={2}>${c.price * c.cantidad}</Col>
                </Row>
                )}
                
                </Container>
            }
        </Container>
        
    )
}