import React from "react";
import "./Nav.css";

class Nav extends React.Component {
	render() {
		const jsx = (
			<div className="Navegacion">
				<nav>
					<a href="#techStack">Skills</a>
					<a href="#portfolio">Porfolio</a>
					<a href="#contact">Contact</a>
				</nav>
			</div>
		);
		return jsx;
	}
}

export default Nav;
