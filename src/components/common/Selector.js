import { FormGroup } from './FormGroup'
import PropTypes from 'prop-types';
import React from 'react';

export const Selector = ({ label, required, name, onChange, options, value }) => {
    const eventOnChange = (event) => {
        if (onChange) {
            onChange(name, event.target.value);
        }
    };
    return (<FormGroup name={name} label={label} required={required}>
        <select onChange={eventOnChange} className="form-control" name={name} value={value}>
            {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
    </FormGroup>);
}

Selector.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}