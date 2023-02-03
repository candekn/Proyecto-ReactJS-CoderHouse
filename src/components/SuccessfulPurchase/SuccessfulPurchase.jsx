import { useState } from "react"
import { Container } from "react-bootstrap"
import CopyToClipboard from "react-copy-to-clipboard";
import dancing from "../../assets/img/dancing.gif";

export const SuccessfulPurchase = ({ordenID}) => {
    const [copied, setCopied] = useState(false);

    return (
        <Container className="d-flex flex-column justify-content-center my-5 text-center">
        <h2 className="my-3 text-primary">¡Orden generada con éxito!</h2>
        <h4>Tu código de orden es: <strong>{ordenID}</strong> 
            {               
                !copied 
                ?
                <CopyToClipboard text={ordenID} onCopy={() => setCopied(true)}>
                    <Button variant="secondary" title="Copiar al portapapeles"><ImCopy /></Button>
                </CopyToClipboard>
                : <Button variant="success">Copiado ✅</Button>
            }
        </h4>
        <div className="d-flex justify-content-center my-2">
            <Image src={dancing} width={200} />
        </div>         
        <Link to="/mis-compras" className="text-decoration-none fs-5 text-primary">Ir a Mis Compras</Link>
        <Link to="/" className="text-decoration-none fs-5 text-secondary"> Volver al Inicio </Link>
    </Container>
    )
}