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
        <div className="d-flex justify-content-end">
          <button
            style={{ width: '5px', height: '3px' }}
            type="button"
            className="btn btn-outline-secondary mt-2"
            onClick={signInUser}
          >
            {' '}
          </button>
        </div>
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
