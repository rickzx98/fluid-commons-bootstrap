import {
  LABEL_ACTIVE_DATES,
  LABEL_AFFILIATION,
  LABEL_ARRANGED_STATEMENT_FOR_MUSIC,
  LABEL_ATTRIBUTION_QUALIFIER,
  LABEL_AUTHORITY_RECORD_CONTROL_OR_STANDARD_NUMBER,
  LABEL_CHRONOLOGICAL_SUBDIVISION,
  LABEL_DATES_ASC_NAME,
  LABEL_DATE_OF_WORK,
  LABEL_FACET_HIERARCHY_DESIGNATION,
  LABEL_FIELD_LINK_AND_SEQ_NUMBER,
  LABEL_FORM_SUBDIVISION,
  LABEL_FORM_SUBHEADING,
  LABEL_FULLER_FORM_OF_NAME,
  LABEL_GENERAL_SUBDIVISION,
  LABEL_GENRE_FORM_DATA_FOCUS_TERM,
  LABEL_GEOGRAPHIC_NAME,
  LABEL_GEOGRAPHIC_SUBDIVISION,
  LABEL_KEY_FOR_MUSIC,
  LABEL_LANGUAGE_OF_A_WORK,
  LABEL_LINKAGE,
  LABEL_MATERIAL_SPEFICIED,
  LABEL_MEDIUM,
  LABEL_MEDIUM_OF_PERFORMANCE_FOR_MUSIC,
  LABEL_MISC_INFO,
  LABEL_NAME_OF_PART_SECTION_OF_WORK,
  LABEL_NON_FOCUS_TERM,
  LABEL_NUMBER_OF_PART,
  LABEL_NUMERATION,
  LABEL_PERSONAL_NAME,
  LABEL_RELATIONSHIP,
  LABEL_RELATOR_TERM,
  LABEL_SOURCE_OF_HEADING_OR_TERM,
  LABEL_SUBJECT_GENRE_INDEX_TERM,
  LABEL_SUBJECT_GEOGRAPHIC_NAME,
  LABEL_SUBJECT_PERSONAL_NAME,
  LABEL_SUBJECT_TOPICAL_TERM,
  LABEL_TITLES_AND_OTHER_WORDS,
  LABEL_TITLE_OF_A_WORK,
  LABEL_TOPICAL_TERM_FOLLOWING_GEOGRAPHIC_NAME_ENTRY,
  LABEL_TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY,
  LABEL_VERSION
} from '../../labels/';

import { ItemType } from '../item/';

export const Subject = {
  SUBJECT_ID: 'id',
  LEVEL_OF_SUBJECT: 'level',
  THESAURUS: 'thesaurus',
  TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY: '$a',
  TOPICAL_TERM_FOLLOWING: '$b',
  LOCATION_OF_EVENT: '$c',
  ACTIVE_DATES: '$d',
  RELATOR_TERM: '$e',
  MISC_INFO: '$g',
  RELATIONSHIP: '$4',
  FORM_SUBDIVISION: '$v',
  GENERAL_SUBDIVISION: '$x',
  CHRONOLOGICAL_SUBDIVISION: '$y',
  GEOGRAPHIC_SUBDIVISION: '$z',
  SUBJECT_FORMAT: 'subjectFormat',
  BARCODE: 'barcode',
  LOCATION: 'location',
  COST: 'cost',
  VENDOR: 'vendor',
  DATE: 'date',
  CALL_NUMBER: 'callNumber',
  CURRENCY: 'currency',
  FUND: 'fund',
  TYPE_OF_HEADINGS: 'subjectCode',
  FIRST_INDICATOR: 'firstIndicator',
  SECOND_INDICATOR: 'secondIndicator'
};

export const SubjectHeading = {
  PERSONAL_NAME: '600',
  TOPICAL_TERM: '650',
  GEOGRAPHIC_NAME: '651',
  GENRE_FORM_INDEX_TERM: '655'
};

