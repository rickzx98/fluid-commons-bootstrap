import { ConnectAppModelPage } from '../containers/AppModalPage';
import { ConnectedNotificationPage } from '../containers/NotificationPage';
import { Header } from './common/';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.security;
    const prevAuthenticated = prevProps.security.isAuthenticated;
    const isLoggingOut = prevAuthenticated && !isAuthenticated;
    const isLoggingIn = !prevAuthenticated && isAuthenticated;

    if (isLoggingIn) {
      // redirect
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }
  render() {
    return (
      <div>
        <ConnectAppModelPage />
        <ConnectedNotificationPage />
        <Header {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  security: PropTypes.object.isRequired,
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    security: state.security
  }
}

export const ConnectApp = connect(mapStateToProps)(App);
