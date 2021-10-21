import React from 'react';
import PropTypes from 'prop-types';
import Project from '../components/Project';

export default function ProjectView({ projects, setProjects }) {
  return (
    <div className="text-center">
      <h1>Projects</h1>
      <div className="container d-flex justify-content-center flex-wrap">
        {projects.map((project) => (
          <Project
            key={project.firebaseKey}
            project={project}
            projects={projects}
            setProjects={setProjects}
          />
        ))}
      </div>
    </div>
  );
}

ProjectView.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProjects: PropTypes.func.isRequired,
};
