import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import animatedShape from '../../assets/img/AnimatedShape.svg'
export const NotFound = () => {
    const navigate = useNavigate();

    const volverAtras = () => {
        navigate(-1)
    }

    const volverAlInicio = () => {
        navigate('/Proyecto-ReactJS-CoderHouse/')
    }

    return (
        <div style={{backgroundImage: `url(${animatedShape})`, backgroundSize: 'cover', height: '100vh'}}>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='container bg-light bg-opacity-25 m-5 w-lg-50'>
                    <h1 className='text-center'>¡Oh, no! Esta página no existe</h1>
                    <div className='row justify-content-center'>
                        <Button variant='primary' className='my-3 text-center w-50' onClick={volverAtras}> Volver Atrás </Button>
                    </div>
                    <div className='row justify-content-center'>
                        <Button variant='success' className='my-3 text-center w-50' onClick={volverAlInicio}> Volver al Inicio </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}