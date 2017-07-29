import { LABEL_CANCEL, LABEL_MAIN_TERM, LABEL_SAVE, LABEL_SUBJECT_SUBDIVISION, LABEL_UPDATE } from '../../labels';
import { SearchSelector, Selector, TextInput } from '../common/';
import { getAllFirstIndicatorTopicalTermsForDropDown, getAllSecondIndicatorTopicalTermsForDropDown, getAllSubjectsForDropDown } from '../../selectors/subjectSelectors';

import PropTypes from 'prop-types';
import React from 'react';
import Subject from '../../api/subjects/Subject';

export const BookSubjectForm = ({ subjects, onChange, managedSubject, cancelManagedSubject, addSubjectToManagedBook, updateManagedSubject }) => {
    return (<form className="form container-fluid" onSubmit={event => {
        event.preventDefault();
        if (managedSubject.update) {
            updateManagedSubject(managedSubject[Subject.SUBJECT_FORMAT]);
        } else {
            addSubjectToManagedBook(managedSubject[Subject.SUBJECT_FORMAT]);
        }
    }}>
        <div className="form-group">
            <button type="button" onClick={cancelManagedSubject} className="btn btn-danger">{LABEL_CANCEL}</button>
            <button type="submit" className="btn btn-primary">{managedSubject.update ? LABEL_UPDATE : LABEL_SAVE}</button>
        </div>
        <div className="col-sm-12">
            <TextInput disabled={true} label="Subject Format" name={Subject.SUBJECT_FORMAT} value={managedSubject[Subject.SUBJECT_FORMAT]} />
        </div>
        <div className="col-sm-6">
            <h3>{LABEL_MAIN_TERM}</h3>
            <Selector value={managedSubject[Subject.LEVEL_OF_SUBJECT]} onChange={onChange} options={getAllFirstIndicatorTopicalTermsForDropDown()} label="Level of subject" name={Subject.LEVEL_OF_SUBJECT} />
            <Selector value={managedSubject[Subject.THESAURUS]} onChange={onChange} options={getAllSecondIndicatorTopicalTermsForDropDown()} label="Thesaurus" name={Subject.THESAURUS} />
            <SearchSelector value={managedSubject[Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Topical term or geographic name entry element" name={Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY} />
            <SearchSelector value={managedSubject[Subject.TOPICAL_TERM_FOLLOWING]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Topical term following geographic name entry element" name={Subject.TOPICAL_TERM_FOLLOWING} />
            <SearchSelector value={managedSubject[Subject.LOCATION_OF_EVENT]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Location of event" name={Subject.LOCATION_OF_EVENT} />

        </div>
        <div className="col-sm-6">
            <h3 className="clearfix">&nbsp;</h3>
            <SearchSelector value={managedSubject[Subject.ACTIVE_DATES]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Active dates" name={Subject.ACTIVE_DATES} />
            <SearchSelector value={managedSubject[Subject.RELATOR_TERM]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Relator term" name={Subject.RELATOR_TERM} />
            <SearchSelector value={managedSubject[Subject.MISC_INFO]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Miscellaneous information" name={Subject.MISC_INFO} />
            <SearchSelector value={managedSubject[Subject.RELATIONSHIP]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Relationship" name={Subject.RELATIONSHIP} />
        </div>
        <div className="col-sm-12">
            <h3>{LABEL_SUBJECT_SUBDIVISION}</h3>
            <SearchSelector value={managedSubject[Subject.FORM_SUBDIVISION]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Form subdivision " name={Subject.FORM_SUBDIVISION} />
            <SearchSelector value={managedSubject[Subject.GENERAL_SUBDIVISION]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="General subdivision" name={Subject.GENERAL_SUBDIVISION} />
            <SearchSelector value={managedSubject[Subject.CHRONOLOGICAL_SUBDIVISION]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Chronological subdivision" name={Subject.CHRONOLOGICAL_SUBDIVISION} />
            <SearchSelector value={managedSubject[Subject.GEOGRAPHIC_SUBDIVISION]} multiple={true} onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Geographic subdivision" name={Subject.GEOGRAPHIC_SUBDIVISION} />
        </div>
    </form>);
};

BookSubjectForm.propTypes = {
    subjects: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    managedSubject: PropTypes.object.isRequired,
    cancelManagedSubject: PropTypes.func.isRequired,
    addSubjectToManagedBook: PropTypes.func.isRequired,
    updateManagedSubject: PropTypes.func.isRequired
};