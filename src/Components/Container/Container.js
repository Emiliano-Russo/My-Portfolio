import { Component } from "react";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import TechSkills from "../TechSkills/TechSkills";
import "./Container.css";

class Container extends Component {
	render() {
		const jsx = (
			<div className="container">
				<Home />
				<TechSkills />
				<Portfolio />
				<Contact />
				<footer>Desgned And Developed by Emiliano Russo</footer>
			</div>
		);
		return jsx;
	}
}

export default Container;
