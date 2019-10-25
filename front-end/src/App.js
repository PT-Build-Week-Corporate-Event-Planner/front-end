import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignupForm from "./components/Onboard";
import TasksList from "./components/TasksList";
import Login from './components/Login';

import "./App.css";

function App() {
	return (
		<div className="App">
			<PrivateRoute path='/tasksList' component={TasksList} />
			<Route path="/register" component={SignupForm} />
			<Route path="/login" component={Login}  />
		</div>
	);
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
	  {...rest}
	  render={props =>
		localStorage.getItem("token") ? (
		  <Component {...props} />
		) : (
		  <Redirect to="/login" />
		)
	  }
	/>
  );

export default App;
