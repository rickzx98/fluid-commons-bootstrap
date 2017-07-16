import { IndexRoute, Route } from 'react-router';

import AboutPage from './components/AboutPage';
import App from './components/App';
import { ConnectBookPage } from './containers/BooksPage';
import { ConnectedManageBookPage } from './containers/ManageBookPage';
import NotFoundPage from './components/NotFoundPage';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ConnectBookPage} />
    <Route path="books" component={ConnectBookPage} />
    <Route path="books/:id" component={ConnectedManageBookPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
