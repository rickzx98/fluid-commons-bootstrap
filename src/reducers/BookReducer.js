import { ADD_MANAGED_BOOK, LOAD_BOOKS_SUCCESS } from '../actions/';

import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function booksReducer(state = initialState.books, action) {
    switch (action.type) {
        case ADD_MANAGED_BOOK: {
            state = [...state, action.book];
            return state;
        }
        case LOAD_BOOKS_SUCCESS:
            return action.books;
        default:
            return state;
    }
}
