import React from 'react';
import {
  Nav, Navbar, NavbarBrand, NavItem, NavLink,
} from 'reactstrap';
import styled from 'styled-components';

const ApNav = styled.div`
  background-color: whitesmoke;

  Navbar {
    color: blue;
  }
`;

export default function Navigation() {
  return (
    <ApNav className="nav-container">
      <Navbar expand="sm" light>
        <NavbarBrand href="/" className="text-muted">
          Intro
        </NavbarBrand>
        <Nav className="m-auto" navbar>
          <NavItem className="ap-nav">
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem className="ap-nav">
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>
          <NavItem className="ap-nav">
            <NavLink href="/technologies">Technologies</NavLink>
          </NavItem>
        </Nav>
        <NavbarBrand href="/contact" className="text-muted">
          Contact
        </NavbarBrand>
      </Navbar>
    </ApNav>
  );
}
