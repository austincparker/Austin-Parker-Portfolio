import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../api/data/projectData';
import SingleProject from '../components/SingleProject';

export default function MoreInfo() {
  const [singleProj, setSingleProj] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleProject(key).then(setSingleProj);
  }, []);
  return (
    <div>
      <h1>This is more info</h1>
      <SingleProject obj={singleProj} />
    </div>
  );
}
