import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/auth/login', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				props.history.push('/eventslist');
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
			<div>
				<form onSubmit={handleSubmit}>
                    <h1 className='login-title'>Log In to Your Account</h1>
						<label>Username</label>
						<input
							type='text'
                            name='email'
                            placeholder='email'
							value={credentials.login}
							onChange={handleChange}							
							required
						/>				
						<label>Password</label>
						<input
							type='password'
                            name='password'
                            placeholder='Password'
							value={credentials.password}
							onChange={handleChange}							
							required
						/>					
					<button>Login</button>
				</form>
			</div>
		</>
	);
};

export default Login;
