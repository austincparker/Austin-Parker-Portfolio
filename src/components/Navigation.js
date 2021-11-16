import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

export default function Navigation() {
  // const history = useHistory();

  const PortNav = styled.div`
    NavLink {
      color: black;
    }
  `;

  return (
    <PortNav>
      <Nav fill justified tabs>
        <NavItem>
          <NavLink active href="/">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </PortNav>
    // <div className="text-center mb-3">
    //   <ButtonGroup size="lg">
    //     <button
    //       onClick={() => history.push('/')}
    //       type="button"
    //       className="btn btn-light border border-dark"
    //     >
    //       Home
    //     </button>
    //     <button
    //       onClick={() => history.push('/projects')}
    //       type="button"
    //       className="btn btn-light border border-dark"
    //     >
    //       Projects
    //     </button>
    //     <button
    //       onClick={() => history.push('/about')}
    //       type="button"
    //       className="btn btn-light border border-dark"
    //     >
    //       About
    //     </button>
    //   </ButtonGroup>
    // </div>
  );
}
