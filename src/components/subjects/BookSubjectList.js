import { BookSubjectItem } from './BookSubjectItem';
import PropTypes from 'prop-types';
import React from 'react';

export const BookSubjectList = ({ subjects, managedBook }) => {
    return (<ul className="list-group">
        {managedBook.subjects.map((subject, index) => <BookSubjectItem
            subjects={subjects}
            subject={subject}
            index={index} />)}
    </ul>);
};

BookSubjectList.propTypes = {
    subjects: PropTypes.array.isRequired,
    managedBook: PropTypes.object.isRequired
};