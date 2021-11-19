import React, { useEffect, useState } from 'react';
import {
  Nav, Navbar, NavbarBrand, NavItem, NavLink,
} from 'reactstrap';
import { useLocation } from 'react-router';

export default function Navigation() {
  const [aboutBg, setAbNavBg] = useState('');
  const [aboutBorder, setAbBorder] = useState('');
  const [projBg, setPrNavBg] = useState('');
  const [projBorder, setPrBorder] = useState('');
  const [techBg, setTeNavBg] = useState('');
  const [techBorder, setTeBorder] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      setAbNavBg('white');
      setAbBorder('1px solid black');
    } else if (location.pathname === '/projects') {
      setPrNavBg('white');
      setPrBorder('1px solid black');
    } else if (location.pathname === '/technologies') {
      setTeNavBg('white');
      setTeBorder('1px solid black');
    }
  }, [location]);

  console.warn(location.pathname);
  return (
    <div className="nav-container">
      <Navbar expand="sm" light>
        <NavbarBrand href="/" className="text-muted">
          Intro
        </NavbarBrand>
        <Nav className="m-auto" navbar>
          <NavItem className="ap-nav">
            <NavLink
              href="/about"
              style={{
                background: aboutBg,
                border: aboutBorder,
                borderRadius: '1rem',
              }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem className="ap-nav">
            <NavLink
              href="/projects"
              style={{
                background: projBg,
                border: projBorder,
                borderRadius: '1rem',
              }}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem className="ap-nav">
            <NavLink
              href="/technologies"
              style={{
                background: techBg,
                border: techBorder,
                borderRadius: '1rem',
              }}
            >
              Technologies
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarBrand href="/contact" className="text-muted">
          Contact
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
