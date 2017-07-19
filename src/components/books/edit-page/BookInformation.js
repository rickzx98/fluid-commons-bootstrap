import { DatePicker, FormGroup, TextInput } from '../../common/';

import Book from '../../../api/books/Book';
import React from 'react';

export const BookInformation = () => {
    return (<span>
        <TextInput label="Title" name={Book.TITLE} required={true} />
        <TextInput label="Statement of Responsibility" name={Book.STATEMENT_OF_RESPONSIBILITY} required={true} />
        <TextInput label="Series Title" name={Book.SERIES_TITLE} />
        <TextInput label="ISBN" name={Book.ISBN} required={true} />
        <TextInput label="Publisher" name={Book.PUBLISHER} required={true} />
        <TextInput label="Number of Pages" name={Book.NUMBER_OF_PAGES} required={true} />
        <TextInput label="Sub title" name={Book.SUB_TITLE} required={true} />
        <TextInput label="Edition" name={Book.EDITION} />
        <TextInput label="Author" name={Book.AUTHOR} required={true} />
        <FormGroup label="Published Date" name={Book.PUBLISHED_DATE} required={true}>
            <DatePicker />
        </FormGroup>
    </span>);
};