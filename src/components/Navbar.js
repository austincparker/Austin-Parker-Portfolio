import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Intro
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/technologies">
                Technologies
              </Link>
            </div>
            <Link className="navbar-brand" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
