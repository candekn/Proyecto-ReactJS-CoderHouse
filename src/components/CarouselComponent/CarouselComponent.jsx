import { Carousel } from "react-bootstrap"
import xbox from '../../assets/img/xbox.jpg'
import psx from '../../assets/img/playstation.jpg'
import ninswitch from '../../assets/img/nintendo-switch.jpg'
export const CarouselComponent = () => {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item >
        <img
          className="d-block w-100 fit-image"
          src={xbox}
          alt="Mando de xbox"
          height="500"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fit-image"
          src={psx}
          alt="Mando de PS5"
          height="500"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fit-image"
          src={ninswitch}
          alt="Nintendo Switch"
          height="500"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  )
}