import React from 'react'
import { Container } from 'react-bootstrap'

export const Nosotros = () => {
    return (
        <Container>
            <article className='m-5'>
                <h3>
                    Somos <strong className='text-primary'>TANGERINE GAMES</strong>, una tienda argentina de videojuegos, fundada en 2020. 
                    <br />
                </h3>
                <h4> 
                    Ofrecemos los mejores precios del mercado en
                    videojuegos tanto fisicos como digitales.
                    No tenemos una sede física donde visitarnos. Pero contamos con muchos sistemas de envíos para que puedas recibir tu producto desde
                    cualquier parte del país.
                    Y, en caso de ser de un país diferente a Argentina, ¡No te preocupes! comprando en formato digital, aún puedes recibir tu videojuego favorito, estés donde estés.
                </h4>
            </article>
        </Container>
    )
}
