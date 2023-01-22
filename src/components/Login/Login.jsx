import { useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import { redirect, useNavigate } from "react-router-dom"
import { useLoginContext } from "../../context/LoginContext"

export const Login = () => {
    const { login, user, loading } = useLoginContext()
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(login(values)){
            redirect('/home')
        }
    }

    return (
        <Container className="d-flex justify-content-center">
        <div style={{'maxWidth':'25em'}}>
            <Form onSubmit={handleSubmit}>
                <h2 className="text-center mt-3">¡Bienvenido!</h2>
                <hr />
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={values.email} onChange={handleInputChange} name="email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" value={values.password} onChange={handleInputChange} name="password"></Form.Control>
                </Form.Group>
                { user.error && <p className='invalid-feedback'>{user.error}</p> }
                <div className="my-3 d-flex justify-content-around">
                <Button variant="primary" type="submit" disabled={loading}>{loading ? <Spinner /> : 'Ingresar'}</Button>
                <Button variant="info" type="reset">Cancelar</Button>
                </div>
            </Form>
        </div>
        </Container>
    )
}