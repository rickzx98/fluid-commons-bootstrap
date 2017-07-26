import { DatePicker, FormGroup, Selector, TextInput } from '../../common/';
import { LABEL_BARCODE, LABEL_CALL_NUMBER, LABEL_COST, LABEL_CURRENCY, LABEL_DATE, LABEL_FUND, LABEL_LOCATION, LABEL_VENDOR } from '../../../labels/';
import { currenciesForDropdown, fundsForDropdown } from '../../../selectors/settingsSelectors';

import Book from '../../../api/books/Book';
import PropTypes from 'prop-types';
import React from 'react';

export const BookCopies = ({ settings }) => {
    return (<span>
        <TextInput label={LABEL_BARCODE} name={Book.BARCODE} />
        <TextInput label={LABEL_LOCATION} name={Book.LOCATION} />
        <TextInput label={LABEL_COST} name={Book.COST} />
        <TextInput label={LABEL_VENDOR} name={Book.VENDOR} />
        <FormGroup label={LABEL_DATE} name={Book.DATE} >
            <DatePicker />
        </FormGroup>
        <TextInput label={LABEL_CALL_NUMBER} name={Book.CALL_NUMBER} />
        <Selector label={LABEL_CURRENCY} name={Book.CURRENCY} options={currenciesForDropdown(settings)} />
        <Selector label={LABEL_FUND} name={Book.FUND} options={fundsForDropdown(settings)} />
    </span>);
};


BookCopies.propTypes = {
    settings: PropTypes.object.isRequired
};