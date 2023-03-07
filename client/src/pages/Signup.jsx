import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPass] = useState('');
	const [name, setName] = useState('');
	const [addUser, { error, data }] = useMutation(ADD_USER);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password, name);
		try {
			const { data } = await addUser({
				variables: { email, username: name, password: password },
			});

			Auth.login(data.addUser.token);
			console.log(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className='auth-form'>
			{data ? (
				<Link to='/Dashboard'>Dashboard</Link>
			) : (
				<form className='signup-form' onSubmit={handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='name'
						placeholder='your name'
						id='name'
					/>
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
						Sign up
					</button>
				</form>
			)}

			<Link className='login-link' to='/Login'>
				Already have an account? Log in here
			</Link>

			{error && <div className=''>{error.message}</div>}
		</div>
	);
};

export default Signup;
