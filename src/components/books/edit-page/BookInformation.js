import { DatePicker, FormGroup, TextInput } from '../../common/';
import {
    LABEL_AUTHOR,
    LABEL_EDITION,
    LABEL_ISBN,
    LABEL_NUMBER_OF_PAGES,
    LABEL_PUBLISHED_DATE,
    LABEL_PUBLISHER,
    LABEL_SERIES_TITLE,
    LABEL_STATEMENT_OF_RESP,
    LABEL_SUB_TITLE,
    LABEL_TITLE
} from '../../../labels/';

import Book from '../../../api/books/Book';
import React from 'react';

export const BookInformation = () => {
    return (<span>
        <TextInput label={LABEL_TITLE} name={Book.TITLE} required={true} />
        <TextInput label={LABEL_STATEMENT_OF_RESP} name={Book.STATEMENT_OF_RESPONSIBILITY} required={true} />
        <TextInput label={LABEL_SERIES_TITLE} name={Book.SERIES_TITLE} />
        <TextInput label={LABEL_ISBN} name={Book.ISBN} required={true} />
        <TextInput label={LABEL_PUBLISHER} name={Book.PUBLISHER} required={true} />
        <TextInput label={LABEL_NUMBER_OF_PAGES} name={Book.NUMBER_OF_PAGES} required={true} />
        <TextInput label={LABEL_SUB_TITLE} name={Book.SUB_TITLE} required={true} />
        <TextInput label={LABEL_EDITION} name={Book.EDITION} />
        <TextInput label={LABEL_AUTHOR} name={Book.AUTHOR} required={true} />
        <FormGroup label={LABEL_PUBLISHED_DATE} name={Book.PUBLISHED_DATE} required={true}>
            <DatePicker />
        </FormGroup>
    </span>);
};