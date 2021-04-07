import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card'
import './CarouselContainer.css'
// import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const CarouselContainer = ({allShows}) => {

  return (
    <div className="carousel">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3500}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="item"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          mobile: {
            breakpoint: {
              max: 767,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1299,
              min: 768
            },
            items: 2,
            partialVisibilityGutter: 30
          },
          desktop: {
            breakpoint: {
              max: 1800,
              min: 1300
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          desktop2: {
            breakpoint: {
              max: 2000,
              min: 1801
            },
            items: 4,
            partialVisibilityGutter: 40
          },
          desktop3: {
            breakpoint: {
              max: 2600,
              min: 2001
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          desktop4: {
            breakpoint: {
              max: 3000,
              min: 2601
            },
            items: 6,
            partialVisibilityGutter: 40
          },
          desktop5: {
            breakpoint: {
              max: 3800,
              min: 3001
            },
            items: 7,
            partialVisibilityGutter: 40
          }
        }}
        showDots={false}
        sliderClass="slide"
        slidesToSlide={1}
        swipeable
      >
        <img
          className="image"
          // className="d-block w-100"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffilmdaily.co%2Fwp-content%2Fuploads%2F2020%2F10%2Fboys-over-flowers-anime_lede.jpg"
          alt="First slide"
        />
        <img
          className="image"
          // className="d-none d-sm-inline w-100"
          src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
          alt="Second slide"
        />
        <img
          className="image"
          // className="d-none d-sm-inline w-100"
          src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
          alt="Second slide"
        />
        <img
          className="image"
          // className="d-none d-lg-inline w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PYswdoFN0qdTRqTcYqLtDwAAAA%26pid%3DApi&f=1"
          alt="Fourth slide"
        />
        <img
          className="image"
          // className="d-block w-100"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffilmdaily.co%2Fwp-content%2Fuploads%2F2020%2F10%2Fboys-over-flowers-anime_lede.jpg"
          alt="First slide"
        />
        <img
          className="image"
          // className="d-none d-sm-inline w-100"
          src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
          alt="Second slide"
        />
        <img
          className="image"
          // className="d-none d-sm-inline w-100"
          src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
          alt="Second slide"
        />
        <img
          className="image"
          // className="d-none d-lg-inline w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PYswdoFN0qdTRqTcYqLtDwAAAA%26pid%3DApi&f=1"
          alt="Fourth slide"
        />
      </Carousel>
    </div>
  )
}

export default CarouselContainer
