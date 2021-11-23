import React from 'react';
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

export default function Home() {
  // console.warn(useLocation());
  return (
    <OuterContainer className="text-center">
      <div className="prof-pic rounded-bottom">
        <img src="../../../imgs/austin-parker.png" alt="austin-parker" />
      </div>
      <SignOut />
    </OuterContainer>
  );
}
