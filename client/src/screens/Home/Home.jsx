import Layout from '../../components/shared/Layout/Layout'
import {useState, useEffect} from 'react'
import { getShows } from "../../services/shows";
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer'
import './Home.css'

const Home = ({user}) => {
    const [allShows, setAllShows] = useState([])
    const [allShows2, setAllShows2] = useState([])
    const [allShows3, setAllShows3] = useState([])

useEffect(() => {
    const fetchShows = async () => {
      const shows = await getShows()
      setAllShows(shows)
    }
    fetchShows()
  }, [])

console.log(allShows)

    return (
        <div>
            {allShows && <Layout user={user}>
                <h3 className="homeStatement">The number one spot to find the next series to binge watch!</h3>
                {allShows && < CarouselContainer allShows={allShows}/>}
                {/* <CarouselContainer/> */}
            </Layout>}
        </div>
    )
}

export default Home
