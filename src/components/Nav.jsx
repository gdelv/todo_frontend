import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
	<div className="routes">
		<div className="div-items">
			<button className="button is-success is-rounded is-large">
				<NavLink to='/todos'>All Todos</NavLink>
			</button>
			<button className="button is-success is-rounded is-large">
				<NavLink to='/create'>Create Todo</NavLink>
			</button>
		</div>
	</div>
)

export default Nav