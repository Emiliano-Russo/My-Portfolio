import { Component } from "react";
import "./ProjectView.css";

class ProjectView extends Component {
	render() {
		let extenralLink = null;
		if (this.props.link !== undefined) {
			extenralLink = <a href={this.props.link}>More details</a>;
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
