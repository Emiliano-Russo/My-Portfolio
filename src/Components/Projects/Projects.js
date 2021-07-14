import React, { Component } from "react";
import "./Projects.css";
import ProjectView from "./ProjectView/ProjectView";
import { GetProjectsFromServer, GetProjectsFromCache, SetProjectsOnCache } from "../../Media/Repository";

class Projects extends Component {
	state = {
		allProjects: [],
	};

	componentDidMount() {
		let projects = GetProjectsFromCache();
		if (projects == null) {
			GetProjectsFromServer().then((res) => {
				projects = res.data;
				SetProjectsOnCache(projects);
				this.processDataProjects(projects);
			});
		} else {
			this.processDataProjects(projects);
		}
	}

	processDataProjects(data) {
		let projects = this.state.allProjects.splice(0, 0);
		Object.keys(data).forEach(function (key) {
			projects.push(data[key]);
		});
		this.setState({
			allProjects: projects,
		});
	}

	render() {
		const jsx = (
			<div id="Projects" className="themeBlack">
				{this.state.allProjects.length !== 0 ? (
					this.state.allProjects.map((item) => <ProjectView key={item.name} img={item.img} description={item.description} link={item.link} name={item.name} typeOfProject={item.typeOfProject} />)
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		);
		return jsx;
	}
}

export default Projects;
