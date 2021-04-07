import React, { useState, useEffect } from 'react'
// import Card from 'react-bootstrap/Card'
import './CarouselContainer.css'
// import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const CarouselContainer = (props) => {
  // const { allShows, allShows2, allShows3, setAllShows2, setAllShows3 } = props

  // // useEffect (()=> {
  // //   const spliceFunc = (shows, setShows, num) => {
  // //     const move = shows.splice(0, num)
  // //     console.log(move)
  // //     setShows.push(...move)
  // //     console.log(shows)
  // //   }
  // //   spliceFunc(allShows2, setAllShows2, 1)
  // //   spliceFunc(allShows3, setAllShows3, 2)
  // // },[])

  // console.log(allShows)

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
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
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

    //   <Carousel className="carousel">
    //     {/* {allShows.map(show => {
    //         {console.log(show.title)}
    //         <Carousel.Item>
    //           <img
    //             // className="d-block w-100"
    //             className="d-none d-md-block"
    //             src={show.imgURL}
    //             alt={show.title}
    //             />
    //           <Carousel.Caption>
    //           <p>{show.title}</p>
    //           </Carousel.Caption>
    //         </Carousel.Item>
    //       })} */}

    //     <Carousel.Item >
    //     <div className="imageContainer" style={{ display: "flex", flexFlow: "row wrap", gap:"60px", width: "100%" }}>
    //         <img
    //           className="image"
    //           // className="d-block w-100"
    //           src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffilmdaily.co%2Fwp-content%2Fuploads%2F2020%2F10%2Fboys-over-flowers-anime_lede.jpg"
    //           alt="First slide"
    //         />
    //         <img
    //           className="image"
    //           // className="d-none d-sm-inline w-100"
    //           src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
    //           alt="Second slide"
    //         />
    //         <img
    //           className="image"
    //           // className="d-none d-md-inline w-100"
    //           src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e858f0b0-1c68-4459-9031-a39f28fe37bf/dd8958t-09d667a0-cc0d-46f6-b34e-83ec5279bdc2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTg1OGYwYjAtMWM2OC00NDU5LTkwMzEtYTM5ZjI4ZmUzN2JmXC9kZDg5NTh0LTA5ZDY2N2EwLWNjMGQtNDZmNi1iMzRlLTgzZWM1Mjc5YmRjMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NhD5Vsyrh5-lojWDkuY0steAUvBeUSDq_KwrQF2VwSc"
    //           alt="Third slide"
    //         />
    //       </div>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //     <div className="imageContainer" style={{ display: "flex", flexFlow: "row wrap", gap:"60px", width: "100%" }}>
    //       <img
    //       className="image"
    //         // className="d-none d-sm-inline w-100"
    //         src="https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
    //         alt="Second slide"
    //       />
    //       <img
    //       className="image"
    //         // className="d-none d-md-inline w-100"
    //         src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e858f0b0-1c68-4459-9031-a39f28fe37bf/dd8958t-09d667a0-cc0d-46f6-b34e-83ec5279bdc2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTg1OGYwYjAtMWM2OC00NDU5LTkwMzEtYTM5ZjI4ZmUzN2JmXC9kZDg5NTh0LTA5ZDY2N2EwLWNjMGQtNDZmNi1iMzRlLTgzZWM1Mjc5YmRjMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NhD5Vsyrh5-lojWDkuY0steAUvBeUSDq_KwrQF2VwSc"
    //         alt="Third slide"
    //       />
    //       <img
    //       className="image"
    //         // className="d-none d-lg-inline w-100"
    //         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PYswdoFN0qdTRqTcYqLtDwAAAA%26pid%3DApi&f=1"
    //         alt="Fourth slide"
    //       />
    //       </div>
    //     </Carousel.Item>

    //   </Carousel>
  )
}

export default CarouselContainer
