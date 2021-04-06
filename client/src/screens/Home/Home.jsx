import React, {useState, useEffect} from 'react'
import Layout from '../../components/shared/Layout/Layout'
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer'
import { getShows } from '../../services/shows'

const Home = ({user}) => {
//     const [allShows, setAllShows] = useState([])

// useEffect(() => {
//     const fetchShows = async () => {
//       const shows = await getShows()
//       setAllShows(shows)
//     }
//     fetchShows()
//   }, [])

// console.log(allShows)

    return (
        <div>
            <Layout user={user}>
                {/* <CarouselContainer allShows={allShows}/> */}
                <CarouselContainer/>

            </Layout>
        </div>
    )
}

export default Home
