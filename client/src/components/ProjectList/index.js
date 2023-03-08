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
      {showTitle && <h3>{projectTitle || 'Projects'}</h3>}
      <ul>
        {projects && projects.map((project) => (
          <li key={project._id}>
            <Link to={`/projects/${project._id}`}>{project.projectTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
