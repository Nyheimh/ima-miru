import React from 'react'
import {Link} from 'react-router-dom'

const Show = ({title, imgURL, _id}) => {
    return (
        <>
            <Link to={`/shows/${_id}`}>
                <img src={imgURL} alt={title} />
                <p> {title} </p>
            </Link>
        </>
    )
}

export default Show
