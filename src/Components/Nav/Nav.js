import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render() {
		const jsx = (
			<div className="Navegacion">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/Projects">Projects</Link>
					<Link to="/Contact">Contact</Link>
				</nav>
			</div>
		);
		return jsx;
	}
}

export default Nav;
