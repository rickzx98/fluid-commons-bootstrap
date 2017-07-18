import PropTypes from 'prop-types';
import React from 'react';

export const FormGroup = ({ label, required, name, children }) => {
    return (
        <div className="clearfix form-group">
            <label htmlFor={name}>{required ? <span className="text-warning">*</span> : ''} {label}</label>
            <div id={name} className="col-sm-12">{children}</div>
        </div>);
};

FormGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};
