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
		let presentation_class = this.state.black_theme ? "themeBlack" : "themeWhite";
		const jsx = (
			<div className={presentation_class}>				
					<button id="Change" onClick={() => this.changeColors()}>
						Change Colors
					</button>
				<div id="CentralContent" >
					<div id="Info">
						<p>Hi There!, I'm</p>
						<h1>Emiliano Russo</h1>
						<p>A System Analyst Student.</p>
					</div>			
						<img src={Photo} alt="Profile"></img>
				</div>	
				<div id="AboutMe">
					<h4>About Me</h4>
					<p>I am from Uruguay, I am passionate about technology and software development. My experience comes mainly from my university, I also have personal projects that I did in my free time, I have experience in several types of developments: videogames, web, desktop. My way of programming is always following Design Patterns, Clean Code and SOLID.</p>
				</div>
			</div>
		);
		return jsx;
	}
}

export default Home;
