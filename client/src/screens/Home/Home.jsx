import Layout from '../../components/shared/Layout/Layout'
import {useState, useEffect} from 'react'
import { getShows } from "../../services/shows";
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer'

const Home = ({user}) => {
    const [allShows, setAllShows] = useState([])
    const [allShows2, setAllShows2] = useState([])
    const [allShows3, setAllShows3] = useState([])

useEffect(() => {
    const fetchShows = async () => {
      const shows = await getShows()
      setAllShows(shows)
      setAllShows2(shows)
      setAllShows3(shows)
    }
    fetchShows()
  }, [])

console.log(allShows)

    return (
        <div>
            {allShows && <Layout user={user}>
                {allShows && < CarouselContainer 
                allShows={allShows}
                allShows2={allShows2}
                allShows3={allShows3}
                setAllShows2={setAllShows2}
                setAllShows3={setAllShows3}
                />}
                {/* <CarouselContainer/> */}
            </Layout>}
        </div>
    )
}

export default Home
