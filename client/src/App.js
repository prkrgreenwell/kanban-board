import React, { useState } from 'react';

import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	const [currentForm, setCurrentForm] = useState('login');
	const toggleForm = (formName) => {
		setCurrentForm(formName);
	};

	return (
		<ApolloProvider client={client}>
			<div className='App'>
				{currentForm === 'login' ? (
					<Login onFormSwitch={toggleForm} />
				) : (
					<Signup onFormSwitch={toggleForm} />
				)}
			</div>
		</ApolloProvider>
	);
}

export default App;
