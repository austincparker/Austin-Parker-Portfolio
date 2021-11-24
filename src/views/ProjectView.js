import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Project from '../components/Project';
import { getProjects } from '../api/data/projectData';

export default function ProjectView({ admin }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="text-center">
      <h1 className="display-4">Projects</h1>
      <div className="container d-flex justify-content-center flex-wrap">
        {projects.map((project) => (
          <Project
            key={project.firebaseKey}
            project={project}
            projects={projects}
            setProjects={setProjects}
            admin={admin}
          />
        ))}
      </div>
      {admin ? (
        <Link className="" to="/create">
          Create a Project
        </Link>
      ) : (
        ''
      )}
    </div>
  );
}

ProjectView.defaultProps = {
  admin: null,
};
ProjectView.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};
