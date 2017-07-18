import { delay, generateUID } from '../../utils/';

import Subject from './Subject';

const SAMPLE_SUBJECTS = [
    { id: '1', name: 'Television' },
    { id: '2', name: 'Pilot' },
    { id: '3', name: '1998' },
    { id: '4', name: 'United States' },
    { id: '5', name: 'America' },
    { id: '6', name: 'Philippines' },
    { id: '7', name: 'Datu Puti' },
    { id: '8', name: 'Catalogs' },
    { id: '9', name: 'Hotdogs' }
];

export default class Api {
    static createSubject(subject) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!subject) {
                    reject('Subject value is required.');
                } else {
                    let exists = false;
                    SAMPLE_SUBJECTS.forEach(sub => {
                        if (sub.toLowerCase() === subject.toLowerCase()) {
                            exists = true;
                            reject('Subject already exists.');
                        }
                    });
                    if (!exists) {
                        resolve(Object.assign({}, { id: generateUID(), subject }));
                    }
                }
            }, delay);
        });
    }

    static getAllSubjects() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(SAMPLE_SUBJECTS);
            }, delay);
        });
    }

    static searchSubjects(queryText) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const foundSubjects = [];
                SAMPLE_SUBJECTS.forEach(subject => {
                    if (contains(subject.name, queryText)) {
                        foundSubjects.push(Object.assign({}, subject));
                    }
                });
                resolve(foundSubject);
            }, 200);
        });
    }
}