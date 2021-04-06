import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/Search/Search'
import Show from '../../components/Show/Show'
import {useState, useEffect} from 'react'
import { getShows } from '../../services/shows'
import "./AllShows.css"

const AllShows = ({user}) => {

const [allShows, setAllShows] = useState([])
const [queriedShows, setQueriedShows] = useState([])
//   const [sortType, setSortType] = useState([])

    useEffect(() => {
        const fetchShows = async () => {
          const shows = await getShows()
          setAllShows(shows)
          setQueriedShows(shows)
        }
        fetchShows()
      }, [])

    const showJSX = queriedShows.map((show, index) =>
    <Show _id={show._id} title={show.title} imgURL={show.imgURL} key={index} />
  )

    return (
        <div>  
            <Layout user = {user}>
                All Shows
                <Search />
          <div className="shows">
            
              {showJSX}
             
                </div>
            </Layout>
        </div>
    )
}

export default AllShows
