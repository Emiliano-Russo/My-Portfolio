import "./Project.css";

function Project(props) {
	return (
		<div className="Project">
			<img src={props.img} alt="projectIMG"></img>
			<div id="Content">
				<h1>{props.name}</h1>
				<p>{props.description}</p>
				<p>Type of project: {props.typeOfProject}</p>
				<div>
					<button>Link</button>
				</div>
			</div>
		</div>
	);
}

export default Project;
