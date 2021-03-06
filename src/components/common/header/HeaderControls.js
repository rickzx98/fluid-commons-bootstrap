import { HeaderItem } from './HeaderItem';
import Nav from 'react-bootstrap/lib/Nav';
import PropTypes from 'prop-types';
import React from 'react';
export const HeaderControls = ({ headers, router }) => {
  const newHeaders = headers;
  const navItems = [];
  for (let field in newHeaders) {
    if (newHeaders.hasOwnProperty(field)) {
      const itemProperties = newHeaders[field];
      let path = router.location.pathname;
      if (path.charAt(0) !== '/') {
        path = '/' + path;
      }
      if (!itemProperties.path || (itemProperties.path === path)) {
        if (!itemProperties.isVisible || itemProperties.isVisible()) {
          navItems.push(<HeaderItem field={field}
                                    key={field} itemProperties={itemProperties}/>);
        }
      }
    }
  }
  return (<Nav pullLeft>{navItems}</Nav>);
};

HeaderControls.propTypes = {
  headers: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};
