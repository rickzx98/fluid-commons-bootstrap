import { convertToSubject, subjectFormatter } from './';

import Subject from '../api/subjects/Subject';

describe('Util', () => {

    describe('convertToSubject', () => {
        it('should convert marc code into subject object', () => {
            const marcSample = '#0$aRain and rainfall$zWashington (State)$zSeattle$vMaps.';
            const subject = convertToSubject(marcSample);
            expect(subject[Subject.LEVEL_OF_SUBJECT]).toEqual('#');
            expect(subject[Subject.THESAURUS]).toEqual('0');
            expect(subject[Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY] instanceof Array).toEqual(true);
            expect(subject[Subject.GEOGRAPHIC_SUBDIVISION] instanceof Array).toEqual(true);
            expect(subject[Subject.FORM_SUBDIVISION] instanceof Array).toEqual(true);
        });
    });

    describe('subjectFormatter', () => {
        it('should get the marc code from subject object', () => {
            const state = {};
            state[Subject.LEVEL_OF_SUBJECT] = '#';
            state[Subject.THESAURUS] = '1';
            state[Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY] = ['hello', 'hi'];
            state[Subject.TOPICAL_TERM_FOLLOWING] = ['sigh'];

            const marc = subjectFormatter(state);
            console.log('marc', marc);
            expect(marc).toEqual('#1$ahello$ahi$bsigh');
        });
    });

});