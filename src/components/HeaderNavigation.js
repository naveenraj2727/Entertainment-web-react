import React from 'react';
import {Nav,NavItem,Navbar,MenuItem,NavDropdown} from 'react-bootstrap';
//import NavItem from 'react-bootstrap/lib/NavItem';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom";

class HeaderNavigation extends React.Component {
    render() {

      return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to="/">Towers</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Nav>
            <LinkContainer key={1} to ="/shows">
            <NavItem eventKey={1} >Shows</NavItem>
            </LinkContainer>
            </Nav>
            <Nav>
            <NavDropdown eventKey={3} title="Cuisine" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Italian</MenuItem>
              <MenuItem eventKey={3.2}>French</MenuItem>
              <MenuItem eventKey={3.3}>Mediterranean</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Chinese</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      );
    }
  }
  export default HeaderNavigation;