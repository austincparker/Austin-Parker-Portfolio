import React from 'react';
import styled from 'styled-components';

const ProfPic = styled.div`
  img {
    width: 300px;
    border-radius: 50%;
  }
`;

export default function Home() {
  return (
    <div className="text-center">
      <h5 className="display-5">Austin Parker</h5>
      <ProfPic>
        <img src="../../../austin-parker.jpg" alt="austin-parker" />
      </ProfPic>
      <div className="mt-3">
        <p>Prior coming to NSS, Austin worked in marketing and live events.</p>
        <a
          href="https://github.com/austincparker"
          target="_blank"
          rel="noreferrer"
        >
          <h6 className="display-6 text-muted">GitHub</h6>
        </a>
        <a
          href="https://www.linkedin.com/in/austincparker/"
          target="_blank"
          rel="noreferrer"
        >
          <h6 className="display-6 text-muted">LinkedIn</h6>
        </a>
      </div>
    </div>
  );
}
