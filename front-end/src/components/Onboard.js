import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styled from 'styled-components';

const SignUpHeader = styled.h1`
color: black;
text-align: center;
font-size: 2.5rem;
padding: 2rem;
`;

const StylForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;
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
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 3px;
    &:hover {
      color: #323232;
      background: #fff;
    }
  } 
`;

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().required("A first name is required"),
	lastName: Yup.string().required("A last name is required"),
	email: Yup.string()
		.email("Invalid email")
		.required("A valid email is required"),
	companyName: Yup.string().required("A company name is required"),
	role: Yup.string()
});

const SignupForm = props => {
	console.log(props);
	const registerUser = user => {
		console.log(user);
		axios
			.post("https://event-planner-pt.herokuapp.com/api/auth/register", {
				first_name: user.firstName,
				last_name: user.lastName,
				password: user.password,
				email: user.email,
				company: user.companyName,
				role: user.role
			})
			.then(response => {
				// console.log(response);
				props.history.push("/login");
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div>
			<SignUpHeader>Become an Event Coordinator today!</SignUpHeader>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					password: "",
					email: "",
					companyName: "",
					role: ""
				}}
				validationSchema={SignupSchema}
				onSubmit={registerUser}>
				{({ isSubmitting }) => (
					<StylForm>
						<div>
							<label>First Name</label>
							<Field name="firstName" placeholder="First Name" />
							<ErrorMessage name="firstName" component="span" />
						</div>
						<div>
							<label>Last Name</label>
							<Field name="lastName" placeholder="Last Name" />
							<ErrorMessage name="lastName" component="span" />
						</div>
						<div>
							<label>Email</label>
							<Field name="email" placeholder="Email" />
							<ErrorMessage name="email" component="span" />
						</div>
						<div>
							<label>Password</label>
							<Field name="password" placeholder="Password" type="password" />
							<ErrorMessage name="password" component="span" />
						</div>
						<div>
							<label>Company Name</label>	
							<Field name="companyName" placeholder="Company Name" />
							<ErrorMessage name="companyName" component="span" />
						</div>
						<div>
							<label>Role</label>
							<Field name="role" placeholder="Role" />
							<ErrorMessage name="role" component="span" />
						</div>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</StylForm>
				)}
			</Formik>
		</div>
	);
};

export default SignupForm;
