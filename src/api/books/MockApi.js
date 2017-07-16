import '../../images/lotr_fotr.jpg';
import '../../images/lotr_trotk.jpg';
import '../../images/lotr_tt.jpg';

import Book from './Book';
import delay from '../../utils/delay';
import generateUID from '../../utils/generateUID';

const BOOK_DATA = [createMockBook(generateUID(), 'Lord of the rings', 'Fellowshing of the ring', 'J. R. R. Tolkien', 'lotr_fotr.jpg'),
createMockBook(generateUID(), 'Lord of the rings', 'The Two Towers', 'J. R. R. Tolkien', 'lotr_tt.jpg'),
createMockBook(generateUID(), 'Lord of the rings', 'The Return of The King', 'J. R. R. Tolkien', 'lotr_trotk.jpg')];

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
            }, delay);
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
    return book;
}
