import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	render() {
		const jsx = (
			<div id="Contact">
				<div className="linkSocial">
					<a id="linkedin" href="https://www.linkedin.com/in/russo-emiliano">
						LinkedIn
					</a>
				</div>
				<div className="linkSocial">
					<a id="github" href="https://github.com/Emiliano-Russo">
						GitHub
					</a>
				</div>
				<div className="linkSocial">
					<p id="mail">emiliano.russo@outlook.com</p>
				</div>
			</div>
		);
		return jsx;
	}
}

export default Contact;
