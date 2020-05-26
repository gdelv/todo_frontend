import React from 'react'
import Todos from '../../signedIn/Todos/Todos'


const Landing = (props) => (
	<div className='container landing'>
        <Todos {...props} />
	</div>
)
export default Landing