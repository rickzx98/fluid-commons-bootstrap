import { BookSubjectList } from './BookSubjectList';
import PropTypes from 'prop-types';
import React from 'react';
export const BookSubjectIndex = ({ removeSubject, managedBook, subjects }) => {
  return (<div className="subjects">
    <BookSubjectList
      removeSubject={removeSubject}
      subjects={subjects}
      managedBook={managedBook} />
  </div>);
};

BookSubjectIndex.propTypes = {
  removeSubject: PropTypes.func.isRequired,
  managedBook: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired
};
