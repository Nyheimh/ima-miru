import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => {
    return (
        <div>
            <Nav />
            Layout
            <div className="layout-children">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
