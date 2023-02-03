import { useState } from "react"
import { Button } from "react-bootstrap"
import { ImCopy } from "react-icons/im"
import {CopyToClipboard} from 'react-copy-to-clipboard';
export const CopyText = ({ text }) => {

    const [copied, setCopied] = useState(false);

    return (
        <>
            {
                
                !copied 
                ?
                <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
                    <Button variant="secondary" title="Copiar al portapapeles"><ImCopy /></Button>
                </CopyToClipboard>
                : <Button variant="success">Copiado ✅</Button>
            }
        </>

    )
}