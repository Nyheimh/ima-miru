import React, {useState, useEffect} from 'react'
import Layout from '../../components/shared/Layout/Layout'
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer'
import { getHome } from '../../services/shows'

const Home = ({user}) => {
    const [allShows, setAllShows] = useState([])

useEffect(() => {
    const fetchShows = async () => {
      const shows = await getHome()
      setAllShows(shows)
    }
    fetchShows()
  }, [])

console.log(allShows)

    return (
        <div>
            <Layout user={user}>
                {allShows && < CarouselContainer allShows={allShows}/>}
                {/* <CarouselContainer/> */}

            </Layout>
        </div>
    )
}

export default Home
