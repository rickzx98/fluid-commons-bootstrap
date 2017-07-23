import PropTypes from 'prop-types';
import React from 'react';

export const FundSetting = ({ settings, removeFund, addFund, updateFund }) => {
    return (<div className="settings-form-field">
        <ul className="list-group">
            <li className="list-group-item settings-form-field-header">
                <div className="input-group">
                    <div className="input-group-btn">
                        <button onClick={() => {
                            addFund(document.getElementById('settingsForm').elements['fund'].value);
                            document.getElementById('settingsForm').elements['fund'].value = '';
                        }} type="button" className="btn btn-success">Add</button>
                    </div>
                    <input type="text" name="fund" placeholder="fund" className="form-control" />
                </div>
            </li>
            {settings.funds.map((fund, index) => (<div key={fund} className="list-group-item settings-form-field-value">
                <button type="button" className="btn btn-danger btn-xs" onClick={() => {
                    removeFund(index);
                }}>Remove</button><a className="settings-form-field-value-edit">{fund}</a></div>))}
        </ul>
    </div>);
}
FundSetting.propTypes = {
    settings: PropTypes.object.isRequired,
    addFund: PropTypes.func.isRequired,
    removeFund: PropTypes.func.isRequired,
    updateFund: PropTypes.func.isRequired
};

