import { gql } from "@apollo/client";

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			projects {
				_id
				projectTitle
			}
		}
	}
`;
export const QUERY_PROJECTS = gql`
	query projects($userId: ID!) {
		projects(userId: $userId) {
			_id
			title
			user {
				_id
				username
				email
			}
			tasks {
				_id
				title
				projectId
			}
		}
	}
`;

export const QUERY_ME = gql`
	query me {
		me {
			_id
			username
			email
			projects {
				_id
				projectTitle
			}
		}
	}
`;
