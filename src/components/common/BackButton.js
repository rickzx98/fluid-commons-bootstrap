import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

export const BackButton = ({ label }) => {
    return (<button onClick={() => { browserHistory.goBack(); }} type="button" className="btn btn-danger"><FontAwesome fixedWidth={true} name="long-arrow-left" /><span className="hidden-xs">{label}</span></button>);
};

BackButton.propTypes = {
    label: PropTypes.string.isRequired
};