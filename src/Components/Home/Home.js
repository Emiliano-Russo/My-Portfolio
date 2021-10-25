import React from "react";
//import Photo from "../../Media/meFaded.png";
import Photo from "../../Media/asd.jpg";
import "./HomeStyles.css";
const axios = require("axios");

//import  myPhoto  from "../../Media/myPhoto.png";

class Home extends React.Component {
	state = {
		aboutMe: "...",
		img: "...",
	};

	componentDidMount() {
		const link = "https://portfolio-acd2e-default-rtdb.firebaseio.com/Text/aboutMe.json";
		axios.get(link).then((res) => {
			console.log(res.data);
			this.setState({
				aboutMe: res.data,
			});
		});
		const linkImg = "https://portfolio-acd2e-default-rtdb.firebaseio.com/Text/linkIMG.json";
		axios.get(linkImg).then((res) => {
			console.log(res.data);
			this.setState({
				img: res.data,
			});
		});
	}

	render() {
		const jsx = (
			<div id="Home">
				<img src={this.state.img}></img>
				<div id="Description">
					<div id="Rectangle"></div>
					<h1> Hi There! </h1>
					<div id="Rectangle"></div>
					<h1>I'm Emiliano Russo</h1>
					<h3>Jr Full Stack Web Developer</h3>
					<div id="Rectangle"></div>
					<p>{this.state.aboutMe}</p>
				</div>
			</div>
		);
		return jsx;
	}
}

export default Home;
