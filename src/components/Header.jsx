import React from 'react'
import { NavLink } from "react-router-dom";
import NavBar from './NavBar'

const authenticatedOptions = (
    <div className="links is-size-3 ">
        <NavLink className='has-text-link is-family-secondary has-text-weight-bold' activeClassName="active" to='/sign-out'>Sign Out</NavLink>
    </div>
)

const unauthenticatedOptions = (
    <div className="links is-size-3">
            <NavLink className='has-text-link is-family-secondary has-text-weight-bold' activeClassName="active" to='/sign-up'>Register</NavLink>
            <NavLink className='has-text-link is-family-secondary has-text-weight-bold' activeClassName="active" to='/sign-in'>Sign In</NavLink>
    </div>
)

const alwaysOptions = (
    <div className="links is-size-3">
        {/* logo here */}
        <NavLink className='has-text-link is-family-secondary has-text-weight-bold' activeClassName="active" to='/'>Home</NavLink>
    </div>
)


const Header = ({ user, date }) => (
    
    <NavBar>
        <div className='nav'>
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
    {   
        user && <span className='navbar-text is-size-2 has-text-white has-text-centered'>Welcome, {user.username} <br></br><span className='is-size-3'>Today's Date: {date}</span></span>
    }

    </NavBar>
)

export default Header