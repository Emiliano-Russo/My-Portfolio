import React, { Component } from "react";
import "./Projects.css";
import ProjectView from "./ProjectView/ProjectView";
import { data } from "../../Media/Data";

class Projects extends Component {
	render() {
		var arr = [];
		Object.keys(data).forEach(function (key) {
			arr.push(data[key]);
		});
		console.log(arr);
		const jsx = (
			<div id="Projects" className="themeBlack">
				{arr.map((item) => (
					<ProjectView key={item.name} img={item.img} description={item.description} link={item.link} name={item.name} typeOfProject={item.typeOfProject} />
				))}
			</div>
		);
		return jsx;
	}
}

export default Projects;
