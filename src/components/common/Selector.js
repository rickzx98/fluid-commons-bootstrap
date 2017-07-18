import { FormGroup } from './FormGroup'
import PropTypes from 'prop-types';
import React from 'react';

export const Selector = ({ label, required, name, onChange, listItems }) => {
    return (<FormGroup name={name} label={label} required={required}>
        <select className="form-control">
            {listItems.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
    </FormGroup>);
}

Selector.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired
}