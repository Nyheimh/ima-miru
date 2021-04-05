import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselContainer.css'

const CarouselContainer = () => {
    return (
      <Carousel className="carousel">
        <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/9e/c4/25/9ec425ae13b13c398936765251e27766.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Boys Over Flowers</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Hunter x Hunter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/31/7f/fd/317ffdfd07542eb695117161b1c753c9.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Dragon Ball Z</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn11.bigcommerce.com/s-b72t4x/images/stencil/1280x1280/products/11169/20874/24_1075_Naruto_Group__97803.1415650378.jpg?c=2"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Naruto</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default CarouselContainer
