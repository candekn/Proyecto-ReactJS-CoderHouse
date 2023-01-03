import { Carousel } from "react-bootstrap"
import xbox from '../../assets/img/xbox.jpg'
import psx from '../../assets/img/playstation.jpg'
import ninswitch from '../../assets/img/nintendo-switch.jpg'
export const CarouselComponent = () => {
  return (
    <Carousel fade variant="dark" className="mb-5">
      <Carousel.Item >
        <img
          className="d-block w-100 fit-image"
          src={xbox}
          alt="Mando de xbox"
          height="500"
        />
        <Carousel.Caption interval={10} className="bg-dark text-secondary bg-opacity-75">
          <h3>BIENVENIDO A TANGERINE GAMES</h3>
          <p>Tu tienda de videojuegos favorita.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fit-image"
          src={psx}
          alt="Mando de PS5"
          height="500"
        />
        <Carousel.Caption interval={5} className="bg-dark text-secondary bg-opacity-75">
          <h3>LOS MEJORES JUEGOS</h3>
          <p>Tus juegos favoritos, en un solo lugar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fit-image"
          src={ninswitch}
          alt="Nintendo Switch"
          height="500"
        />
        <Carousel.Caption interval={5} className="bg-dark text-secondary bg-opacity-75">
          <h3>DIVERSAS PLATAFORMAS, DIVERSIÓN EN TODO MOMENTO</h3>
          <p>¿No te decides en qué plataforma jugar? ¡Juégalos en todas!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  )
}