import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
	<nav className="navbar">
		<div className="nav-items">
			<NavLink to='/todos'>All Todos</NavLink>
			<NavLink to='/create'>Create Todo</NavLink>
		</div>
	</nav>
)

export default Nav