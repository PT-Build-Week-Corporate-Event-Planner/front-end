import React from "react";
import { Route } from "react-router-dom";
import SignupForm from "./components/Onboard";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Route path="/register" component={SignupForm} />
			{/* <Route path="/login"  /> */}
		</div>
	);
}

export default App;
