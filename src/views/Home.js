import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  .prof-pic-bkg {
    background: url(../../../imgs/acp-background.png);
    padding: 33px 0 33px 0;
    .prof-pic {
      width: 300px;
      border-radius: 50%;
    }
    .hobbies {
      color: white;
      text-align: right;
      margin-right: 40px;
    }
  }
`;

export default function Home() {
  return (
    <OuterContainer className="text-center">
      <div className="prof-pic-bkg rounded-bottom justify-content-between d-flex flex-wrap align-items-center">
        <img
          src="../../../imgs/austin-parker.png"
          alt="austin-parker"
          className="prof-pic"
        />
        <div className="hobbies">
          <h2>Musician</h2>
          <h2>Mountain Biker</h2>
          <h2>Kombucha Brewer</h2>
          <h2>Software Engineer</h2>
        </div>
      </div>
      <div className="type-writer d-flex flex-wrap justify-content-center" />
    </OuterContainer>
  );
}
