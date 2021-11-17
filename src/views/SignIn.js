import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { signInUser } from '../api/auth';

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      ) : (
        <button type="button" className="btn btn-success" onClick={signInUser}>
          Sign In
        </button>
      )}
    </>
  );
}

SignIn.defaultProps = {
  user: null,
};
SignIn.propTypes = {
  user: PropTypes.node,
};
