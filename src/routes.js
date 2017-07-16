import { IndexRoute, Route } from 'react-router';

import AboutPage from './components/AboutPage';
import App from './components/App';
import { ConnectBookPage } from './containers/BooksPage';
import NotFoundPage from './components/NotFoundPage';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ConnectBookPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
