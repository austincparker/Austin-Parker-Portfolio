import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import PublicRoutes from './PublicRoutes';

export default function Routes({ admin, user }) {
  return (
    <div>
      {admin ? (
        <AdminRoutes admin={admin} user={user} />
      ) : (
        <PublicRoutes user={user} />
      )}
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
  admin: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: {},
  admin: {},
};
