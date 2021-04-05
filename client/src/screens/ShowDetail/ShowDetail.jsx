import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getShow } from '../../services/shows'
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"

const ShowDetail = () => {

    const [show, setShow] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchShow = async () => {
            const show = await getShow(id)
            setShow(show)
            setLoaded(true)
        }
        fetchShow()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Layout>
            <div className="show-detail">
                <img className="show-detail-image" src={show.imgURL} alt={show.title} />
                <div className="detail">
                    <div className="title">{show.title}</div>
                    <div className="duration">{`$${show.duration}`}</div>
                    <div className="plot">{show.plot}</div>
                    <div className="button-container">
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export default ShowDetail
