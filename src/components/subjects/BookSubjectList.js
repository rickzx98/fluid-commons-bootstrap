import { BookSubjectItem } from './BookSubjectItem';
import PropTypes from 'prop-types';
import React from 'react';

export const BookSubjectList = ({ managedBook, removeSubject }) => {
    return (<ul className="list-group">
        {managedBook.subjects.map((subject, index) => (<BookSubjectItem removeSubject={() => {
            removeSubject(index);
        }} key={'book_subject_' + index} subject={subject} index={index} />))}
    </ul>);
};

BookSubjectList.propTypes = {
    managedBook: PropTypes.object.isRequired,
    removeSubject: PropTypes.func.isRequired
};