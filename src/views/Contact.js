import React from 'react';
// import { Button } from 'reactstrap';

export default function Contact() {
  return (
    <div className="text-center">
      <h3 className="mb-0">Austin Parker</h3>
      <div className="my-1">
        <a
          href="https://www.linkedin.com/in/austincparker"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mx-1"
            src="https://cdn4.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_linkedin-512.png"
            alt="linkedin"
            width="30px"
          />
        </a>
        <a
          href="https://www.github.com/austincparker"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mx-1"
            src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_GitHub-512.png"
            alt="github"
            width="30px"
          />
        </a>
      </div>
      <h5 className="mb-0">connect@austincparker.com</h5>
      <button
        className="btn btn-large btn-dark my-2"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.open('mailto:connect@austincparker.com');
        }}
      >
        Send Email
      </button>
      <div>
        <img
          className="mobile-phone"
          src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-09-256.png"
          alt="mobile"
          width="15px"
        />
        <span className="mobile-text">615-601-9181</span>
      </div>
      {/* <Button color="primary" onClick={() => console.warn('you clicked me')}>
        View My Resume
      </Button> */}
    </div>
  );
}
