import React from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';

export default function AppRoute() {
	return (
		<div>	
			<Route path='/Signup' component={OnBoard} />
			<Route path='/Login' component={Login} />
			
		</div>
	);
}