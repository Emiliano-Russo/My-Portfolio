import { Component } from "react";
import "./ProjectView.css";

class ProjectView extends Component {
	openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	render() {
		let extenralLink = null;
		if (this.props.link !== undefined) {
			extenralLink = (
				<a onClick={() => this.openInNewTab(this.props.link)} href="#">
					More details
				</a>
			);
		}
		const jsx = (
			<div id="ProjectView">
				<h4>{this.props.name}</h4>
				<h5>Type of project: {this.props.typeOfProject}</h5>
				<div id="Presentation">
					<div id="Information">
						<p id="Description">{this.props.description}</p>
						{extenralLink}
					</div>
				</div>
			</div>
		);
		return jsx;
	}
}

export default ProjectView;
