import { addDoc, collection, writeBatch } from "firebase/firestore/lite"
import { Formik } from "formik";
import { useContext } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { LoginContext } from "../../context/LoginContext";
import { db } from "../../firebase/config"

const schema = Yup.object().shape({
    name: Yup.string().min(3, 'Mínimo 3 caracteres').max(30, 'Máximo 30 caracteres').required('Campo requerido!'),
    lastname: Yup.string().min(3, 'Mínimo 3 caracteres').max(30, 'Máximo 30 caracteres').required('Campo requerido!'),
    address: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres'),
    zipcode: Yup.number().min(1000, 'Numero postal inválido').max(9999, 'Numero postal inválido'),
    email: Yup.string().email('El email no es válido').required('Campo requerido!'),
    password: Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{8,16}$/, 'La contraseña debe contener al menos: 8 caracteres, 1 mayúscula, 1 minúscula y 1 número').required('Campo requerido!')
})
export const SignUp = () => {
    const { login } = useContext(LoginContext);
    const navigate = useNavigate();
    const crearUsuario = (values) => {
        const batch = writeBatch(db);
        const usersRef = collection(db, 'users');
        batch.commit()
        .then(() => {
            addDoc(usersRef, values)
            .then((doc) => {
                if(doc.id)
                    navigate('/login')
            })
            .catch((error) => console.error(error))
        })

    }
    return (
        <Container fluid style={{ maxWidth: '50em' }}>
            <h3 className="text-primary my-3 fs-3">Registro</h3>
            <Formik initialValues={{
                name: '',
                lastname: '',
                address: '',
                zipcode: '',
                email: '',
                password: ''
            }} validationSchema={schema} onSubmit={(v) => crearUsuario(v)}>
                {({
                    values, handleChange, handleSubmit, handleReset, errors
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="m-2">
                                    <Form.Label>Nombre: *</Form.Label>
                                    <Form.Control type="text" value={values.name} onChange={handleChange} name="name" placeholder="Ingrese su nombre..." />
                                    {errors.name && <p className='invalid-feedback d-block'>{errors.name}</p>}
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="m-2">
                                    <Form.Label>Apellido: *</Form.Label>
                                    <Form.Control type="text" value={values.lastname} onChange={handleChange} name="lastname" placeholder="Ingrese su apellido..." />
                                    {errors.lastname && <p className='invalid-feedback d-block'>{errors.lastname}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="m-2">
                                    <Form.Label>Email: *</Form.Label>
                                    <Form.Control type="text" value={values.email} onChange={handleChange} name="email" placeholder="ejemplo@email.com" />
                                    {errors.email && <p className='invalid-feedback d-block'>{errors.email}</p>}
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="m-2">
                                    <Form.Label>Contraseña: *</Form.Label>
                                    <Form.Control type="password" value={values.password} onChange={handleChange} name="password" placeholder="Ingrese contraseña..." />
                                    {errors.password && <p className='invalid-feedback d-block'>{errors.password}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <h5 className="text-secondary">Datos de envío (opcional): </h5>
                            <Col lg={8}>
                                <Form.Group className="m-2">
                                    <Form.Label>Dirección:</Form.Label>
                                    <Form.Control type="text" value={values.address} onChange={handleChange} name="address" placeholder="Calle, 123" />
                                    {errors.address && <p className='invalid-feedback d-block'>{errors.address}</p>}
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="m-2">
                                    <Form.Label>Código Postal:</Form.Label>
                                    <Form.Control type="text" value={values.zipcode} onChange={handleChange} name="zipcode" placeholder="1234" />
                                    {errors.zipcode && <p className='invalid-feedback d-block'>{errors.zipcode}</p>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="my-3 d-flex justify-content-around">
                            <Button variant="info" type="reset" onClick={handleReset}>Cancelar</Button>
                            <Button variant="primary" type="submit" >Crear Cuenta</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}