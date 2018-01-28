import { ConnectSample } from './components/fluid-commons/Sample';
// import { IndexRoute, Route } from 'react-router';
// import { ConnectApp } from './containers/AppPage';
// import { ConnectBookPage } from './containers/BooksPage';
// import { ConnectLoginPage } from './containers/LoginPage';
// import { ConnectSecurityCheckerPage } from './containers/SecurityCheckerPage';
// import { ConnectSettingsPage } from './containers/SettingsPage';
// import { ConnectedGoogleBooksPage } from './containers/GoogleBooksPage';
// import { ConnectedLibraryPage } from './containers/LibraryPage';
// import { ConnectedManageBookPage } from './containers/ManageBookPage';
// import { ConnectedManagedLibraryPage } from './containers/ManagedLibraryPage';
// import { ConnectedManagedSubjectPage } from './containers/ManagedSubjectPage';
// import NotFoundPage from './components/NotFoundPage';
import React from 'react';
import { Route } from 'react-router';

export default (
  <Route path="/" component={ConnectSample}></Route>
  /*<Route path="/" component={ConnectApp}>
    <Route path="login" component={ConnectLoginPage}/>
    <Route component={ConnectSecurityCheckerPage}>
      <IndexRoute component={ConnectBookPage}/>
      <Route path="library" component={ConnectedLibraryPage}/>
      <Route path="library/new" component={ConnectedManagedLibraryPage}/>
      <Route path="books" component={ConnectBookPage}/>
      <Route path="books/new" component={ConnectedManageBookPage}/>
      <Route path="books/new/search" component={ConnectedGoogleBooksPage}/>
      <Route path="books/:id" component={ConnectedManageBookPage}/>
      <Route path=":resourceType/subjects/:index" component={ConnectedManagedSubjectPage}/>
      <Route path=":resourceType/subjects/new" component={ConnectedManagedSubjectPage}/>
      <Route path="settings" component={ConnectSettingsPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>*/
);
