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
    max-width: 300px;
  }
`;

export default function Bio() {
  return (
    <BioCont>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img
              alt="home studio"
              src="../../../imgs/home-studio.png"
              className="bio-pic"
            />
          </div>
          <div className="col-md-8 col-sm-12 bio-text">
            <blockquote>
              Prior coming to NSS, Austin worked in marketing and live events.
            </blockquote>
            <blockquote>
              On the side, he has been involved in photo & video editing,
              graphic design, and music production for the last 9-10 years.
            </blockquote>
            <blockquote>
              Since he had always been drawn to technology, he has learned all
              about many kinds of software and has been learning the basics of
              coding over the last few years.
            </blockquote>
            <blockquote>
              This year, he decided to fully commit to a career as a web
              developer, and was extremely thankful to be able to sign up for
              the NSS Full-Stack Web Developer Bookcamp.
            </blockquote>
          </div>
        </div>
      </div>
    </BioCont>
  );
}
