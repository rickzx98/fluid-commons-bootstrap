import '../../../images/profile.jpg';

import * as actions from '../../../actions/HeaderActions';

import { APP_NAME, LABEL_BOOKS, LABEL_LIBRARY, LABEL_SETTINGS } from '../../../labels/';

import FontAwesome from 'react-fontawesome';
import { HeaderControls } from './HeaderControls';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToSettingsFromHeader = this.goToSettings.bind(this);
    this.thisGoToLibrary = this.goToLibrary.bind(this);
    this.thisGoToBooks = this.goToBooks.bind(this);
  }
  goToSettings() {
    browserHistory.push('/settings');
  }

  goToBooks() {
    browserHistory.push('/books');
  }

  goToLibrary() {
    browserHistory.push('/library');
  }

  render() {
    return (<Navbar collapseOnSelect fixedTop={true} fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="">{APP_NAME}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <HeaderControls router={this.props.router} headers={this.props.headers} />
        <Nav pullRight>
          <NavItem onClick={this.thisGoToBooks}><FontAwesome size="lg" name="book"
            fixedWidth={true} />&nbsp;{LABEL_BOOKS}</NavItem>
          <NavItem onClick={this.thisGoToLibrary}><FontAwesome size="lg" name="bookmark"
            fixedWidth={true} />&nbsp;{LABEL_LIBRARY}</NavItem>
          <NavItem onClick={this.goToSettingsFromHeader}><FontAwesome size="lg" name="gear"
            fixedWidth={true} />&nbsp;{LABEL_SETTINGS}
          </NavItem>
          <NavItem><img className="header-thumbnail" height="24" width="24"
            src="/profile.jpg" />&nbsp;{this.props.security.fullname}</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);
  }
}


Header.propTypes = {
  security: PropTypes.object.isRequired,
  headers: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    headers: state.headers
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
