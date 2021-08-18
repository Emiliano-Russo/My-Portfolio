import { useEffect, useState } from "react";
import "./Portfolio.css";
import Project from "./Project/Project";
import { GetProjectsFromServer, GetProjectsFromCache, SetProjectsOnCache } from "../../Media/Repository";

function Portfolio() {
	const [unityProjectsOpen, setUnityProjectsOpen] = useState(false);
	const [webProjectsOpen, setWebProjectsOpen] = useState(true);
	const [unityProjects, setUnityProjects] = useState([]);
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
				setUnityProjects((prev) => prev.concat(project));
			} else {
				//addToWebProjects(project);
				setWebProjects((prev) => prev.concat(project));
			}
		}
	}

	function toggleWebProjectHandler() {
		setWebProjectsOpen((prev) => !prev);
	}

	function toggleUnityProjectHandler() {
		setUnityProjectsOpen((prev) => !prev);
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

	const toggleUnity = unityProjectsOpen ? (
		<button className="toggle" onClick={toggleUnityProjectHandler}>
			Unity Projects △
		</button>
	) : (
		<button className="toggle" onClick={toggleUnityProjectHandler}>
			Unity Projects ▽
		</button>
	);

	const wbProjects = webProjects.map((item) => <Project key={item.name} img={item.img} description={item.description} link={item.link} name={item.name} typeOfProject={item.typeOfProject} />);
	const gamesProjects = unityProjects.map((item) => <Project key={item.name} img={item.img} description={item.description} link={item.link} name={item.name} typeOfProject={item.typeOfProject} />);

	return (
		<div className="Portfolio" id="portfolio">
			<h1>Portfolio</h1>
			{toggleWeb}
			<div className="Projects">{webProjects.length !== 0 && webProjectsOpen == true ? wbProjects : <br></br>}</div>
			{toggleUnity}
			<div className="Projects">{unityProjects.length !== 0 && unityProjectsOpen == true ? gamesProjects : <br></br>}</div>
		</div>
	);
}

export default Portfolio;
