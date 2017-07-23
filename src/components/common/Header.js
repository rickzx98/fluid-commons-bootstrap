import '../../images/profile.jpg';

import { APP_NAME, LABEL_BOOKS, LABEL_SETTINGS } from '../../labels/';

import FontAwesome from 'react-fontawesome';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import React from 'react';
import { browserHistory } from 'react-router';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.goToSettingsFromHeader = this.goToSettings.bind(this);
        this.goToBooksFromHeader = this.goToBooks.bind(this);
    }
    goToSettings() {
        browserHistory.push('/settings');
    }
    goToBooks() {
        browserHistory.push('/books');
    }
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
                    <NavItem onClick={this.goToBooksFromHeader} eventKey={1} href="#"><FontAwesome size="lg" name="book" />&nbsp;{LABEL_BOOKS}</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem onClick={this.goToSettingsFromHeader}><FontAwesome size="lg" name="gears" fixedWidth={true} />&nbsp;{LABEL_SETTINGS}</NavItem>
                    <NavItem><img className="header-thumbnail" height="24" width="24" src="profile.jpg" />&nbsp;Jerico de Guzman</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}