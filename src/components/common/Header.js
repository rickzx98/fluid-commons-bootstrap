import { APP_NAME, LABEL_SETTINGS } from '../../labels/';

import FontAwesome from 'react-fontawesome';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import React from 'react';

export class Header extends React.Component {
    render() {
        return (<Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="">{APP_NAME}</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem><FontAwesome size="lg" name="gears" fixedWidth={true} />{LABEL_SETTINGS}</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}