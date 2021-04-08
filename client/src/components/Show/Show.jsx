import React from 'react'
import {Link} from 'react-router-dom'
import "./Show.css"
const Show = ({title, imgURL, _id}) => {
    return (
      <>
        <div className="product">
            <Link to={`/shows/${_id}`}>
            <img src={imgURL} alt={title} />
            <div className= "testing">
                <p className="title-card"> {title} </p>
            </div>

          </Link>
          </div>
        </>
    )
}

export default Show
