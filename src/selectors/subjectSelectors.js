import {
    LABEL_BASIC,
    LABEL_EMPTY_OPTION,
    LABEL_FACETED,
    LABEL_FAMILY_NAME,
    LABEL_FORENAME,
    LABEL_LEVEL_OF_SUBJECT,
    LABEL_NO_INFO_PROVIDED,
    LABEL_NO_LEVEL_SPECIFIED,
    LABEL_PRIMARY,
    LABEL_SECONDARY,
    LABEL_SURNAME,
    LABEL_TYPE_OF_HEADING,
    LABEL_TYPE_OF_PERSONAL_NAME,
    LABEL_UNDEFINED
} from '../labels/';

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
        label: LABEL_EMPTY_OPTION
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
        label: LABEL_EMPTY_OPTION
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

export function getFirstIndicatorSelector(subject) {
    switch (subject) {
        case '600':
            return {
                label: LABEL_TYPE_OF_PERSONAL_NAME,
                options: [
                    createOptionObject('', LABEL_EMPTY_OPTION),
                    createOptionObject('0', LABEL_FORENAME),
                    createOptionObject('1', LABEL_SURNAME),
                    createOptionObject('2', LABEL_FAMILY_NAME)]
            };
        case '650':
            return {
                label: LABEL_LEVEL_OF_SUBJECT,
                options: [
                    createOptionObject('', LABEL_EMPTY_OPTION),
                    createOptionObject('#', LABEL_NO_INFO_PROVIDED),
                    createOptionObject('0', LABEL_NO_LEVEL_SPECIFIED),
                    createOptionObject('1', LABEL_PRIMARY),
                    createOptionObject('2', LABEL_SECONDARY)
                ]
            };
        case '651':
            return {
                label: LABEL_UNDEFINED,
                options: [
                    createOptionObject('', LABEL_EMPTY_OPTION),
                    createOptionObject('#', LABEL_UNDEFINED)
                ]
            };
        case '655':
            return {
                label: LABEL_TYPE_OF_HEADING,
                options: [
                    createOptionObject('', LABEL_EMPTY_OPTION),
                    createOptionObject('#', LABEL_BASIC),
                    createOptionObject('0', LABEL_FACETED)
                ]
            };
    }
}

export function getSubjectHeadingsForDropdown(headings) {
    const newHeadings = [...headings];
    newHeadings.unshift({
        value: '',
        label: LABEL_EMPTY_OPTION
    });
    return newHeadings;
}