import { Formik } from "formik"
import { useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import { useLoginContext } from "../../context/LoginContext"
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
    email: Yup.string().email('El email no es válido').required('Campo requerido!'),
    password: Yup.string().required('Campo requerido!')
})

export const Login = () => {
    const { login, user, loading } = useLoginContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (values) => {
        login(values);
    }
    const clearInput = () => {
        setValues({
            email: '',
            password: ''
        })
    }

    return (
        <Container className="d-flex justify-content-center">
            <div style={{ 'maxWidth': '25em' }}>
                <Formik initialValues={values} validationSchema={schema} onSubmit={(v) => handleSubmit(v)}>
                    {({
                        values, handleChange, handleSubmit, errors
                    }) => (
                    
                <Form onSubmit={handleSubmit} >
                    <h2 className="text-center mt-3">¡Bienvenido!</h2>
                    <hr />
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
                    {user.error && <p className='invalid-feedback d-block'>{user.error}</p>}
                    <div className="my-3 d-flex justify-content-around">
                        <Button variant="primary" type="submit" disabled={loading}>{loading ? <Spinner /> : 'Ingresar'}</Button>
                        <Button variant="info" type="reset" onClick={clearInput}>Cancelar</Button>
                    </div>
                </Form>
                )}
                </Formik>
                <div className="d-flex justify-content-center">
                    <Link to="/registro" className="text-decoration-none text-primary fs-3">Registrarme</Link>
                </div>
            </div>
        </Container>
    )
}