import { Subject, SubjectFields } from '../api/subjects/';

export function convertToSubject(marcCode) {
  const subject = {};
  subject[Subject.LEVEL_OF_SUBJECT] = marcCode.charAt(0);
  subject[Subject.THESAURUS] = marcCode.charAt(1);
  marcCode = marcCode.substr(2);
  let field = '';
  let dollar = '';
  let prevCode;
  for (let i = 0; i < marcCode.length; i++) {
    const code = marcCode.charAt(i);
    if (code === '$') {
      dollar = '$';
    } else if (isMarcField(dollar + code)) {
      if (prevCode && field.length > 0) {
        if (subject[prevCode]) {
          let subar = [...subject[prevCode], field];
          subject[prevCode] = subar;
        } else {
          subject[prevCode] = [field];
        }
      }
      prevCode = dollar + code;
      dollar = '';
      field = '';
    } else if (!isMarcField(dollar + code)) {
      field += code;
    }
    if (i === marcCode.length - 1) {
      subject[prevCode] = [field];
    }
  }
  return subject;
}
export function marcToSubject(marcCode, resourceType) {
  const splittedByPipe = marcCode.split('|');
  const subjectCode = splittedByPipe[0];
  let marc = splittedByPipe[1];
  const subject = {};
  subject[Subject.FIRST_INDICATOR] = marc.charAt(0);
  subject[Subject.SECOND_INDICATOR] = marc.charAt(1);

  marc = marc.substr(2);
  let field = '';
  let dollar = '';
  let prevCode;
  for (let i = 0; i < marc.length; i++) {
    const code = marc.charAt(i);
    if (code === '$') {
      dollar = '$';
    } else if (isMarc(dollar + code, subjectCode, resourceType)) {
      if (prevCode && field.length > 0) {
        if (subject[prevCode]) {
          let subar = [...subject[prevCode], field];
          subject[prevCode] = subar;
        } else {
          subject[prevCode] = [field];
        }
      }
      prevCode = dollar + code;
      dollar = '';
      field = '';
    } else if (!isMarc(dollar + code, subjectCode, resourceType)) {
      field += code;
    }
    if (i === marc.length - 1) {
      subject[prevCode] = [field];
    }
  }
  return Object.assign({}, { data: subject, resourceType, subjectCode });
}
function isMarc(value, subjectCode, resourceType) {
  return SubjectFields[resourceType][subjectCode].map(field => field.value).indexOf(value) > -1;
}
function isMarcField(chr) {
  switch (chr) {
    case Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY:
    case Subject.TOPICAL_TERM_FOLLOWING:
    case Subject.LOCATION_OF_EVENT:
    case Subject.ACTIVE_DATES:
    case Subject.RELATOR_TERM:
    case Subject.MISC_INFO:
    case Subject.RELATIONSHIP:
    case Subject.FORM_SUBDIVISION:
    case Subject.GENERAL_SUBDIVISION:
    case Subject.CHRONOLOGICAL_SUBDIVISION:
    case Subject.GEOGRAPHIC_SUBDIVISION:
      return true;
    default:
      return false;
  }
}
