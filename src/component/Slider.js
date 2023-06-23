import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import caro1 from "../images/carousel-img1.jpg"
import caro2 from "../images/carousel2.jpg"
import caro3 from "../images/carousel3.jpg"

export const Slider = () =>{
    return(
        <Container className='carousel'>
          <Carousel variant="dark"  nextIcon="" prevIcon="" indicators="">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-img"
          src={caro1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-img"
          src={caro2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-img"
          src={caro3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </Container>
    )
}