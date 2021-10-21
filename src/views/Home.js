import React from 'react';
import styled from 'styled-components';

const ProfPic = styled.div`
  img {
    width: 300px;
    border-radius: 1em;
  }
`;

export default function Home() {
  return (
    <div className="text-center">
      <ProfPic>
        <img src="../../../austin-parker.jpg" alt="austin-parker" />
      </ProfPic>
    </div>
  );
}
