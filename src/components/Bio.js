import React from 'react';
import styled from 'styled-components';

const BioCont = styled.div`
  .intro-text-right {
    background-color: white;
    margin: 10px 0 0 auto;
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    text-align: right;
  }

  .intro-text-left {
    background-color: white;
    margin: 10px 0 auto 0;
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    text-align: left;
  }
`;

export default function Bio() {
  return (
    <BioCont>
      <div className="intro-text-right">
        <p>Prior coming to NSS, Austin worked in marketing and live events.</p>
        <p>
          On the side, he has been involved in photo & video editing, graphic
          design, and music production for the last 9-10 years.
        </p>
      </div>
      <div className="intro-text-left">
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
      </div>
      <div className="intro-text-right">
        <p>
          As of this point, Austin has almost completed the 6 month section of
          front-end development, and he still has 6 months of back-end training
          coming up.
        </p>
        <p>
          Thank you for checking out this portfolio. It was made using the
          basics we have been learning in class about React, and it will be
          improved as I learn more.
        </p>
      </div>
      <div className="intro-text-left">
        The navbar at the top of the page will take you to some projects and
        more about me. Thanks again!
      </div>
    </BioCont>
  );
}
