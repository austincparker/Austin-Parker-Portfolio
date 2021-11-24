import React from 'react';
import 'firebase/auth';
import PropTypes from 'prop-types';
import ProjectForm from '../components/ProjectForm';

export default function Create({ user }) {
  return (
    <div>
      <h1>Create</h1>
      <ProjectForm user={user} />
    </div>
  );
}

Create.defaultProps = {
  user: null,
};
Create.propTypes = {
  user: PropTypes.node,
};
