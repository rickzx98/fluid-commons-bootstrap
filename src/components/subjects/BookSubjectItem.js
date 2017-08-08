import FontAwesome from 'react-fontawesome';
import { LABEL_REMOVE } from '../../labels/';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import { toReadableSubject } from '../../utils/';

export const BookSubjectItem = ({ subject, removeSubject, index }) => {
    return (<div className="subject-item list-group-item">
        <button type="button" onClick={removeSubject} className="btn btn-danger btn-xs"><FontAwesome fixedWidth={true} name="minus" /><span className="hidden-xs">{LABEL_REMOVE}</span></button><Link to={'/books/subjects/' + index}>{toReadableSubject(subject)}</Link></div>);
};

BookSubjectItem.propTypes = {
    index: PropTypes.number,
    removeSubject: PropTypes.func.isRequired,
    subject: PropTypes.string.isRequired
};