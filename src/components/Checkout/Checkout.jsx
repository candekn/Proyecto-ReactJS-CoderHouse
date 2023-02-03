import { addDoc, collection, doc, documentId, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore/lite";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row, Spinner } from "react-bootstrap"
import { LoginContext } from "../../context/LoginContext";
import { db } from "../../firebase/config";
import * as Yup from 'yup';
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { SuccessfulPurchase } from "../SuccessfulPurchase/SuccessfulPurchase";

const schema = Yup.object().shape({
    name: Yup.string().min(3, 'Mínimo 3 caracteres').max(30, 'Máximo 30 caracteres').required('Campo requerido!'),
    lastname: Yup.string().min(3, 'Mínimo 3 caracteres').max(30, 'Máximo 30 caracteres').required('Campo requerido!'),
    address: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Campo requerido!'),
    zipcode: Yup.number().min(1000, 'Numero postal inválido').max(9999, 'Numero postal inválido').required('Campo requerido!'),
    cardnumber: Yup.string().matches(/^4[0-9]{13,17}\d+$/, 'Número de tarjeta inválido').required('Campo requerido!'),
    code: Yup.string().matches(/[0-9]{3,4}/, 'Código de seguridad inválido').required('Campo requerido!'),
    validdate: Yup.string().matches(/(?:^|[^\/\d])(?:0?[1-9]|1[0-2])\/([2-9]{1}[3-9]{1})/, 'Fecha de expiración inválida').required('Campo requerido!'),
    cardname: Yup.string().min(8, 'Mínimo 8 caracteres').max(50, 'Máximo 50 caracteres').required('Campo requerido!'),
})

export const Checkout = () => {
    const { user } = useContext(LoginContext);
    const { cart, precioTotal, vaciarElCarrito } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();
    const [ordenID, setOrdenID] = useState();
    const [sinStock, setSinStock] = useState([]);
    const userReference = doc(db, 'users', user.id);

    const navigate = useNavigate();


    useEffect(() => {
        getDoc(userReference)
            .then((res) => {
                const { name, lastname, address, zipcode } = res.data();
                setUserData({
                    name: name,
                    lastname: lastname,
                    address: address,
                    zipcode: Number(zipcode),
                    cardnumber: '',
                    code: '',
                    validdate: '',
                    cardname: `${name} ${lastname}`
                });
            })
    }, [])

    const crearOrden = async (values) => {
        setLoading(true)
        const orden = {
            user: {
                id: user.id,
                email: user.email,
                address: values.address,
                zipcode: values.zipcode
            },
            order: cart,
            date: new Date(Date.now()).toLocaleString(),
            status: 'Generada',
            total: precioTotal()
        }
        const sinStockArr = [];
        let cartFiltrado = [];

        const batch = writeBatch(db);
        const ordersRef = collection(db, 'orders');
        const gamesRef = collection(db, 'games');

        //Filtro por formato fisico, para no quitar stock a juegos en formato digital
        cartFiltrado = [... new Set(cart.filter(c => c.format == 'Fisico'))];

        if(cartFiltrado.length > 0){
            const queryGamesRef = query(gamesRef, where( documentId(), 'in', cartFiltrado.map(c => c.id) ) );       
            const games = await getDocs(queryGamesRef);  
            games.docs.forEach(game => {
                const cartItem = cartFiltrado.find(c => c.id === game.id)
                if (game.data().stock >= cartItem.cantidad) {
                    batch.update(game.ref, {
                        stock: (game.data().stock - cartItem.cantidad)
                    })
                } else {
                    sinStockArr.push(cartItem)
                }
            })         
        }

        if (sinStockArr.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setLoading(false);
                            setOrdenID(doc.id)
                            vaciarElCarrito()
                        })
                        .catch((error) => console.error(error))
                })
        } 
        else {
            setSinStock(sinStockArr);
        }
    }


    const handleClose = () => {
        navigate(-1)
    }

    if (ordenID) {
        return (
            <SuccessfulPurchase ordenID={ordenID} />
        )
    }

    if (cart.length === 0) {
        navigate('/')
    }

    return (
        <>
        {
            sinStock.length > 0 
            ?
            <Container fluid className="d-flex flex-column justify-content-center text-center mt-5">

                <h3 className="text-danger mb-3">Hay productos sin stock 🥺</h3>
                    {
                        sinStock.map((s,i) =>
                            <p key={i.toString()} className="text-center">🤖 {s.title}</p>
                        )
                    }
                <Link to="/carrito" className="text-decoration-none text-secondary fs-5 my-3">Volver al Carrito</Link>
            </Container>
            :
                userData
                    ?
                    <Container fluid style={{maxWidth:'60em'}}>
                        <h3 className="text-center text-primary mt-3">Checkout</h3>
                        <div className="m-3">
                            <Formik initialValues={userData} validationSchema={schema} onSubmit={(v) => crearOrden(v)}>
                                {({
                                    values, handleChange, handleSubmit, errors
                                }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="m-2">
                                                    <Form.Label>Nombre:</Form.Label>
                                                    <Form.Control type="text" value={values.name} onChange={handleChange} name="name" placeholder="Ingrese su nombre..." />
                                                    {errors.name && <p className='invalid-feedback d-block'>{errors.name}</p>}
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="m-2">
                                                    <Form.Label>Apellido:</Form.Label>
                                                    <Form.Control type="text" value={values.lastname} onChange={handleChange} name="lastname" placeholder="Ingrese su apellido..." />
                                                    {errors.lastname && <p className='invalid-feedback d-block'>{errors.lastname}</p>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="m-2">
                                                    <Form.Label>Dirección:</Form.Label>
                                                    <Form.Control type="text" value={values.address} onChange={handleChange} name="address" placeholder="Calle, 123" />
                                                    {errors.address && <p className='invalid-feedback d-block'>{errors.address}</p>}
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="m-2">
                                                    <Form.Label>Código Postal:</Form.Label>
                                                    <Form.Control type="number" value={values.zipcode} onChange={handleChange} name="zipcode"  placeholder="1234" />
                                                    {errors.zipcode && <p className='invalid-feedback d-block'>{errors.zipcode}</p>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="m-2">
                                                    <Form.Label>Número de Tarjeta: (sin guiones ni espacios)</Form.Label>
                                                    <Form.Control type="text" value={values.cardnumber} onChange={handleChange} name="cardnumber" minLength={13} maxLength={17}  placeholder="4455 1234 1234 1234" />
                                                    {errors.cardnumber && <p className='invalid-feedback d-block'>{errors.cardnumber}</p>}
                                                </Form.Group>
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group className="m-2">
                                                    <Form.Label>Código de Seguridad:</Form.Label>
                                                    <Form.Control type="text" value={values.code} onChange={handleChange} name="code" maxLength={4}  placeholder="000" />
                                                    {errors.code && <p className='invalid-feedback d-block'>{errors.code}</p>}
                                                </Form.Group>
                                            </Col>
                                            <Col lg={3}>
                                                <Form.Group className="m-2">
                                                    <Form.Label>Fecha de Vencimiento:</Form.Label>
                                                    <Form.Control type="text" value={values.validdate} onChange={handleChange} name="validdate" maxLength={5}  placeholder="01/23" />
                                                    {errors.validdate && <p className='invalid-feedback d-block'>{errors.validdate}</p>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-center gap-4 mt-5">
                                            <Button variant="info" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                            <Button variant="primary" onClick={handleSubmit}>
                                                {loading ? 'Compra en curso...' : 'Comprar'}
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Container>
                    :
                    <Spinner animation="border" variant="warning" className="m-5" />
            }
        </>
    )
}