import { IndexRoute, Route } from 'react-router';

import AboutPage from './components/AboutPage';
import App from './components/App';
import { ConnectBookPage } from './containers/BooksPage';
import { ConnectBookViewPage } from './containers/BookViewPage';
import NotFoundPage from './components/NotFoundPage';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <Route path="books" component={ConnectBookPage} />
    <Route path="books/:id" component={ConnectBookViewPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
