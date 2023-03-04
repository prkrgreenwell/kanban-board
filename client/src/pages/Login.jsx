import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPass] = useState('');
	const [login, { error, data }] = useMutation(LOGIN_USER);
	console.log(login);

	const handleChange = (event) => {
		const { name, value } = event.target;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
		try {
			const { data } = await login({
				variables: { email, password },
			});
			console.log(data);
			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className='auth-form'>
			{' '}
			{data ? (
				<p>
					Success! You may now head{' '}
					<Link to='/Dashboard'>back to the homepage.</Link>
				</p>
			) : (
				<form className='login-form' onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='email.com'
						id='email'
					/>
					<label htmlFor='password'>Password</label>
					<input
						value={password}
						onChange={(e) => setPass(e.target.value)}
						type='password'
						placeholder='******'
						id='password'
					/>
					<button className='clickBtn' type='submit'>
						Log In
					</button>
				</form>
			)}
			<button className='linkBtn' onClick={() => props.onFormSwitch('signup')}>
				Dont Have an account? Sign up here
			</button>
			{error && <div className=''>{error.message}</div>}
		</div>
	);
};

export default Login;
