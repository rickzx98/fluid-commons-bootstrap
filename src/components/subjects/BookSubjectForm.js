import { LABEL_CANCEL, LABEL_MAIN_TERM, LABEL_SAVE, LABEL_SUBJECT_SUBDIVISION } from '../../labels';
import { SearchSelector, Selector, TextInput } from '../common/';
import { getAllFirstIndicatorTopicalTermsForDropDown, getAllSecondIndicatorTopicalTermsForDropDown, getAllSubjectsForDropDown } from '../../selectors/subjectSelectors';

import PropTypes from 'prop-types';
import React from 'react';
import Subject from '../../api/subjects/Subject';

export const BookSubjectForm = ({ subjects, onChange, managedSubject, goToPrevious, addSubjectToManagedBook }) => {
    return (<form className="form container-fluid" onSubmit={event => {
        event.preventDefault();
        addSubjectToManagedBook(managedSubject[Subject.SUBJECT_FORMAT]);
    }}>
        <div className="form-group">
            <button type="button" onClick={goToPrevious} className="btn btn-warning">{LABEL_CANCEL}</button>
            <button type="submit" className="btn btn-primary">{LABEL_SAVE}</button>
        </div>
        <div className="col-sm-12">
            <TextInput disabled={true} label="Subject Format" name={Subject.SUBJECT_FORMAT} value={managedSubject[Subject.SUBJECT_FORMAT]} />
        </div>
        <div className="col-sm-4">
            <h3>{LABEL_MAIN_TERM}</h3>
            <Selector onChange={onChange} options={getAllFirstIndicatorTopicalTermsForDropDown()} label="Level of subject" name={Subject.LEVEL_OF_SUBJECT} />
            <Selector onChange={onChange} options={getAllSecondIndicatorTopicalTermsForDropDown()} label="Thesaurus" name={Subject.THESAURUS} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Topical term or geographic name entry element" name={Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Topical term following geographic name entry element" name={Subject.TOPICAL_TERM_FOLLOWING} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Location of event" name={Subject.LOCATION_OF_EVENT} />

        </div>
        <div className="col-sm-4">
            <h3 className="clearfix">&nbsp;</h3>
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Active dates" name={Subject.ACTIVE_DATES} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Relator term" name={Subject.RELATOR_TERM} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Miscellaneous information" name={Subject.MISC_INFO} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Relationship" name={Subject.RELATIONSHIP} />
        </div>
        <div className="col-sm-4">
            <h3>{LABEL_SUBJECT_SUBDIVISION}</h3>
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Form subdivision " name={Subject.FORM_SUBDIVISION} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="General subdivision" name={Subject.GENERAL_SUBDIVISION} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Chronological subdivision" name={Subject.CHRONOLOGICAL_SUBDIVISION} />
            <SearchSelector multiple={true} valueKey="value" onChange={onChange} options={getAllSubjectsForDropDown(subjects)} labelKey="label" label="Geographic subdivision" name={Subject.GEOGRAPHIC_SUBDIVISION} />
        </div>
    </form>);
};

BookSubjectForm.propTypes = {
    subjects: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    managedSubject: PropTypes.object.isRequired,
    goToPrevious: PropTypes.func.isRequired,
    addSubjectToManagedBook: PropTypes.func.isRequired
};