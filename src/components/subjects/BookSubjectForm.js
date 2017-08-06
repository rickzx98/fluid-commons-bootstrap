import {
  getAllSecondIndicatorTopicalTermsForDropDown,
  getAllSubjectsForDropDown,
  getFirstIndicatorSelector,
  getSubjectHeadingsForDropdown
} from '../../selectors/subjectSelectors';

import { BookSubjectButtonControls } from './form/BookSubjectButtonControls';
import { LABEL_THESAURUS } from '../../labels/';
import { LABEL_TYPE_OF_HEADING } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';
import { Selector } from '../common/';
import { Subject } from '../../api/subjects';
import { SubjectFieldFormControls } from './form/SubjectFieldFormControls';

export const BookSubjectForm = ({ subjects, onChange, subjectFields, subjectHeadings,
  managedSubject, cancelManagedSubject }) => {
  return (<form className="form container-fluid">
    <BookSubjectButtonControls
      cancelManagedSubject={cancelManagedSubject}
      managedSubject={managedSubject} />
    <Selector required={true}
      onChange={onChange}
      name={Subject.TYPE_OF_HEADINGS}
      label={LABEL_TYPE_OF_HEADING}
      value={managedSubject.subjectCode}
      options={getSubjectHeadingsForDropdown(subjectHeadings)} />
    <Selector value={managedSubject[Subject.SECOND_INDICATOR]}
      onChange={onChange} options={getAllSecondIndicatorTopicalTermsForDropDown()}
      label={LABEL_THESAURUS} name={Subject.SECOND_INDICATOR} />
    {managedSubject.subjectCode && <Selector required={true}
      value={managedSubject.data[Subject.FIRST_INDICATOR]}
      onChange={onChange} name={Subject.FIRST_INDICATOR}
      {...getFirstIndicatorSelector(managedSubject.subjectCode) } />}
    {managedSubject.subjectCode && <SubjectFieldFormControls
      subjectOptions={getAllSubjectsForDropDown(subjects)}
      subjectField={subjectFields[managedSubject.subjectCode]}
      typeOfHeading={managedSubject.subjectCode}
      data={managedSubject.data}
      onChange={onChange} />}
  </form>);
};

BookSubjectForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  subjectHeadings: PropTypes.array.isRequired,
  subjectFields: PropTypes.object.isRequired,
  managedSubject: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  cancelManagedSubject: PropTypes.func.isRequired
};
