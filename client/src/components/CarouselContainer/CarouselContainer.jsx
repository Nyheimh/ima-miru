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
          desktop: {
            breakpoint: {
              max: 1366,
              min: 1018
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 768,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1017,
              min: 815
            },
            items: 2,
            partialVisibilityGutter: 30
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
      </Carousel>
    </div>
  )
}

export default CarouselContainer
