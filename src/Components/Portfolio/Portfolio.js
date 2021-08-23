import { useEffect, useState } from "react";
import "./Portfolio.css";
import Project from "./Project/Project";
import { GetProjectsFromServer, GetProjectsFromCache, SetProjectsOnCache } from "../../Media/Repository";

function Portfolio() {
	const [gamesProjectsOpen, setGamesProjectsOpen] = useState(false);
	const [webProjectsOpen, setWebProjectsOpen] = useState(true);
	const [gamesProjects, setGamesProjects] = useState([]);
	const [webProjects, setWebProjects] = useState([]);

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
		let projects = [];
		Object.keys(data).forEach(function (key) {
			projects.push(data[key]);
		});
		for (let i = 0; i < projects.length; i++) {
			const project = projects[i];
			if (project.typeOfProject === "Unity") {
				setGamesProjects((prev) => prev.concat(project));
			} else {
				//addToWebProjects(project);
				setWebProjects((prev) => prev.concat(project));
			}
		}
	}

	function toggleWebProjectHandler() {
		setWebProjectsOpen((prev) => !prev);
	}

	function toggleGamesProjectHandler() {
		setGamesProjectsOpen((prev) => !prev);
	}

	const toggleWeb = webProjectsOpen ? (
		<button className="toggle" onClick={toggleWebProjectHandler}>
			Web Projects △
		</button>
	) : (
		<button className="toggle" onClick={toggleWebProjectHandler}>
			Web Projects ▽
		</button>
	);

	const toggleUnity = gamesProjectsOpen ? (
		<button className="toggle" onClick={toggleGamesProjectHandler}>
			Games Projects △
		</button>
	) : (
		<button className="toggle" onClick={toggleGamesProjectHandler}>
			Games Projects ▽
		</button>
	);

	const wbProjects = webProjects.map((item) => <Project key={item.name} img={item.img} description={item.description} link={item.link} name={item.name} typeOfProject={item.typeOfProject} />);
	const videogamesProjects = gamesProjects.map((item) => (
		<Project key={item.name} img={item.img} description={item.description} link={item.link} name={item.name} typeOfProject={item.typeOfProject} />
	));

	return (
		<div className="Portfolio" id="portfolio">
			<h1>Portfolio</h1>
			{toggleWeb}
			<div className="Projects">{webProjects.length !== 0 && webProjectsOpen == true ? wbProjects : <br></br>}</div>
			{toggleUnity}
			<div className="Projects">{gamesProjects.length !== 0 && gamesProjectsOpen == true ? videogamesProjects : <br></br>}</div>
		</div>
	);
}

export default Portfolio;
