import { FormGroup } from './FormGroup';
import { LABEL_ADD_NEW } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

export const SearchSelector = ({ options, label, name, labelKey, onChange, required, value,
  multiple, disabled, invalid, message }) => {
  const eventOnChange = (currentValue) => {
    if (onChange) {
      onChange(name, currentValue ? currentValue.map(cur => cur[labelKey || 'label'] || cur) : []);
    }
  };
  const typeaheadProps = {
    multiple, options,
    disabled, name,
    labelKey,
    selected: value,
    onChange: eventOnChange,
    placeholder: `${label}`,
    newSelectionPrefix: `${LABEL_ADD_NEW} ${label.toLowerCase()}: `
  };
  return (<FormGroup name={name} label={label} required={required}>
    <span>
      <Typeahead allowNew {...typeaheadProps} />
      {invalid && <div className="col-sm-12 text-warning"><p>{message}</p></div>}
    </span>
  </FormGroup>);
};

SearchSelector.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelKey: PropTypes.string,
  options: PropTypes.array.isRequired,
  valueKey: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.array,
  multiple: PropTypes.bool,
  invalid: PropTypes.bool,
  message: PropTypes.string
};
