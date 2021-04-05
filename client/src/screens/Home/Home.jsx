import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer'

const Home = ({user}) => {
    return (
        <div>
            <Layout user={user}>
                Home
                <CarouselContainer/>
            </Layout>
        </div>
    )
}

export default Home
