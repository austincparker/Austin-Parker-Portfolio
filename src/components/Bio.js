/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const BioCont = styled.div`
  .bio-text {
    background-color: white;
    text-align: left;
    padding: 30px;
    border: 2px solid grey;
    border-radius: 1em;
  }

  .bio-pic {
    width: 100%;
  }
`;

export default function Bio() {
  return (
    <BioCont>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img
              alt="home studio"
              src="../../../imgs/home-studio.png"
              className="bio-pic"
            />
          </div>
          <div className="col-lg-9 bio-text">
            <blockquote>
              Hi there! Thank you for checking out my portfolio. My name is
              Autin Parker, and I'm currently a web development student at
              Nashville Software School.
            </blockquote>
            <blockquote>
              I've been involved in marketing and live events for about 10
              years. Over this time, I've also been involved in photo and video
              editing, graphic design, and music production.
            </blockquote>
            <blockquote>
              I graduated from Middle Tennessee State University with a Bachelor
              of Science in Music Business and a minor in Entrepreneurship. I've
              always been a bit entrepreneurial, and currently help my wife run
              an HR consulting business.
            </blockquote>
            <blockquote>
              I'm honored and ecstatic to be halfway through my journey at NSS
              and treasure all the new skills I've been fortunate enough to
              learn. I've always been into tech, but now I know that it's the
              career path for me. I really appreciate you taking the time to
              view my work, and please reach out if you would like to know
              more.... I'd love to hear from you!
            </blockquote>
          </div>
        </div>
      </div>
    </BioCont>
  );
}
