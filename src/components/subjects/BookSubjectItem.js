import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

export const BookSubjectItem = ({ subject, onChange, index }) => {
    return (<Link to={'/books/subjects/' + index} className="list-group-item">{subject}</Link>)
};

BookSubjectItem.propTypes = {
    index: PropTypes.number.isRequired,
    subjects: PropTypes.array.isRequired
};