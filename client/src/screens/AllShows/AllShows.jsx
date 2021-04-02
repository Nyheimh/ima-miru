import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/Search/Search'
import Show from '../../components/Show/Show'

const AllShows = () => {
    return (
        <div>  
            <Layout>
                All Shows
                <Search />
                <Show />
            </Layout>
        </div>
    )
}

export default AllShows
