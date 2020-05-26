import React from 'react'
import { NavLink } from "react-router-dom";
import NavBar from './NavBar'

const authenticatedOptions = (
    <div className="links">
        <NavLink to='/sign-out'>Sign Out</NavLink>
    </div>
)

const unauthenticatedOptions = (
    <div className="links">
            <NavLink to='/sign-up'>Register</NavLink>
            <NavLink to='/sign-in'>Sign In</NavLink>
    </div>
)

const alwaysOptions = (
    <div className="links">
        {/* logo here */}
        <NavLink to='/'>Home</NavLink>
    </div>
)

const Header = ({ user }) => (
    <NavBar>
        {user && <span className='navbar-text'>Welcome, {user.username}</span>}
        <div className='nav'>
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
    </NavBar>
)

export default Header