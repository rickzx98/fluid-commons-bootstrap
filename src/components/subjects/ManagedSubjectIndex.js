import { PageBody, PageHeader } from '../common/';

import { BookSubjectForm } from './BookSubjectForm';
import { LABEL_SUBJECTS } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';

export const ManagedSubjectIndex = ({ subjects, subjectHeadings, subjectFields, managedSubject,
  onChange, onSubmit }) => {
  return (<div className="subjects page">
    <PageHeader label={LABEL_SUBJECTS} iconName={'hashtag'}/>
    <PageBody>
      <BookSubjectForm
        onSubmit={onSubmit}
        subjects={subjects}
        onChange={onChange}
        managedSubject={managedSubject}
        subjectFields={subjectFields}
        subjectHeadings={subjectHeadings}/>
    </PageBody>
  </div>);
};

ManagedSubjectIndex.propTypes = {
  onChange: PropTypes.func.isRequired,
  managedSubject: PropTypes.object.isRequired,
  subjectHeadings: PropTypes.array.isRequired,
  subjectFields: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};
