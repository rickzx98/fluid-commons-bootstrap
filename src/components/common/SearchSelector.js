import { FormGroup } from './FormGroup';
import PropTypes from 'prop-types';
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

export const SearchSelector = ({ options, label, name, labelKey, onChange, required, valueKey, value }) => {
    const eventOnChange = (currentValue) => {
        if (onChange) {
            if (value instanceof Array) {
                const newValue = valueKey ? currentValue[0][valueKey] : currentValue[0];
                if (newValue.toLowerCase() !== value) {
                    onChange(name, newValue);
                }
            } else {
                if (currentValue.toLowerCase !== value) {
                    onChange(name, currentValue);
                }
            }
        }
    };
    return (<FormGroup name={name} label={label} required={required}>
        <Typeahead value={value} onInputChange={eventOnChange} placeholder={label} name={name} onChange={eventOnChange} labelKey={labelKey} options={options} />
    </FormGroup>);
};

SearchSelector.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    valueKey: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
};