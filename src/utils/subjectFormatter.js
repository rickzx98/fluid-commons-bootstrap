import { Subject, SubjectFields } from '../api/subjects/';

export function subjectFormatter(subject) {
  return getIndicatorValue(Subject.LEVEL_OF_SUBJECT, subject) +
    getIndicatorValue(Subject.THESAURUS, subject) +
    getValue(Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY, subject) +
    getValue(Subject.TOPICAL_TERM_FOLLOWING, subject) +
    getValue(Subject.LOCATION_OF_EVENT, subject) +
    getValue(Subject.ACTIVE_DATES, subject) +
    getValue(Subject.RELATOR_TERM, subject) +
    getValue(Subject.MISC_INFO, subject) +
    getValue(Subject.RELATIONSHIP, subject) +
    getValue(Subject.FORM_SUBDIVISION, subject) +
    getValue(Subject.GENERAL_SUBDIVISION, subject) +
    getValue(Subject.CHRONOLOGICAL_SUBDIVISION, subject) +
    getValue(Subject.GEOGRAPHIC_SUBDIVISION, subject);
}

export function convertSubjectToMarc(subject, resourceType, subjectCode) {
  let subjectMarc = `${subjectCode}|${subject[Subject.FIRST_INDICATOR]}${subject[Subject.SECOND_INDICATOR]}`;
  SubjectFields[resourceType][subjectCode].forEach(subField => {
    const value = subject[subField.value];
    if (value) {
      if (value instanceof Array) {
        value.forEach(v => {
          subjectMarc += `${subField.value}${v}`;
        });
      } else {
        subjectMarc += `${subField.value}${value}`;
      }
    }
  });
  return subjectMarc;
}
function getIndicatorValue(field, subject) {
  return subject[field] || '';
}
function getValue(field, subject) {
  return subject[field] ? iterateValue(subject[field], field) : '';
}

function iterateValue(arraySubject, field) {
  let value = '';
  if (arraySubject) {
    arraySubject.forEach(subject => {
      value += (field + subject);
    });
  }
  return value;
}
