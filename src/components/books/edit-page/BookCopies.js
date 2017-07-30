import { DatePicker, FormGroup, Selector, TextInput } from '../../common/';
import { LABEL_BARCODE, LABEL_CALL_NUMBER, LABEL_COST, LABEL_CURRENCY, LABEL_DATE, LABEL_FUND, LABEL_LOCATION, LABEL_VENDOR } from '../../../labels/';
import { currenciesForDropdown, fundsForDropdown } from '../../../selectors/settingsSelectors';

import {Book} from '../../../api/books/Book';
import PropTypes from 'prop-types';
import React from 'react';

export const BookCopies = ({ settings, onChange, managedBook }) => {
    return (<span>
        <TextInput label={LABEL_BARCODE} name={Book.BARCODE}
            value={managedBook[Book.BARCODE]} />
        <TextInput label={LABEL_LOCATION} name={Book.LOCATION}
            value={managedBook[Book.LOCATION]} />
        <TextInput label={LABEL_COST} name={Book.COST}
                   value={managedBook[Book.COST]} />
        <TextInput label={LABEL_VENDOR} name={Book.VENDOR}
            value={managedBook[Book.VENDOR]} />
        <FormGroup label={LABEL_DATE} name={Book.DATE} >
            <DatePicker value={managedBook[Book.DATE]} name={Book.DATE} onChange={(value) => {
                onChange({
                    name: Book.DATE,
                    value
                });
            }} />
        </FormGroup>
        <TextInput label={LABEL_CALL_NUMBER} name={Book.CALL_NUMBER}
            value={managedBook[Book.CALL_NUMBER]} />
        <Selector label={LABEL_CURRENCY} name={Book.CURRENCY} options={currenciesForDropdown(settings)}
            value={managedBook[Book.CURRENCY]} />
        <Selector label={LABEL_FUND} name={Book.FUND} options={fundsForDropdown(settings)}
            value={managedBook[Book.FUND]} />
    </span>);
};


BookCopies.propTypes = {
    settings: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    managedBook: PropTypes.object.isRequired
};
