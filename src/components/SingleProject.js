import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SingleProject({ obj }) {
  return (
    <div>
      <h1>Single Project {obj.name}</h1>
      <img width="666px" alt={obj.name} src={obj.imageUrl} />
      <h5>{obj.description}</h5>
      <h5>{obj.languages}</h5>
      <h5>{obj.otherTools}</h5>

      <Link to="/projects">Back to Projects</Link>
    </div>
  );
}

SingleProject.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

SingleProject.defaultProps = {
  obj: {},
};
