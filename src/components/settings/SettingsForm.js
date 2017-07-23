import { FundSetting } from './FundSetting';
import PropTypes from 'prop-types';
import React from 'react';

export class SettingsForm extends React.Component {
    render() {
        return
        (<form id="settingsForm" className="form container-fluid">

        </form>);
    }
}
SettingsForm.propTypes = {
    settings: PropTypes.object.isRequired,
    addFund: PropTypes.func.isRequired,
    removeFund: PropTypes.func.isRequired,
    updateFund: PropTypes.func.isRequired
};

