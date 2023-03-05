const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
        projects: [Project!]!
	}

	type Project {
		_id: ID
		projectTitle: String
		userId: ID
		user: User
		tasks: [Task]
        title: String
	}

	type Task {
		_id: ID
		title: String
		projectId: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
        user(username: String!): User
		projects: [Project]
		tasks(projectId: ID!): [Task]
        me: User
	}

	type Mutation {
		addProject(projectTitle: String!): Project
		addTask(title: String!, projectId: ID!): Task
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
