import Subject from '../api/subjects/Subject';

export function convertToSubject(marcCode) {
    const subject = {};
    subject[Subject.LEVEL_OF_SUBJECT] = marcCode.charAt(0);
    subject[Subject.THESAURUS] = marcCode.charAt(1);
    marcCode = marcCode.substr(2);
    let field = '';
    for (let i = 0; i < marcCode.length; i++) {
        
    }
    return subject;
}