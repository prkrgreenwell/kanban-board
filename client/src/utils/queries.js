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
	query projects($projectId: ID!) {
		projects(projectId: $projectId) {
			_id
			projectTitle
			tasks {
				_id
				title
				projectId
			}
		}
	}
`;

export const QUERY_PROJECT = gql`
	query project($projectId: ID!) {
		project(projectId: $projectId) {
			_id
			projectTitle
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
