import { LABEL_THESAURUS, LABEL_TYPE_OF_HEADING } from '../../labels/';
import {
  getAllSecondIndicatorTopicalTermsForDropDown,
  getAllSubjectsForDropDown,
  getFirstIndicatorSelector,
  getSubjectHeadingsForDropdown
} from '../../selectors/subjectSelectors';

import PropTypes from 'prop-types';
import React from 'react';
import { Selector, HiddenButton } from '../common/';
import { Subject } from '../../api/subjects';
import { SubjectFieldFormControls } from './form/SubjectFieldFormControls';

export const BookSubjectForm = ({ subjects, onChange, subjectFields, subjectHeadings,
  managedSubject, onSubmit }) => {
  return (<form className="form container-fluid" onSubmit={onSubmit}>
    <HiddenButton/>
    <Selector required={true}
              onChange={onChange}
              name={Subject.TYPE_OF_HEADINGS}
              label={LABEL_TYPE_OF_HEADING}
              value={managedSubject[Subject.TYPE_OF_HEADINGS]}
              options={getSubjectHeadingsForDropdown(subjectHeadings)}/>
    {managedSubject[Subject.TYPE_OF_HEADINGS] && <Selector required={true}
                                                           value={managedSubject.data[Subject.FIRST_INDICATOR]}
                                                           onChange={onChange} name={Subject.FIRST_INDICATOR}
      {...getFirstIndicatorSelector(managedSubject[Subject.TYPE_OF_HEADINGS])} />}
    <Selector required={true}
              value={managedSubject.data[Subject.SECOND_INDICATOR]}
              onChange={onChange} options={getAllSecondIndicatorTopicalTermsForDropDown()}
              label={LABEL_THESAURUS} name={Subject.SECOND_INDICATOR}/>
    {managedSubject[Subject.TYPE_OF_HEADINGS] && <SubjectFieldFormControls
      subjectCode={managedSubject[Subject.TYPE_OF_HEADINGS]}
      subjectOptions={getAllSubjectsForDropDown(subjects)}
      subjectField={subjectFields[managedSubject[Subject.TYPE_OF_HEADINGS]]}
      typeOfHeading={managedSubject[Subject.TYPE_OF_HEADINGS]}
      data={managedSubject.data}
      onChange={onChange}/>}
  </form>);
};

BookSubjectForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  subjectHeadings: PropTypes.array.isRequired,
  subjectFields: PropTypes.object.isRequired,
  managedSubject: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};
