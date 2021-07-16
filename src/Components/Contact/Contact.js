import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	render() {
		const jsx = (
			<div id="Contact">
				<div className="linkSocial">
					<a id="linkedin" onClick={() => this.openInNewTab("https://www.linkedin.com/in/russo-emiliano")} href="#">
						LinkedIn
					</a>
				</div>
				<div className="linkSocial">
					<a id="github" onClick={() => this.openInNewTab("https://github.com/Emiliano-Russo")} href="#">
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
