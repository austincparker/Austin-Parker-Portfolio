import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleProject } from '../api/data/projectData';
import ProjectForm from '../components/ProjectForm';

export default function Edit() {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleProject(key).then(setEditItem);
  }, []);

  return (
    <div>
      <h1 className="display-3">Edit Project - {editItem.name}</h1>
      <ProjectForm obj={editItem} />
    </div>
  );
}
