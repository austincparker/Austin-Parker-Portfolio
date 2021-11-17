import React, { useEffect, useState } from 'react';
import Project from '../components/Project';
import { getProjects } from '../api/data/projectData';

export default function ProjectView() {
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
          />
        ))}
      </div>
    </div>
  );
}
