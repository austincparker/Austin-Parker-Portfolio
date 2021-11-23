import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SignOut from './SignOut';

const OuterContainer = styled.div`
  .prof-pic {
    background: url(../../../imgs/acp-background.png);
    padding: 33px 0 33px 0;
    img {
      width: 300px;
      border-radius: 50%;
    }
  }
`;

export default function Home({ user }) {
  console.warn(user.fullName);
  return (
    <OuterContainer className="text-center">
      <div className="prof-pic rounded-bottom">
        <img src="../../../imgs/austin-parker.png" alt="austin-parker" />
      </div>
      {!user ? <div>hi</div> : <SignOut />}
    </OuterContainer>
  );
}

Home.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Home.defaultProps = {
  user: {},
};
