import "./Project.css";

function Project(props) {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="Project">
			<img src={props.img} alt="projectIMG"></img>
			<div id="Content">
				<h1>{props.name}</h1>
				<p>{props.description}</p>
				<p>Type of project: {props.typeOfProject}</p>
				<div>
					<button onClick={() => openInNewTab(props.link)}>Link</button>
				</div>
			</div>
		</div>
	);
}

export default Project;
