import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../api/data/projectData';
import SingleProject from '../components/SingleProject';

export default function MoreInfo({ admin }) {
  const [singleProj, setSingleProj] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleProject(key).then(setSingleProj);
  }, []);
  return (
    <div>
      <SingleProject obj={singleProj} admin={admin} />
    </div>
  );
}

MoreInfo.defaultProps = {
  admin: null,
};
MoreInfo.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};
