import React from 'react';
import {
  Nav, Navbar, NavItem, NavLink,
} from 'reactstrap';

export default function Navigation() {
  return (
    <div className="nav-container">
      <Navbar color="light" expand="sm" light>
        <Nav className="m-auto" navbar>
          <NavItem className="ap-nav">
            <NavLink href="/">About</NavLink>
          </NavItem>
          <NavItem className="ap-nav">
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>
          <NavItem className="ap-nav">
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
