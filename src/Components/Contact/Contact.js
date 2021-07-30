import { Component } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

class Contact extends Component {
	state = {
		sendingEmail: false,
	};

	openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	sendMail(e) {
		e.preventDefault();
		this.setState({
			sendingEmail: true,
		});
		const serviceId = "service_ltapvio";
		const templateId = "template_lvihnsj";
		const userId = "user_3XybsVT8Zvg3rVmnWDmT9";
		emailjs
			.sendForm(serviceId, templateId, e.target, userId)
			.then(
				(result) => {
					console.log(result.text);
					alert("Message sent succesfully!");
				},
				(error) => {
					console.log(error.text);
					alert("An error occurred!");
				}
			)
			.then((val) => {
				this.setState({
					sendingEmail: false,
				});
			});
		e.target.reset();
	}

	render() {
		const jsx = (
			<div id="contact">
				<h2>Contact Me</h2>

				<div className="linkSocial">
					<button id="linkedin" onClick={() => this.openInNewTab("https://www.linkedin.com/in/russo-emiliano")}>
						LinkedIn
					</button>
				</div>
				<div className="linkSocial">
					<button id="github" onClick={() => this.openInNewTab("https://github.com/Emiliano-Russo")}>
						GitHub
					</button>
				</div>
				<p>If you would like to contact me for a job opportunity or a project, please send me a quick message.</p>
				<form id="form" onSubmit={this.sendMail.bind(this)}>
					<input placeholder="Name" id="personName" name="personName"></input>
					<textarea placeholder="Send me a quick message" id="message" name="message"></textarea>
					{this.state.sendingEmail ? <p>Sending..</p> : <input id="Send" type="submit" value="Submit"></input>}
				</form>
			</div>
		);
		return jsx;
	}
}

export default Contact;
