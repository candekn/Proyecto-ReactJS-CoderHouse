import { doc, getDoc } from "firebase/firestore/lite";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import { LoginContext } from "../../context/LoginContext";
import { db } from "../../firebase/config";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Campo requerido!'),
    address: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Campo requerido!'),
    email: Yup.string().email('El email no es válido').required('Campo requerido!'),
    lastname: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Campo requerido!'),
    zipcode: Yup.number().min(4, 'Numero postal inválido').max(4, 'Numero postal inválido').required('Campo requerido!'),
    cardnumber: Yup.string().matches('/^4[0-9]\d+$/', 'Número de tarjeta inválido'),
    code: Yup.number().min(3, 'Mínimo 3 números').max(4, 'Máximo 4 números').required('Campo requerido!'),
    validdate: Yup.string().matches('^\d{2}\/\d{2}$', 'Fecha de expiración inválida').required('Campo requerido!'),
    cardname: Yup.string().min(8, 'Mínimo 8 caracteres').max(50, 'Máximo 50 caracteres').required('Campo requerido!'),
})

export const Checkout = () => {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState();
    const { user } = useContext(LoginContext)
    const handleClose = () => setShow(false);
    useEffect(() => {
        const userReference = doc(db, 'users', user.id);
        getDoc(userReference)
            .then((res) => {
                setUserData({ ...res.data(), id: res.id })
                setUserData(
                    {
                        email: res.data().email,
                        name: res.data().name,
                        lastname: res.data().lastname,
                        address: res.data().address,
                        zipcode: res.data().zipcode,
                        cardnumber: '',
                        code: '',
                        validdate: '',
                        cardname: `${res.data().name} ${res.data().lastname}`
                    }
                )
            })
    }, [])

    const createorder = (values) => {
        console.log(values)
    }
    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>Comprar</Button>
            <Modal show={show} onHide={handleClose} animation>
                <Modal.Header closeButton>
                    <Modal.Title>CheckOut</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={userData} validationSchema={schema} onSubmit={(v) => createorder(v)}>
                        {({
                            values, handleChange, handleSubmit, errors
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Group>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" value={values.email} onChange={handleChange} name="email"></Form.Control>
                                    {errors.email && <p className='invalid-feedback d-block'>{errors.email}</p>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control type="password" value={values.password} onChange={handleChange} name="password"></Form.Control>
                                    {errors.password && <p className='invalid-feedback d-block'>{errors.password}</p>}
                                </Form.Group>
                            </Form>
                        )} 
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Comprar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}