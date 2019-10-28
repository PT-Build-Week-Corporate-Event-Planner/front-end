import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const FormHeader = styled.h1`
color: black;
text-align: center;
font-size: 2rem;
padding: 2rem;
`;

const StylForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
    background: #efeff3;
    padding: 2rem 2rem;
    border-radius: 5px;
    box-shadow: #999 1px 2px 5px;
    
    label {
		font-size 1.5rem;
		margin-right: 10px;
	}

    input,textarea,select {
        font-size: 1rem;
        margin-bottom: 1rem;
        border: 1px solid gray;
        border-radius: 3px;
        height: 30px;
        padding-left: 12px;
        outline: none;
        &::placeholder {
            color: gray;
    }
  }
  textarea {
    width: 500px;
    height: 150px;
  }
  button {
    padding: 0.5rem 0.5rem;
    background: #323232;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 3px;
    &:hover {
      color: #323232;
      background: #fff;
    }
  }
  
  .field {
    display: flex;
    label {
      margin-right: 1rem;
      width: 20%;
    }
    input {
      width: 500px;
    }
  }
`;

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
                    <FormHeader>Login to your Account</FormHeader>
                    <StylForm>
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
                    </StylForm>
				</form>
			</div>
		</>
	);
};

export default Login;
