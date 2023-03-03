import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
	const [authenticated, setauthenticated] = useState(null);
	useEffect(() => {
		const loggedInUser = localStorage.getItem('authenticated');
		if (loggedInUser) {
			setauthenticated(loggedInUser);
		}
	}, []);

	if (!authenticated) {
		return <Navigate replace to='/' />;
	} else {
		return (
			<div>
				        <p>Welcome to your Dashboard</p>
				      
			</div>
		);
	}
};

export default Dashboard;
