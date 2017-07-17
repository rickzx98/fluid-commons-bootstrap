import { LABEL_ADD_BOOK, LABEL_SEARCH_BOOKS } from '../../labels/'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';
import { blue700, lightBlueA700 } from 'material-ui/styles/colors'

import Book from '../../api/books/Book';
import { BookRow } from './BookRow';
import FlatButton from 'material-ui/FlatButton';
import { List } from 'material-ui/List';
import PropTypes from 'prop-types';
import React from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

export const BookTable = ({ books, searchBooks }) => {
    const booksElement = [];
    books.forEach(book => {
        booksElement.push(<BookRow key={book[Book.BOOK_ID]} book={book} />);
    });
    return (<Table>
        <TableHeader>
            <TableRow displayBorder={false} selectable={false}>
                <TableHeaderColumn colSpan="5">
                    <div>
                        <FlatButton style={{ color: 'white' }} hoverColor={lightBlueA700} label={LABEL_ADD_BOOK} backgroundColor={blue700} />
                        <TextField style={{ width: '20%', marginLeft: '5px' }} onChange={(event, text) => {
                            searchBooks(text);
                        }} hintText={LABEL_SEARCH_BOOKS} />
                    </div>
                </TableHeaderColumn>
            </TableRow>
            <TableRow selectable={false}>
                <TableHeaderColumn tooltip="preview">Preview</TableHeaderColumn>
                <TableHeaderColumn tooltip="Title">Title</TableHeaderColumn>
                <TableHeaderColumn tooltip="Editon">Editon</TableHeaderColumn>
                <TableHeaderColumn tooltip="Author">Author</TableHeaderColumn>
                <TableHeaderColumn tooltip="Publisher">Publisher</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {booksElement}
        </TableBody>
    </Table>);
};
BookTable.propTypes = {
    searchBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

/*
 <Subheader>
            <FlatButton style={{ color: 'white' }} hoverColor={lightBlueA700} label={LABEL_ADD_BOOK} backgroundColor={blue700} />
            <TextField style={{ width: '90%', marginLeft: '5px' }} onChange={(event, text) => {
                searchBooks(text);
            }} hintText={LABEL_SEARCH_BOOKS} />
        </Subheader>
        {booksElement}
*/