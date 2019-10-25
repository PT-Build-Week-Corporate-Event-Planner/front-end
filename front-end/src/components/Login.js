import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/auth/login', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				props.history.push('./eventcalendar/EventCalendar');
				window.location.reload(false);
			})
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
    };   
    

    return (
		<>
			<Container>
				<Form onSubmit={handleSubmit}>
                    <h1 className='login-title'>Log In to Your Account</h1>
						<label>Username</label>
						<Input
							type='text'
                            name='username'
                            placeholder='Username'
							value={credentials.username}
							onChange={handleChange}							
							required
						/>				
						<label>Password</label>
						<Input
							type='password'
                            name='password'
                            placeholder='Password'
							value={credentials.password}
							onChange={handleChange}							
							required
						/>					
					<Button>Login</Button>
				</Form>
			</Container>
		</>
	);
};

export default Login;
