import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import { QUERY_PROJECTS, QUERY_USER, QUERY_ME } from "../utils/queries";
import ProjectList from "../components/ProjectList";

import Auth from "../utils/auth";

const Dashboard = () => {
	const [projectTitle, setProjectTitle] = useState("");
	const { username: userParam } = useParams();


	const [addProject, { error }] = useMutation(ADD_PROJECT, {
		update(cache, { data: { addProject } }) {
			try {
				const { projects } = cache.readQuery({ query: QUERY_PROJECTS });

				cache.writeQuery({
					query: QUERY_PROJECTS,
					data: { projects: [addProject, ...projects] },
				});
			} catch (e) {
				console.error(e);
			}

			const { me } = cache.readQuery({ query: QUERY_ME });
			cache.writeQuery({
				query: QUERY_ME,
				data: { me: { ...me, projects: [...me.projects, addProject] } },
			});
		},
	});

	const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
		variables: { user: userParam },
	});
	
	const user = data?.me || data?.user || {};
	const projects = data?.projects || [];
	if (loading) {
		return <div>Loading...</div>;
	}

	if (!Auth.loggedIn()) {
		return (
			<h4>
				You need to be logged in to see this. Use the navigation links above to
				sign up or log in!
			</h4>
		);
	}

	const handleAddProject = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addProject({
				variables: {
					projectTitle,
					userId: Auth.getProfile().data.username,
				},
			});
			setProjectTitle("");
		} catch (err) {
			console.error(err);

		}
	};

	const handleProjectTitleChange = (event) => {
		setProjectTitle(event.target.value);
	};

	return (
		<div className="row">
			
			
				<div className="col align-self-center">
					<ProjectList
						projects={user.projects}
						projectTitle={`${user.username}'s projects...`}
						showTitle={false}
						showUsername={false}
					/>
				</div>
				
			
			<div>
				<form onSubmit={handleAddProject}>
					<input
						
						type="text"
						placeholder="New project title"
						value={projectTitle}
						onChange={handleProjectTitleChange}
					/>
					<button className="btn btn-lg btn-light m-3 " type="submit">Add project</button>
				</form>
			</div>
		</div>
	);
};

export default Dashboard;
