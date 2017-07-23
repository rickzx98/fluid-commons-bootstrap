import { DatePicker, FormGroup, Selector, TextInput } from '../../common/';
import { LABEL_BARCODE, LABEL_CALL_NUMBER, LABEL_COST, LABEL_CURRENCY, LABEL_DATE, LABEL_FUND, LABEL_LOCATION, LABEL_VENDOR } from '../../../labels/';

import Book from '../../../api/books/Book';
import React from 'react';

export const BookCopies = () => {
    return (<span>
        <TextInput label={LABEL_BARCODE} name={Book.BARCODE} />
        <TextInput label={LABEL_LOCATION} name={Book.LOCATION} />
        <TextInput label={LABEL_COST} name={Book.COST} />
        <TextInput label={LABEL_VENDOR} name={Book.VENDOR} />
        <FormGroup label={LABEL_DATE} name={Book.DATE} >
            <DatePicker />
        </FormGroup>
        <TextInput label={LABEL_CALL_NUMBER} name={Book.CALL_NUMBER} />
        <Selector label={LABEL_CURRENCY} name={Book.CURRENCY} options={[]} />
        <Selector label={LABEL_FUND} name={Book.FUND} options={[]} />
    </span>);
};