import PropTypes from 'prop-types';
import React from 'react';

export const TextInput = ({ type = 'text', disabled, required, label, onChange, message, validator, name, value }) => {
    let valid = true;
    let inputClass = 'clearfix form-group';
    return (<div className={valid ? inputClass : inputClass + ' has-error'}>
        <label className="control-label" htmlFor={name}> {required ? <span className="text-warning">*&nbsp;</span> : ''}{label}</label>
        <div className="col-sm-12">
            <input type={type}
                value={value}
                disabled={disabled}
                required={required}
                className="form-control"
                name={name}
                onChange={(event) => {
                    if (validator) {
                        validator(event.target.value, (result) => {
                            valid = result;
                            if (onChange) {
                                onChange(name, event.target.value);
                            }
                        });
                    } else if (onChange) {
                        onChange(name, event.target.value);
                    }
                }} placeholder={label} />
            {!valid ? <span className="glyphicon glyphicon-remove form-control-feedback"></span> : ''}
        </div>
        {!valid ? <div className="text-warning"><p>{message}</p></div> : ''}
    </div>);
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};