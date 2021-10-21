import React from 'react';
import PropTypes from 'prop-types';
import Project from '../components/Project';

export default function ProjectView({ projects, setProjects }) {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project
          project={project}
          projects={projects}
          setProjects={setProjects}
        />
      ))}
    </div>
  );
}

ProjectView.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProjects: PropTypes.func.isRequired,
};
