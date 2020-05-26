
import React from 'react'
// import Nav from './Nav'
const Layout = (props) => (
    <div className='layout'>
        <div className='content'>
            {/* <Nav /> */}
            <div className='main'>
                <h1 className='has-text-centered title is-uppercase'>to do manager</h1>
                {props.children}
            </div>
        </div>
    </div>
)
export default Layout