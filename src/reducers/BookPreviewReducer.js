import { CLOSE_DIALOG, SET_BOOK_PREVIEW_FROM_GOOGLE } from '../actions/';

import { Book } from '../api/books/';
import initialState from './initialState';

export default function bookPreviewReducer(state = initialState.bookPreview, action) {
    switch (action.type) {
        case SET_BOOK_PREVIEW_FROM_GOOGLE: {
            const preview = Object.assign({}, { ...state });
            const book = action.volumeInfo;
            preview[Book.IMAGE_URL] = book.imageLinks ? book.imageLinks.thumbnail : '';
            preview[Book.TITLE] = book.title;
            if (book.industryIdentifiers) {
                book.industryIdentifiers.forEach(identifier => {
                    switch (identifier.type) {
                        case 'ISBN_13':
                            preview[Book.ISBN13] = identifier.identifier;
                            break;
                        case 'ISBN_10':
                            preview[Book.ISBN10] = identifier.identifier;
                            break;
                    }
                });
            }
            preview[Book.SUMMARY] = book.description;
            preview[Book.SUB_TITLE] = book.subtitle;
            preview[Book.NUMBER_OF_PAGES] = book.printedPageCount;
            preview[Book.TITLE_POINTS] = book.averageRating ? book.averageRating - 1 : 0;
            return preview;
        }
        case CLOSE_DIALOG: {
            return initialState.bookPreview;
        }
        default:
            return state;
    }
}
