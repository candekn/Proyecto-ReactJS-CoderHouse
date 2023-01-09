import { useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"

export const ShippingCalculator = () => {
    const [precioEnvio, setPrecioEnvio] = useState('');
    const [codigoPostal, setCodigoPostal] = useState();
    const [showSpinner, setShowSpinner] = useState(false)
    const handleInputCodigoPostal = (event) => {
        setCodigoPostal( Number(event.target.value) )
    }

    const calcularEnvio = () =>{
        setShowSpinner(true);
        if(!isNaN(codigoPostal)){
            setTimeout(() => {
                setPrecioEnvio('Precio de envio: $600')
            }, 1500)
        }
    }
    return (
    <Container fluid>
        <h3>Calcular Envío</h3>
        <Form>
            <Form.Group>
                <Form.Label>Código Postal:</Form.Label>
                <Form.Control type="text" pattern="[0-9]" maxLength={4} onChange={handleInputCodigoPostal} name="codigoPostal" required></Form.Control>
            </Form.Group>
            <div className="my-1">
                {precioEnvio
                ? precioEnvio
                : showSpinner && <Spinner variant="secondary" size="sm" />}
            </div>
            <Button onClick={calcularEnvio} className="mt-2" disabled={!codigoPostal && isNaN(codigoPostal)}>Calcular</Button>
        </Form>
    </Container>
    )
}
