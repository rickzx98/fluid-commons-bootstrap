import Subject from '../api/subjects/Subject';
import { convertToSubject } from './';

describe('Util', () => {

    describe('convertToSubject', () => {
        it('should convert marc code into subject object', () => {
            const marcSample = '#0$aRain and rainfall$zWashington (State)$zSeattle$vMaps.';
            const subject = convertToSubject(marcSample);
            expect(subject[Subject.LEVEL_OF_SUBJECT]).toEqual('#');
            expect(subject[Subject.THESAURUS]).toEqual('0');
        });
    });

});