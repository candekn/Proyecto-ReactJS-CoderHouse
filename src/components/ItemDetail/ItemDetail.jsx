import { Row, Col, Image, Badge, Container, Card, Button, Alert } from "react-bootstrap";
import parse from 'html-react-parser';
import { useState } from "react";
import { AddToCart } from "../AddToCart/AddToCart";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({ producto }) => {
    const { id, title, year, format, price, genre, platform, description, stock, image } = producto;
    const [activePlatform, setActivePlatform] = useState();
    const [showFormat, setShowFormat] = useState(false);
    const [activeFormat, setActiveFormat] = useState();
    const [showAddToCart, setShowAddToCart] = useState(false);
    const navigate = useNavigate();

    const mostrarBotonesFormato = (platformName) => {
        setShowFormat(!showFormat);
        if (activePlatform == null) {
            setShowFormat(true);
        }
        setActivePlatform(platformName);
    }

    const mostrarAgregarCarrito = (format) => {
        setShowAddToCart((showFormat && (format != activeFormat) && ((format == 'Fisico' && producto.stock > 0) || format == 'Digital')))
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
                        <img src={image} height={500} width={700} className="fit-image-detail" />
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
                            <small>{genre.map((gen, i) => <Badge key={i.toString()} bg="info" text="light" className='me-1'>{gen}</Badge>)}</small>
                        </div>
                        <section className="pe-3 py-2">
                            {parse(description)}
                            <br />
                            <Row>
                                <Col md={12} lg={6}>
                                    <div className="d-flex justify-content-start gap-2">
                                        {
                                            platform.map(
                                                (plat, i) =>
                                                    <Button key={i.toString()} size="sm" className="my-3" variant="outline-primary"
                                                        active={(activePlatform == plat && showFormat)}
                                                        onClick={() => mostrarBotonesFormato(plat)}>
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
                                                            active={(activeFormat == f && showAddToCart)}
                                                            onClick={() => mostrarAgregarCarrito(f)}>
                                                            {f.toUpperCase()}
                                                        </Button>
                                                )
                                            }
                                        </div>
                                    }
                                </Col>
                                <Col md={12} lg={6} className='my-3'>
                                    <AddToCart disabled={(!showAddToCart)} game={producto} format={activeFormat} platform={activePlatform} />
                                </Col>
                            </Row>
                        </section>
                    </Container>
                    <Col md={12} lg={6}>
                        {
                            activeFormat == 'Fisico'
                            &&
                            <div className="text-info text-center">
                                <p>
                                    ⚠️ Juegos en formato físico están sujetos a stock
                                </p>
                                <p>
                                    <span className="fst-italic">
                                    {producto.stock > 0 ? `Disponibles: ${producto.stock}` : 'No hay stock'}
                                    </span>
                                </p>
                            </div>
                        }
                    </Col>
                </Col>
            </Row>

        </>
    )
}