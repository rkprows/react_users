import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
	<div>
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">React Users</Link>
			</div>
		</nav>
		{children}
	</div>
)

export default App
