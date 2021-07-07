import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./Components/Container/Container";
import "./App.css";

function App() {
	return (
		<div id="App">
			<Router>
				<Nav></Nav>
				<Container></Container>
			</Router>
		</div>
	);
}

export default App;
