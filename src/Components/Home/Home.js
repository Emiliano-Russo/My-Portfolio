import React from "react";
import Photo from "../../Media/myPhoto.jpg";
import "./HomeStyles.css";

//import  myPhoto  from "../../Media/myPhoto.png";

class Home extends React.Component {
	state = {
		colorL: "#5DC1B9",
		colorX: "#ff6347",
	};

	changeColors() {
		console.log("Changing colors..");
		this.setState({
			colorL: this.getRandomLightColor(),
			colorX: this.generateRandomColor(),
		});
	}

	getRandomLightColor() {
		var letters = "BCDEF".split("");
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		return color;
	}

	generateRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		let presentation_class = "themeBlack";
		const jsx = (
			<div className={presentation_class} style={{ color: this.state.colorL }}>
				<button id="Change" onClick={() => this.changeColors()} className="button">
					Theme
				</button>
				<div id="CentralContent">
					<div id="Info">
						<p>Hi There!, I'm</p>
						<h1 style={{ color: this.state.colorX }}>Emiliano Russo</h1>
						<p>A System Analyst Student.</p>
					</div>
					<img
						src={Photo}
						alt="Profile"
						style={{
							borderColor: this.state.colorL,
						}}
					></img>
				</div>
				<div id="AboutMe">
					<h4
						style={{
							color: this.state.colorX,
							textDecorationColor: this.state.colorL,
						}}
					>
						About Me
					</h4>
					<p>
						I am from Uruguay, I am passionate about technology and software development. My experience comes mainly from my university, I also have personal projects that I did in my free time, I
						have experience in several types of developments: videogames, web, desktop. My way of programming is always following Design Patterns, Clean Code and SOLID.
					</p>
				</div>
			</div>
		);
		return jsx;
	}
}

export default Home;
