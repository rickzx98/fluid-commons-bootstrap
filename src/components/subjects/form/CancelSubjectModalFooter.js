import { LABEL_NO_WAIT, LABEL_YES_PLEASE } from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export const CancelSubjectModalFooter = ({ confirmCancel, closeDialog }) => {
    return (<div className="btn-group btn-group-sm">
        <button onClick={confirmCancel} className="btn btn-primary">{LABEL_YES_PLEASE}</button>
        <button onClick={closeDialog} className="btn btn-danger">{LABEL_NO_WAIT}</button>
    </div>);
};

CancelSubjectModalFooter.propTypes = {
    confirmCancel: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired
};