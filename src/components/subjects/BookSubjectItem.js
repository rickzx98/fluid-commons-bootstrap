import { LABEL_REMOVE } from '../../labels/';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

export const BookSubjectItem = ({ subject, removeSubject, index }) => {
    return (<div className="subject-item list-group-item"><button type="button" onClick={removeSubject} className="btn btn-danger btn-xs">{LABEL_REMOVE}</button><Link to={'/books/subjects/' + index}>{subject}</Link></div>);
};

BookSubjectItem.propTypes = {
    index: PropTypes.number,
    removeSubject: PropTypes.func.isRequired,
    subject: PropTypes.string.isRequired
};