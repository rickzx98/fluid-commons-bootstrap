import { CollapseHeader, HiddenButton, ListForm } from '../common/';
import { LABEL_CURRENCY, LABEL_FUND, LABEL_RESOURCE_TYPE } from '../../labels/';

import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { ResourceTypeTableForm } from './ResourceTypeTableForm';

export const SettingsForm = ({ onSubmit, settings, addFund, removeFund, updateFund, addCurrency, removeCurrency, updateCurrency,
  addResourceType, removeResourceType, updateResourceType }) => {
  const FundSettingProps = {
    formName: 'settingsForm', addValue: addFund,
    removeValue: removeFund, updateValue: updateFund,
    name: 'funds', label: LABEL_FUND,
    values: settings.funds
  };
  const CurrencySettingProps = {
    formName: 'settingsForm', addValue: addCurrency,
    removeValue: removeCurrency,
    updateValue: updateCurrency,
    name: 'currencies', label: LABEL_CURRENCY,
    values: settings.currencies
  };
  const ResourceTypeSettingProps = {
    formName: 'settingsForm', addValue: addResourceType,
    removeValue: removeResourceType,
    updateValue: updateResourceType,
    name: 'resourceTypes', label: LABEL_RESOURCE_TYPE,
    values: settings.resourceTypes
  };
  return (<form onSubmit={onSubmit} id="settingsForm" className="form container-fluid">
    <HiddenButton/>
    <CollapseHeader panelStyle="panel panel-default" heading={
      <h5><FontAwesome name="money" size="lg" fixedWidth={true} />&nbsp;{LABEL_FUND}</h5>}
                    body={<ListForm {...FundSettingProps} />}/>
    <CollapseHeader panelStyle="panel panel-default" heading={
      <h5><FontAwesome name="dollar" size="lg" fixedWidth={true} />&nbsp;{LABEL_CURRENCY}</h5>}
                    body={<ListForm {...CurrencySettingProps} />}/>
    <CollapseHeader panelStyle="panel panel-default" heading={
      <h5><FontAwesome name="file-text-o" size="lg" fixedWidth={true} />&nbsp;{LABEL_RESOURCE_TYPE}</h5>}
                    body={<ResourceTypeTableForm {...ResourceTypeSettingProps} />}/>
  </form>);
};
SettingsForm.propTypes = {
  settings: PropTypes.object.isRequired,
  addFund: PropTypes.func.isRequired,
  removeFund: PropTypes.func.isRequired,
  updateFund: PropTypes.func.isRequired,
  addCurrency: PropTypes.func.isRequired,
  removeCurrency: PropTypes.func.isRequired,
  updateCurrency: PropTypes.func.isRequired,
  addResourceType: PropTypes.func.isRequired,
  removeResourceType: PropTypes.func.isRequired,
  updateResourceType: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

