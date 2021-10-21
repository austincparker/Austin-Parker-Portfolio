import React, { useEffect, useState } from 'react';
import getProjects from '../api/data/projectData';
import Navigation from '../components/Navigation';
import Routes from '../routes';

function Initialize() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="App container">
      <Navigation />
      <Routes projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default Initialize;
