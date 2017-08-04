import {
    LABEL_SUBJECT_GENRE_INDEX_TERM,
    LABEL_SUBJECT_GEOGRAPHIC_NAME,
    LABEL_SUBJECT_PERSONAL_NAME,
    LABEL_SUBJECT_TOPICAL_TERM
} from '../labels/';

import { SubjectHeading } from '../api/subjects/';
import { createOptionObject } from '../utils/';

export function getAllSubjectHeadersForDropDown() {
    return [
        'Personal Name',
        'Corporate Name',
        'Meeting Name',
        'Uniform Title',
        'Chronological Term',
        'Topical Term',
        'Geographic Term',
        'Uncontrolled',
        'Faceted Topical Term',
        'Genre/Form',
        'Hierarchical Place Name',
        'Topical Term (OCLC, RLIN)'
    ];
}

export function getAllFirstIndicatorTopicalTermsForDropDown() {
    return [{
        value: '',
        label: '-- select --'
    }, {
        value: '#',
        label: 'No information provided'
    }, {
        value: '0',
        label: 'No level specified'
    }, {
        value: '1',
        label: 'Primary'
    }, {
        value: '2',
        label: 'Secondary'
    }];
}

export function getAllSecondIndicatorTopicalTermsForDropDown() {
    return [{
        value: '',
        label: '-- select --'
    }, {
        value: '0',
        label: 'Library of Congress Subject Headings'
    }, {
        value: '1',
        label: 'LC subject headings for children\'s literature'
    }, {
        value: '2',
        label: 'Medical Subject Headings'
    }, {
        value: '3',
        label: 'National Agricultural Library subject authority file'
    }, {
        value: '4',
        label: 'Source not specified'
    }, {
        value: '5',
        label: 'Canadian Subject Headings'
    }, {
        value: '6',
        label: 'Répertoire de vedettes-matière'
    }, {
        value: '7',
        label: 'Source specified in subfield $2'
    }];
}

export function getAllSubjectsForDropDown(subjects) {
    return subjects.map(subject => Object.assign({}, { label: subject.name, value: subject.name }));
}

export function getAllSubjectHeadingsForDropdown() {
    return [createOptionObject('600', LABEL_SUBJECT_PERSONAL_NAME), createOptionObject('650', LABEL_SUBJECT_TOPICAL_TERM),
    createOptionObject('651', LABEL_SUBJECT_GEOGRAPHIC_NAME), createOptionObject('655', LABEL_SUBJECT_GENRE_INDEX_TERM)];
}

export function getSubjectFieldsForDropdown(subject) {

}
