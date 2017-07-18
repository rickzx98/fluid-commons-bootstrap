import { FormGroup } from './FormGroup'
import PropTypes from 'prop-types';
import React from 'react';

export const Selector = ({ label, required, name, onChange, listItems }) => {
    return (<FormGroup label={label} required={required}>
        <select className="form-control"></select>
    </FormGroup>)
}

Selector.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}