import { Row, Col, Image, Badge, Container, Card, Button } from "react-bootstrap";
import parse from 'html-react-parser';
import { useState } from "react";
import { ShippingCalculator } from "../ShippingCalculator/ShippingCalculator";
import { AddToCart } from "../AddToCart/AddToCart";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({ producto }) => {
    const { id, title, year, format, price, genre, platform, description, stock, image } = producto;
    const [activePlatform, setActivePlatform] = useState('a');
    const [showFormat, setShowFormat] = useState(false);
    const [activeFormat, setActiveFormat] = useState('a');
    const [showAddToCart, setShowAddToCart] = useState(false);

    const navigate = useNavigate();
    
    const mostrarBotonesFormato = (idPlatform) =>{
        setShowFormat(!showFormat);
        if(activePlatform == 'a'){
            setShowFormat(true);
        }
        setActivePlatform(idPlatform);
    }

    const mostrarAgregarCarrito = (format) =>{
        setShowAddToCart((showFormat && (format != activeFormat)))
        setActiveFormat(format)
    }

    const volverAtras = () => {
        navigate(-1)
    }
    
    return (
        
        <>         
        <Row className="my-3 mx-4">
        <Col md={1} lg={1}>
            <h4>

            <Button variant="outline-primary" onClick={volverAtras}> Atrás </Button>
            </h4>
        </Col>
        </Row> 
        <Row className="mx-2">
            <Col md={12} lg={6}>
            <div className="m-lg-3">
                <Image thumbnail src={image} />
            </div>
            </Col>
            <Col md={12} lg={6}>
                <Container fluid className="mt-3">
                    <div className="my-2 text-info text-end">
                        <small>Lanzamiento: {year}</small>
                    </div>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <div className='d-flex justify-content-between my-2'>
                        <small>{ genre.map((gen, i) => <Badge key={i.toString()} bg="info" text="light" className='me-1'>{gen}</Badge>)   }</small>
                    </div>
                    <section className="pe-3 py-2">
                        { parse(description) }
                    <br/>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="d-flex justify-content-start gap-2">
                                {
                                    platform.map(
                                        (plat, i) => 
                                    <Button key={i.toString()} size="sm" className="my-3" variant="outline-primary" 
                                    active={ (activePlatform == i && showFormat) }
                                    onClick={() => mostrarBotonesFormato(i)}>
                                        {plat.toUpperCase().replace('-', ' ')}
                                    </Button>)
                                    
                                }
                            </div>
                            {
                            showFormat &&
                            <div className="d-flex justify-content-start gap-2">
                                        {
                                            format.map(
                                                (f, i) => 
                                            <Button key={i.toString()} size="sm" variant="outline-primary" 
                                            active= { (activeFormat == f && showAddToCart) }
                                            onClick={() => mostrarAgregarCarrito(f)}>
                                                {f.toUpperCase()}
                                            </Button>
                                            )                                           
                                        }
                            </div> 
                            }
                        </Col>
                        <Col md={12} lg={6} className='my-3'>
                            <AddToCart disabled={(!showAddToCart)}/>
                        </Col>
                    </Row>
                    </section>
                </Container>
                    <Col md={12} lg={6}>
                    {
                        showAddToCart && showFormat && activeFormat == 'Fisico' 
                        && 
                        <Card className="p-2 mt-3">
                                <ShippingCalculator />
                        </Card>
                        
                    }
                    </Col>
            </Col>
        </Row>

        </>
    )
}