export const SubjectHeadingsByType = {};

SubjectHeadingsByType[ItemType.BOOK] = [
  createOption(SubjectHeading.PERSONAL_NAME, LABEL_SUBJECT_PERSONAL_NAME),
  createOption(SubjectHeading.TOPICAL_TERM, LABEL_SUBJECT_TOPICAL_TERM),
  createOption(SubjectHeading.GEOGRAPHIC_NAME, LABEL_SUBJECT_GEOGRAPHIC_NAME),
  createOption(SubjectHeading.GENRE_FORM_INDEX_TERM, LABEL_SUBJECT_GENRE_INDEX_TERM)
];

export const SubjectFields = {};
SubjectFields[ItemType.BOOK] = {};
SubjectFields[ItemType.BOOK][SubjectHeading.GENRE_FORM_INDEX_TERM] = [
  createSubjectObject('$a', LABEL_GENRE_FORM_DATA_FOCUS_TERM, false),
  createSubjectObject('$b', LABEL_NON_FOCUS_TERM, true),
  createSubjectObject('$c', LABEL_FACET_HIERARCHY_DESIGNATION, true),
  createSubjectObject('$v', LABEL_FORM_SUBDIVISION, true),
  createSubjectObject('$x', LABEL_GENERAL_SUBDIVISION, true),
  createSubjectObject('$y', LABEL_CHRONOLOGICAL_SUBDIVISION, true),
  createSubjectObject('$z', LABEL_GEOGRAPHIC_SUBDIVISION, true),
  createSubjectObject('$0', LABEL_AUTHORITY_RECORD_CONTROL_OR_STANDARD_NUMBER, true),
  createSubjectObject('$2', LABEL_SOURCE_OF_HEADING_OR_TERM, false),
  createSubjectObject('$3', LABEL_MATERIAL_SPEFICIED, false),
  createSubjectObject('$4', LABEL_RELATIONSHIP, true),
  createSubjectObject('$6', LABEL_LINKAGE, false),
  createSubjectObject('$8', LABEL_FIELD_LINK_AND_SEQ_NUMBER, true)
];
SubjectFields[ItemType.BOOK][SubjectHeading.GEOGRAPHIC_NAME] = [
  createSubjectObject('$a', LABEL_GEOGRAPHIC_NAME, false),
  createSubjectObject('$e', LABEL_RELATOR_TERM, true),
  createSubjectObject('$g', LABEL_MISC_INFO, true),
  createSubjectObject('$v', LABEL_FORM_SUBDIVISION, true),
  createSubjectObject('$x', LABEL_GENERAL_SUBDIVISION, true),
  createSubjectObject('$y', LABEL_CHRONOLOGICAL_SUBDIVISION, true),
  createSubjectObject('$z', LABEL_GEOGRAPHIC_SUBDIVISION, true),
  createSubjectObject('$0', LABEL_AUTHORITY_RECORD_CONTROL_OR_STANDARD_NUMBER, true),
  createSubjectObject('$2', LABEL_SOURCE_OF_HEADING_OR_TERM, false),
  createSubjectObject('$3', LABEL_MATERIAL_SPEFICIED, false),
  createSubjectObject('$4', LABEL_RELATIONSHIP, true),
  createSubjectObject('$6', LABEL_LINKAGE, false),
  createSubjectObject('$8', LABEL_FIELD_LINK_AND_SEQ_NUMBER, true)
];
SubjectFields[ItemType.BOOK][SubjectHeading.TOPICAL_TERM] = [
  createSubjectObject('$a', LABEL_TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY, false),
  createSubjectObject('$b', LABEL_TOPICAL_TERM_FOLLOWING_GEOGRAPHIC_NAME_ENTRY, false),
  createSubjectObject('$c', LABEL_ACTIVE_DATES, false),
  createSubjectObject('$e', LABEL_RELATOR_TERM, true),
  createSubjectObject('$g', LABEL_MISC_INFO, true),
  createSubjectObject('$v', LABEL_FORM_SUBDIVISION, true),
  createSubjectObject('$x', LABEL_GENERAL_SUBDIVISION, true),
  createSubjectObject('$y', LABEL_CHRONOLOGICAL_SUBDIVISION, true),
  createSubjectObject('$z', LABEL_GEOGRAPHIC_SUBDIVISION, true),
  createSubjectObject('$0', LABEL_AUTHORITY_RECORD_CONTROL_OR_STANDARD_NUMBER, true),
  createSubjectObject('$2', LABEL_SOURCE_OF_HEADING_OR_TERM, false),
  createSubjectObject('$3', LABEL_MATERIAL_SPEFICIED, false),
  createSubjectObject('$4', LABEL_RELATIONSHIP, true),
  createSubjectObject('$6', LABEL_LINKAGE, false),
  createSubjectObject('$8', LABEL_FIELD_LINK_AND_SEQ_NUMBER, true)
];
SubjectFields[ItemType.BOOK][SubjectHeading.PERSONAL_NAME] = [
  createSubjectObject('$a', LABEL_PERSONAL_NAME, false),
  createSubjectObject('$b', LABEL_NUMERATION, false),
  createSubjectObject('$c', LABEL_TITLES_AND_OTHER_WORDS, true),
  createSubjectObject('$d', LABEL_DATES_ASC_NAME, false),
  createSubjectObject('$e', LABEL_RELATOR_TERM, true),
  createSubjectObject('$f', LABEL_DATE_OF_WORK, false),
  createSubjectObject('$h', LABEL_MEDIUM, false),
  createSubjectObject('$j', LABEL_ATTRIBUTION_QUALIFIER, true),
  createSubjectObject('$k', LABEL_FORM_SUBHEADING, true),
  createSubjectObject('$l', LABEL_LANGUAGE_OF_A_WORK, false),
  createSubjectObject('$m', LABEL_MEDIUM_OF_PERFORMANCE_FOR_MUSIC, true),
  createSubjectObject('$n', LABEL_NUMBER_OF_PART, true),
  createSubjectObject('$o', LABEL_ARRANGED_STATEMENT_FOR_MUSIC, false),
  createSubjectObject('$p', LABEL_NAME_OF_PART_SECTION_OF_WORK, true),
  createSubjectObject('$q', LABEL_FULLER_FORM_OF_NAME, false),
  createSubjectObject('$r', LABEL_KEY_FOR_MUSIC, false),
  createSubjectObject('$s', LABEL_VERSION, false),
  createSubjectObject('$t', LABEL_TITLE_OF_A_WORK, false),
  createSubjectObject('$u', LABEL_AFFILIATION, false),
  createSubjectObject('$v', LABEL_FORM_SUBDIVISION, true),
  createSubjectObject('$x', LABEL_GENERAL_SUBDIVISION, true),
  createSubjectObject('$y', LABEL_CHRONOLOGICAL_SUBDIVISION, true),
  createSubjectObject('$z', LABEL_GEOGRAPHIC_SUBDIVISION, true),
  createSubjectObject('$0', LABEL_AUTHORITY_RECORD_CONTROL_OR_STANDARD_NUMBER, true),
  createSubjectObject('$2', LABEL_SOURCE_OF_HEADING_OR_TERM, false),
  createSubjectObject('$3', LABEL_MATERIAL_SPEFICIED, false),
  createSubjectObject('$4', LABEL_RELATIONSHIP, true),
  createSubjectObject('$6', LABEL_LINKAGE, false),
  createSubjectObject('$8', LABEL_FIELD_LINK_AND_SEQ_NUMBER, true)
];

function createSubjectObject(value, label, repeatable) {
  return Object.assign({}, { value, label, repeatable });
}

function createOption(value, label) {
  return Object.assign({}, { value, label });
}