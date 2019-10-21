import React, { useEffect } from "react";
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

const SignupForm = () => (

    
	<div>
		<h2>Become an Event Coordinator today!</h2>
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				companyName: "",
				role: ""
			}}
			validationSchema={SignupSchema}
			onSubmit={values => {
				console.log(values);
			}}>
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

export default SignupForm;

// const Onboarding = ()=>{

// useEffect( () =>{
//     const registerUser = user => {
//         axios
//             .post('/user', {
//                 FName: user.fName,
//                 LName: user.lName,
//                 Email: user.email,
//                 CompanyName: user.companyName,
//                 role: user.role
//             })
//             .then(response => {
//                 console.log(response)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
//     registerUser()
// }, [])

// return(
//     <>
//         <Form>
//             <h2></h2>
//         </Form>
//     </>
// )
// }
