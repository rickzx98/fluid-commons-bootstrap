import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
