import { DatePicker, FormGroup, TextInput } from '../../common/';

import PropTypes from 'prop-types';
import React from 'react';

export const BookInformation = () => {
    return (<span>
        <TextInput label="Title" name="title" required={true} />
        <TextInput label="Statement of Responsibility" name="statement" required={true} />
        <TextInput label="Series Title" name="seriesTitle" />
        <TextInput label="ISBN" name="isbn" required={true} />
        <TextInput label="Publisher" name="publisher" required={true} />
        <TextInput label="Number of Pages" name="numberOfPages" required={true} />
        <TextInput label="Sub title" name="subTitle" required={true} />
        <TextInput label="Edition" name="edition" />
        <TextInput label="Author" name="author" required={true} />
        <FormGroup label="Published Data" name="publishedData" required={true}>
            <DatePicker />
        </FormGroup>
    </span>)
}