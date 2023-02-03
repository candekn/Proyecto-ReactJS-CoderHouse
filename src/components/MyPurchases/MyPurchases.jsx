import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { useContext, useEffect, useState } from "react"
import { Accordion, Container, Table, Image, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { db } from "../../firebase/config";


export const MyPurchases = () => {
    const { user } = useContext(LoginContext);
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const ordersRef = collection(db, 'orders');
        setLoading(true);
        const q = query(ordersRef, where('user.id', '==', user.id));
        getDocs(q)
            .then((res) => {
                setOrdenes(res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }));
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    return (
        <Container fluid>
        <h4 className='m-3 text-primary'>Mis Compras</h4>
            {
                loading 
                ? <Spinner variant="primary" className="justify-align-center" />
                :
                ordenes.length === 0
                    ? <div className="d-flex justify-content-center flex-column">
                        <h3 className="text-center">Aún no realizaste ninguna compra 🥺</h3>
                        <Link className="text-decoration-none text-center fs-3 text-primary" to="/juegos">¡Compremos!</Link>
                    </div>
                    : <Accordion className="m-5">
                        {ordenes.map((o, i) =>
                            <Accordion.Item key={i.toString()} eventKey={i.toString()}>
                                <Accordion.Header className="text-primary">Orden <strong className="ms-2">#{o.id}</strong></Accordion.Header>
                                <Accordion.Body>
                                    <Table responsive>
                                        <thead className="text-center fs-4 text-primary">
                                            <tr>
                                                <th className="text-success"><span className="me-2">{o.status}</span>{o.date.split(',')[0]}</th>
                                                
                                                <th>Juego</th>
                                                <th>Plataforma</th>
                                                <th>Formato</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {
                                                o.order.map((g, j) =>
                                                    <tr key={j.toString()}>
                                                        <td className="text-center">
                                                            <Image rounded thumbnail src={g.image} className="fit-image" style={{ maxHeight: '5em' }} /></td>
                                                        <td>
                                                            <span>
                                                                {g.title}
                                                            </span>
                                                        </td>
                                                        <td>{g.platform.toUpperCase()}</td>
                                                        <td>{g.format}</td>
                                                        <td>{g.cantidad}</td>
                                                        <td>${g.price}</td>
                                                    </tr>
                                                )
                                            }
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-center fs-5 text-primary fw-bold">Total:</td>
                                                <td className="text-center fs-5 fw-bold">${o.total}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
            }


        </Container>
    )
}