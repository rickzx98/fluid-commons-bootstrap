import FontAwesome from 'react-fontawesome';
import { LABEL_BOOKS } from '../../labels/';
import React from 'react';

export const BookPageHeader = () => {
    return (<h3 className="page-header-title text-primary"><FontAwesome name="book" size="large" fixedWidth={true} />{LABEL_BOOKS}</h3>);
};