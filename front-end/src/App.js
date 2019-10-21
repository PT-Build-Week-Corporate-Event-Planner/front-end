import React from "react";
// import { Route } from "react-router-dom";
import SignupForm from "./components/Onboard";
import "./App.css";

function App() {
	return (
		<div className="App">
			<SignupForm />
			{/* <Route path="/signUp" component={Onboard} /> */}
		</div>
	);
}

export default App;
