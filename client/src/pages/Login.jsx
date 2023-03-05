import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
	const [formState, setFormState] = useState({ email: "", password: "" });
	const [login, { error, data }] = useMutation(LOGIN_USER);
	console.log(login);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);
		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setFormState({
			email: "",
			password: "",
		});
	};

	return (
		<div className="auth-form">
			{" "}
			{data ? (
				<p>
					Success! You may now head{" "}
					<Link to="/Dashboard">back to the homepage.</Link>
				</p>
			) : (
				<form className="login-form" onSubmit={handleFormSubmit}>
					<label htmlFor="email">Email</label>
					<input
						value={formState.email}
						onChange={handleChange}
						type="email"
						placeholder="email.com"
						id="email"
					/>
					<label htmlFor="password">Password</label>
					<input
						value={formState.password}
						onChange={handleChange}
						type="password"
						placeholder="******"
						id="password"
					/>
					<button className="clickBtn" type="submit">
						Log In
					</button>
				</form>
			)}
			<button className="linkBtn" onClick={() => props.onFormSwitch("signup")}>
				Dont Have an account? Sign up here
			</button>
			{error && <div className="">{error.message}</div>}
		</div>
	);
};

export default Login;
