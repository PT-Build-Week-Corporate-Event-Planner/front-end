import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignupForm from "./components/Onboard";
import Login from './components/Login';
import EventsTasks from './components/EventsTasks';
import EventsList from './components/EventsList';
import "./App.css";
import TheHeader from './components/Header'

function App() {
	return (
		<div className="App">

			<TheHeader />
			<PrivateRoute path='/eventslist' component={EventsList} />
			<PrivateRoute path='/eventstasks' component={EventsTasks} />
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
