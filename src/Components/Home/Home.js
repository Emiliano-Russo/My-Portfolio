import React from "react";
import Photo from "../../Media/myPhoto.jpg";
import "./HomeStyles.css";

//import  myPhoto  from "../../Media/myPhoto.png";

class Home extends React.Component {
	state = {
		black_theme: true,
	};

	changeColors() {
		console.log("Changing colors..");
		this.setState({ black_theme: !this.state.black_theme });
	}

	render() {
		let presentacion_class = this.state.black_theme ? "themeBlack" : "themeWhite";
		const jsx = (
			<div id="Content" className={presentacion_class}>
				<button id="Change" onClick={() => this.changeColors()}>
					Change Colors
				</button>
				<div id="Info">
					<p>Hi There!, I'm</p>
					<h1>Emiliano Russo</h1>
					<p>Studying System Analyst</p>
					<p>Focusing on Web Development</p>
				</div>
				<img src={Photo} alt="Profile"></img>
			</div>
		);
		return jsx;
	}
}

export default Home;
