import { Row, Col, Image, Badge, Container } from "react-bootstrap"

export const ItemDetail = ({ producto }) => {
    const { id, title, year, price, genre, platform, description, stock, image } = producto;
    return (
        <Row>
            <Col md={12} lg={6}>
            <div className="m-3">

                <Image fluid src={image}></Image>
            </div>
            </Col>
            <Col md={12} lg={6}>
                <Container fluid className="mt-3">
                <h1>{title}</h1>
                <h4>${price}</h4>
                <div className='d-flex justify-content-between my-2'>
                    <small>{ genre.map((gen, i) => <Badge key={i.toString()} bg="info" text="light" className='me-1'>{gen}</Badge>)   }</small>
                </div>
                <section className="pe-3 py-3">
                    {description}
                </section>
                </Container>
            </Col>
        </Row>
    )
}