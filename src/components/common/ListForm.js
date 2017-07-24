import { LABEL_ADD } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';

export class ListForm extends React.Component {
    addValue() {

    }
    removeValue() {

    }
    updateValue() {

    }
    render() {
        const { values = [], name, removeFund, addFund, updateFund, formName } = this.props;
        const inputForm = `${name}_input`;
        return (<div className="list-form">
            <ul className="list-group">
                <li className="list-group-item list-form-field-header">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button onClick={() => {
                                addFund(document.getElementById(formName).elements['fund'].value);
                                document.getElementById(formName).elements[name].value = '';
                            }} type="button" className="btn btn-success">Add</button>
                        </div>
                        <input type="text" name={name + '_input'} placeholder="fund" className="form-control" />
                        <input type="text" name={name} />
                    </div>
                </li>
                {values.map((value, index) => (<div key={fund} className="list-group-item list-form-field-value">
                    <button type="button" className="btn btn-danger btn-xs" onClick={() => {
                        removeFund(index);
                    }}>Remove</button><a className="list-form-field-value-edit">{fund}</a></div>))}
            </ul>
        </div>);
    }
}
ListForm.propTypes = {
    values: PropTypes.array,
    name: PropTypes.string.isRequired,
    addValue: PropTypes.func.isRequired,
    removeValue: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired,
    formName: PropTypes.string.isRequired
};

