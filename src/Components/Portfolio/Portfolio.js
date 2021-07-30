import { useEffect, useState } from "react";
import "./Portfolio.css";
import Project from "./Project/Project";
import { GetProjectsFromServer, GetProjectsFromCache, SetProjectsOnCache } from "../../Media/Repository";

function Portfolio() {
	const [allProjects, setAllProjects] = useState([]);

	useEffect(() => {
		let projects = GetProjectsFromCache();
		if (projects == null) {
			GetProjectsFromServer().then((res) => {
				projects = res.data;
				SetProjectsOnCache(projects);
				processDataProjects(projects);
			});
		} else {
			processDataProjects(projects);
		}
	}, []);

	function processDataProjects(data) {
		let projects = allProjects.splice(0, 0); // copy
		Object.keys(data).forEach(function (key) {
			projects.push(data[key]);
		});
		setAllProjects(projects);
	}

	return (
		<div className="Portfolio">
			<h1>Portfolio</h1>
			{allProjects.length !== 0 ? (
				allProjects.map((item) => <Project key={item.name} img={item.img} description={item.description} link={item.link} name={item.name} typeOfProject={item.typeOfProject} />)
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}

export default Portfolio;
