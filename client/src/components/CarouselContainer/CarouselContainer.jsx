import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselContainer.css'
// import { Link } from 'react-router-dom'


const CarouselContainer = ({allShows}) => {

  console.log(allShows)

    return (
      <Carousel className="carousel">
        {allShows.map(show => {
          {console.log(show.imgURL)}
          <Carousel.Item>
            <img
              className="carouselImg"
              src={show.imgURL}
              alt={show.title}
              />
            <Carousel.Caption>
              {/* <h3>Boys Over Flowers</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        })}

        {/* <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffilmdaily.co%2Fwp-content%2Fuploads%2F2020%2F10%2Fboys-over-flowers-anime_lede.jpg"
          alt="First slide"
          />
        <Carousel.Caption>
          {/* <h3>Boys Over Flowers</h3> 
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Hunter x Hunter</h3> 
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e858f0b0-1c68-4459-9031-a39f28fe37bf/dd8958t-09d667a0-cc0d-46f6-b34e-83ec5279bdc2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTg1OGYwYjAtMWM2OC00NDU5LTkwMzEtYTM5ZjI4ZmUzN2JmXC9kZDg5NTh0LTA5ZDY2N2EwLWNjMGQtNDZmNi1iMzRlLTgzZWM1Mjc5YmRjMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NhD5Vsyrh5-lojWDkuY0steAUvBeUSDq_KwrQF2VwSc"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Dragon Ball Z</h3> 
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> 
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PYswdoFN0qdTRqTcYqLtDwAAAA%26pid%3DApi&f=1"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          {/* <h3>Naruto</h3> 
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> 
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    )
}

export default CarouselContainer
