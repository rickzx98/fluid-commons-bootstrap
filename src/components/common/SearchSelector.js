import { FormGroup } from './FormGroup';
import { LABEL_ADD_NEW } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

export const SearchSelector = ({ options, label, name, labelKey, onChange, required, value, multiple, disabled }) => {
    const eventOnChange = (currentValue) => {
        if (onChange) {
            onChange(name, currentValue.map(cur => name ? cur[labelKey] : cur));
        }
    };
    const typeaheadProps = {
        multiple,
        labelKey, options,
        disabled, name,
        selected: value,
        minLength: 2,
        onChange: eventOnChange,
        placeholder: `${label.toLowerCase()}...`,
        newSelectionPrefix: `${LABEL_ADD_NEW} ${label.toLowerCase()}: `
    };
    return (<FormGroup name={name} label={label} required={required}>
        <Typeahead allowNew {...typeaheadProps} />
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
    value: PropTypes.array,
    multiple: PropTypes.bool
};