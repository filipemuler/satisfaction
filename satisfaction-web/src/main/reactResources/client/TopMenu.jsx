import React, {Component, PropTypes} from 'react'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class TopMenu extends Component {

    render = () =>
    <Navbar fluid>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Dashboard</NavItem>
        <NavItem eventKey={2} href="#">Settings</NavItem>
        <NavItem eventKey={3} href="#">Profile</NavItem>
        <NavItem eventKey={4} href="${app}/logout">Logout</NavItem>
      </Nav>
    </Navbar>
}

export default TopMenu
