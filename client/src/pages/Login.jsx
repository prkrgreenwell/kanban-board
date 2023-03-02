import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [login, { error, data }] = useMutation(LOGIN_USER);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, pass);
		try {
			const { data } = await login({
				variables: { email, pass },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className='auth-form'>
			{' '}
			{data ? (
				<Link to='/Dashboard'>dashboard</Link>
			) : (
				<form className='login-form' onSubmit={handleSubmit}>
					<label for='email'>Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='email.com'
						id='email'
					/>
					<label for='password'>Password</label>
					<input
						value={pass}
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
