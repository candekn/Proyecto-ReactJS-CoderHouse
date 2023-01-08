import { Row, Col, Image } from "react-bootstrap"

export const ItemDetail = ({ producto }) => {
    const { id, title, year, price, genre, platform, stock, image } = producto;
    return (
        <Row>
            <Col md={12} lg={6}>
                <Image src={image}></Image>
            </Col>
            <Col md={12} lg={6}>
                <h1>{title}</h1>
                <h4>${price}</h4>
                <div className='d-flex justify-content-between'>
                    <small>{ genre.map((gen, i) => <Badge key={i.toString()} bg="info" text="light" className='me-1'>{gen}</Badge>)   }</small>
                </div>
            </Col>
        </Row>
    )
}