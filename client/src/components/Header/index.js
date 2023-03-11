import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
	const navigate = useNavigate();

	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
		navigate('/');
	};

	return (
		<header className='fixed-top'>
			<div className='d-flex justify-content-around '>
				{Auth.loggedIn() ? (
					<>
						<Link className='header-link' to='/'>
							Home
						</Link>
						<Link className='header-link' to='/dashboard'>
							{Auth.getProfile().data.username}'s Profile
						</Link>
						<Link className='header-link' onClick={logout} to='/'>
							Logout
						</Link>
					</>
				) : (
					<>
						<Link className='header-link' to='/'>
							Home
						</Link>
						<Link className='header-link' to='/login'>
							Login
						</Link>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
