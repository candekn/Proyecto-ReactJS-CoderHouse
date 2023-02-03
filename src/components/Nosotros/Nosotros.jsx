import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import logoColor from "../../assets/img/logo-color.png";
import { FaShippingFast, FaPaperPlane  } from "react-icons/fa";
import dancing from "../../assets/img/dancing.gif";

export const Nosotros = () => {
    return (
        <Container>
        <Row className='mx-5'>
            <Col lg={3} className="d-flex flex-column justify-content-end align-items-center">
            <Image src={dancing} width={150} />
            </Col>
            <Col lg={6}className="d-flex flex-column justify-content-start align-items-center">
            <h1 className='text-primary my-3'>Tangerine Games</h1>
                <h4> 
                    Somos la mejor tienda argentina de videojuegos </h4>
                    <h4>Con los precios más bajos del mercado
                </h4>
            </Col>
            <Col lg={3} className="d-flex justify-content-start align-items-center my-3">
                <Image src={logoColor} width={150} />
            </Col>
        </Row>
            <article className='m-5 text-center'>
 
                <h5>
                    <FaShippingFast color='#f28500' size={80}/> Contamos con muchos sistemas de envíos para que puedas recibir tu producto desde
                    cualquier parte del país. <FaShippingFast color="#f28500" size={80} /> 
                </h5>
                <h5>
                    Y, en caso de ser de un país diferente a Argentina... 
                </h5>
                <h5>
                    ¡No te preocupes! comprando en formato digital, aún puedes recibir tu videojuego favorito, estés donde estés. <FaPaperPlane color='#f28500' size={25} />
                </h5>
            </article>
        </Container>
    )
}
