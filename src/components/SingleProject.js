import React from 'react';
import PropTypes from 'prop-types';

export default function SingleProject({ obj }) {
  return (
    <div>
      <h1>Single Project {obj.name}</h1>
    </div>
  );
}

SingleProject.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

SingleProject.defaultProps = {
  obj: {},
};
