import '../../images/lotr_fotr.jpg';
import '../../images/lotr_trotk.jpg';
import '../../images/lotr_tt.jpg';
import '../../images/hp_athps.jpg';
import '../../images/hp_cos.jpg';
import '../../images/hp_poa.jpg';
import '../../images/hp_tgof.jpg';
import '../../images/hp_thbp.jpg';
import '../../images/hp_atdh.jpg';

import Book from './Book';
import delay from '../../utils/delay';
import generateUID from '../../utils/generateUID';

const BOOK_DATA = [
    createMockBook(generateUID(), 'Lord of the rings', 'Fellowshing of the ring', 'J. R. R. Tolkien', 'lotr_fotr.jpg'),
    createMockBook(generateUID(), 'Lord of the rings', 'The Two Towers', 'J. R. R. Tolkien', 'lotr_tt.jpg'),
    createMockBook(generateUID(), 'Lord of the rings', 'The Return of The King', 'J. R. R. Tolkien', 'lotr_trotk.jpg'),
    createMockBook(generateUID(), 'Harry Potter', 'and the sorcerer\'s stone', ' Rowling, J. K', 'hp_athps.jpg'),
    createMockBook(generateUID(), 'Harry Potter', 'and the chamber of secrets', ' Rowling, J. K', 'hp_cos.jpg'),
    createMockBook(generateUID(), 'Harry Potter', 'and the prisoner of Azkaban', ' Rowling, J. K', 'hp_poa.jpg'),
    createMockBook(generateUID(), 'Harry Potter', 'and the goblet of fire', ' Rowling, J. K', 'hp_tgof.jpg'),
    createMockBook(generateUID(), 'Harry Potter', 'and the half blood prince', ' Rowling, J. K', 'hp_thbp.jpg'),
    createMockBook(generateUID(), 'Harry Potter', 'and the deathly hallows', ' Rowling, J. K', 'hp_atdh.jpg')];
export default class Api {
    static createBook(book) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!book.title) {
                    reject(new Error('Book title is required.'));
                } else if (book.author) {
                    reject(new Error('Book author is required.'));
                } else {
                    const persistedBook = Object.assign({}, book);
                    persistedBook[Book.BOOK_ID] = generateUID();
                    resolve(persistedBook);
                }
            }, delay);
        });
    }
    static getAllBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(BOOK_DATA);
            }, delay);
        });
    }
    static searchBooks(queryText) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const foundBookData = [];
                BOOK_DATA.forEach(book => {
                    if (contains(book[Book.AUTHOR], queryText) ||
                        contains(book[Book.TITLE], queryText) ||
                        contains(book[Book.SUB_TITLE], queryText)) {
                        foundBookData.push(Object.assign({}, book));
                    }
                });
                resolve(foundBookData);
            }, 200);
        });
    }
}
function contains(value, text) {
    return value.toLowerCase().indexOf(text.toLowerCase()) > -1;
}

function createMockBook(id, title, subtitle, author, imageUrl) {
    const book = {};
    book[Book.BOOK_ID] = id;
    book[Book.AUTHOR] = author;
    book[Book.SUB_TITLE] = subtitle;
    book[Book.TITLE] = title;
    book[Book.IMAGE_URL] = imageUrl;
    book[Book.PUBLISHER] = 'The book publisher';
    book[Book.EDITION] = '2nd Edition';
    book[Book.ISBN] = '1234554657';
    book[Book.SUBJECTS] = [
        'Fanstasy',
        'Fiction',
        '2001',
        'Magic'
    ]
    return book;
}
