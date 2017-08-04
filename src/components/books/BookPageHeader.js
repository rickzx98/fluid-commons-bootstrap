import '../../images/books-header.jpg';

import FontAwesome from 'react-fontawesome';
import { LABEL_BOOKS } from '../../labels/';
import React from 'react';

export const BookPageHeader = () => {
  return (<div className="page-header">
    <h3 className="page-header-title">
      <FontAwesome name="book" size="lg" fixedWidth={true} /><p> {LABEL_BOOKS} </p></h3>
  </div>);
};
