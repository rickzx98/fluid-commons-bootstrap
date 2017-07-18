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
        value: '#',
        label: 'No information provided'
    }, {
        value: 0,
        label: 'No level specified'
    }, {
        value: 1,
        label: 'Primary'
    }, {
        value: 2,
        label: 'Secondary'
    }];
}

export function getAllSecondIndicatorTopicalTermsForDropDown() {
    return [{
        value: 0,
        label: 'Library of Congress Subject Headings'
    }, {
        value: 1,
        label: 'LC subject headings for children\'s literature'
    }, {
        value: 2,
        label: 'Medical Subject Headings'
    }, {
        value: 3,
        label: 'National Agricultural Library subject authority file'
    }, {
        value: 4,
        label: 'Source not specified'
    }, {
        value: 5,
        label: 'Canadian Subject Headings'
    }, {
        value: 6,
        label: 'Répertoire de vedettes-matière'
    }, {
        value: 7,
        label: 'Source specified in subfield $2'
    }];
}

export function getAllSubjectsForDropDown(subjects) {
    return subjects.map(subject => Object.assign({}, { label: subject.name, value: subject.name }));
}