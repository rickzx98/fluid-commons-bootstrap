import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import { ConnectBookPage } from './containers/BooksPage';
import { ConnectSettingsPage } from './containers/SettingsPage';
import { ConnectedGoogleBooksPage } from './containers/GoogleBooksPage';
import { ConnectedManageBookPage } from './containers/ManageBookPage';
import { ConnectedManagedSubjectPage } from './containers/ManagedSubjectPage';
import NotFoundPage from './components/NotFoundPage';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ConnectBookPage} />
    <Route path="books" component={ConnectBookPage} />
    <Route path="books/new" component={ConnectedManageBookPage} />
    <Route path="books/new/search" component={ConnectedGoogleBooksPage} />
    <Route path="books/:id" component={ConnectedManageBookPage} />
    <Route path="books/subjects/:index" component={ConnectedManagedSubjectPage} />
    <Route path="books/subjects/:resourceType/new" component={ConnectedManagedSubjectPage} />
    <Route path="settings" component={ConnectSettingsPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
