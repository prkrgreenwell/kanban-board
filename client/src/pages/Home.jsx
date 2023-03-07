import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Home = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return <div id='container'className='container'>
	
		<h1 className='kanban display-1 m-4 text-center'>
			Kanban
		</h1>
		<h2 id='motto' className='m-5 text-center'>Get organized!</h2>
	
	
</div>
};

export default Home;
