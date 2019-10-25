import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

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
			<h2>Become an Event Coordinator today!</h2>
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
					<Form>
						<div>
							<Field name="firstName" placeholder="First Name" />
							<ErrorMessage name="firstName" component="span" />
						</div>
						<div>
							<Field name="lastName" placeholder="Last Name" />
							<ErrorMessage name="lastName" component="span" />
						</div>
						<div>
							<Field name="email" placeholder="Email" />
							<ErrorMessage name="email" component="span" />
						</div>
						<div>
							<Field name="password" placeholder="Password" type="password" />
							<ErrorMessage name="password" component="span" />
						</div>
						<div>
							<Field name="companyName" placeholder="Company Name" />
							<ErrorMessage name="companyName" component="span" />
						</div>
						<div>
							<Field name="role" placeholder="Role" />
							<ErrorMessage name="role" component="span" />
						</div>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SignupForm;
