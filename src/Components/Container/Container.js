import { Component } from "react";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { Switch, Route } from "react-router-dom";
import "./Container.css";

class Container extends Component {
	render() {
		const jsx = (
			<div className="container">
				<Switch>
					<Route path="/Contact">
						<Contact></Contact>
					</Route>
					<Route path="/Projects">
						<Projects></Projects>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		);
		return jsx;
	}
}

export default Container;
