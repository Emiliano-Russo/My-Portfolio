import "./TechSkills.css";

function TechSkills(props) {
	return (
		<div className="techStack">
			<h1>Tech Skills</h1>
			<h2>Front-end Technologies</h2>
			<div id="FrontEnd" className="stack">
				<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
				<img src="https://img.icons8.com/color/48/000000/typescript.png" />
				<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
				<img src="https://img.icons8.com/color/48/000000/css3.png" />
				<img src="https://img.icons8.com/officel/40/000000/react.png" />
				<img src="https://img.icons8.com/color/48/000000/angularjs.png" />
			</div>
			<h2>Back-end Technologies</h2>
			<div id="BackEnd" className="stack">
				<img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
				<img src="https://img.icons8.com/color/48/000000/mysql-logo.png" />
				<img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" />
				<p>ASP.NET</p>
			</div>
			<h2>Game Engine Technologies</h2>
			<div id="GameEngine" className="stack">
				<img src="https://img.icons8.com/ios/50/000000/unity.png" />
			</div>
		</div>
	);
}

export default TechSkills;
