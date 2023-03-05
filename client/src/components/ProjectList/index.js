import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({
	projects,
	projectTitle,
	showTitle = true,
	showUsername = true,
}) => {
	if (!projects) {
		return <h3>No Projects Yet</h3>;
	}

	return (
		<div className="col-12 col-md-10 mb-5">
			<h3>Projects:</h3>
			<ul>
				{projects.map((project) => (
					<li key={project._id}>
						<Link to={`/projects/${project._id}`}>
							{showTitle && project.projectTitle}
						</Link>
						{showUsername && (
							<span>
								&nbsp; by {project.user ? project.user.username : "Unknown"}
							</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectList;
