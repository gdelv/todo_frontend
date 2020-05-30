
import React from 'react'
// import Nav from './Nav'
const Layout = (props) => (
    <div className='layout'>
        <div className='content'>
            {/* <Nav /> */}
            <div className='main'>
                {/* <h1 className='has-text-centered is-size-1 title is-uppercase has-text-white main-title'>to do manager</h1> */}
                {props.children}
            </div>
        </div>
    </div>
)
export default Layout