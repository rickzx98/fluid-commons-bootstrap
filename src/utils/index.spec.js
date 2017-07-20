import Subject from '../api/subjects/Subject';
import { convertToSubject } from './';

describe('Util', () => {

    describe('convertToSubject', () => {
        it('should convert marc code into subject object', () => {
            const marcSample = '#0$aRain and rainfall$zWashington (State)$zSeattle$vMaps.';
            const subject = convertToSubject(marcSample);
            expect(subject[Subject.LEVEL_OF_SUBJECT]).toEqual('#');
            expect(subject[Subject.THESAURUS]).toEqual('0');
            expect(subject[Subject.TOPICAL_TERM_OR_GEOGRAPHIC_NAME_ENTRY]).toEqual('Rain and rainfall');
            expect(subject[Subject.GEOGRAPHIC_SUBDIVISION] instanceof Array).toEqual(true);
            expect(subject[Subject.FORM_SUBDIVISION]).toEqual('Maps.');
        });
    });

});