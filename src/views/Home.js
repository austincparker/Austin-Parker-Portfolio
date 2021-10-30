import React from 'react';
import styled from 'styled-components';

const ProfPic = styled.div`
  background: url(../../../acp-background.png);
  border-radius: 1em;
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
        <p>
          On the side, he has been involved in photo & video editing, graphic
          design, and music production for the last 9-10 years.
        </p>
        <p>
          Since he had always been drawn to technology, he has learned all about
          many kinds of software and has been learning the basics of coding over
          the last few years.
        </p>
        <p>
          This year, he decided to fully commit to a career as a web developer,
          and was extremely thankful to be able to sign up for the NSS
          Full-Stack Web Developer Bookcamp.
        </p>
        <p>
          As of this point, Austin has almost completed the 6 month section of
          front-end development, and is drawn to it, but he still has 6 months
          of back-end training coming up.
        </p>
        <p>
          Thank you for checking out this portfolio. It was made using the
          basics we have been learning in class about React, and it will be
          improved as I learn more.
        </p>
        <p>
          The navbar at the top of the page will take you to some projects and
          more about me. Thanks again!
        </p>
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
