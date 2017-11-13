import { IndexRoute, Route } from 'react-router';

import { ConnectApp } from './containers/AppPage';
import { ConnectBookPage } from './containers/BooksPage';
import { ConnectLoginPage } from './containers/LoginPage';
import { ConnectProfilePage } from './containers/ProfilePage';
import { ConnectSecurityCheckerPage } from './containers/SecurityCheckerPage';
import { ConnectSettingsPage } from './containers/SettingsPage';
import { ConnectedGoogleBooksPage } from './containers/GoogleBooksPage';
import { ConnectedManageBookPage } from './containers/ManageBookPage';
import { ConnectedManagedSubjectPage } from './containers/ManagedSubjectPage';
import NotFoundPage from './components/NotFoundPage';
import React from 'react';

export default (
  <Route path="/" component={ConnectApp}>
    <Route path="login" component={ConnectLoginPage} />
    <Route component={ConnectSecurityCheckerPage}>
      <IndexRoute component={ConnectBookPage} />
      <Route path="books" component={ConnectBookPage} />
      <Route path="books/new" component={ConnectedManageBookPage} />
      <Route path="books/new/search" component={ConnectedGoogleBooksPage} />
      <Route path="books/:id" component={ConnectedManageBookPage} />
      <Route path=":resourceType/subjects/:index" component={ConnectedManagedSubjectPage} />
      <Route path=":resourceType/subjects/new" component={ConnectedManagedSubjectPage} />
      <Route path="settings" component={ConnectSettingsPage} />
      <Route path="profile" component={ConnectProfilePage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);
