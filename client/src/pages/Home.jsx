import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Home = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return <div className='container flex-row justify-space-between-lg justify-center align-center'>
	<div>
		<Link className='text-light' to='/'>
			<h1 className='m-0'>Kanban</h1>
		</Link>
		<p className='m-0'>Get into the mind of a programmer.</p>
	</div>
	<div>
		{Auth.loggedIn() ? (
			<>
				<Link className='btn btn-lg btn-info m-2' to='/dashboard'>
					{Auth.getProfile().data.username}'s profile
				</Link>
				<button className='btn btn-lg btn-light m-2' onClick={logout}>
					Logout
				</button>
			</>
		) : (
			<>
				<Link className='btn btn-lg btn-info m-2' to='/login'>
					Login
				</Link>
				<Link className='btn btn-lg btn-light m-2' to='/signup'>
					Signup
				</Link>
			</>
		)}
	</div>
</div>
};

export default Home;
