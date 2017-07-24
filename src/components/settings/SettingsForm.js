import { FundSetting } from './FundSetting';
import PropTypes from 'prop-types';
import React from 'react';

export const SettingsForm = ({ settings, addFund, removeFund, updateFund }) => {
    const FundSettingProps = { settings, addFund, removeFund, updateFund };
    return (<form id="settingsForm" className="form container-fluid">
        <FundSetting {...FundSettingProps} />
    </form>);
}
SettingsForm.propTypes = {
    settings: PropTypes.object.isRequired,
    addFund: PropTypes.func.isRequired,
    removeFund: PropTypes.func.isRequired,
    updateFund: PropTypes.func.isRequired
};

