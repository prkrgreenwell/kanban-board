import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
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
						<Link className='header-link' onClick={logout} to='/home'>
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
