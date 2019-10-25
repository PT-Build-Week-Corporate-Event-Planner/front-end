import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignupForm from "./components/Onboard";
import TasksList from "./components/TasksList";
import Login from './components/Login';

import EventsList from './components/EventsList';
import "./App.css";

function App() {
	return (
		<div className="App">
			<PrivateRoute path='/tasksList/:id' component={TasksList} />
			<PrivateRoute path='/eventslist' component={EventsList} />
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
