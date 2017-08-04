import { LABEL_ADD, LABEL_CANCEL, LABEL_LABEL, LABEL_REMOVE, LABEL_TYPE, LABEL_UPDATE } from '../../labels/';

import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { resourceTypesDefaultsForDropdown } from '../../selectors/settingsSelectors';

export class ResourceTypeTableForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputForm = `${this.props.name}_input`;
    this.addFormValue = this.addValue.bind(this);
    this.removeFormValue = this.removeValue.bind(this);
    this.setFormUpdateMode = this.setUpdateMode.bind(this);
    this.onChangeFormInputValue = this.onChangeInputValue.bind(this);
    this.cancelFormUpdate = this.cancelUpdate.bind(this);
    this.updateFormValue = this.updateValue.bind(this);
  }
  componentWillMount() {
    this.setState({});
  }
  addValue() {
    this.props.addValue(this.state.inputValue);
    this.setInputValue('');
  }
  removeValue(event) {
    const index = event.currentTarget.name.substr(event.currentTarget.name.indexOf('$i') + 2);
    this.props.removeValue(index);
  }
  setUpdateMode(event) {
    const index = event.currentTarget.name.substr(event.currentTarget.name.indexOf('$i') + 2);
    this.setState({ update: true, index });
    this.setInputValue(event.currentTarget.innerHTML);
    this.setActiveItem(index);
  }
  setActiveItem(index) {
    document.getElementsByName(`div_${this.props.name}`).forEach(element => {
      element.className = 'list-group-item list-form-field-value';
      if (index && (element.id === `div_${this.props.name}_$i${index}`)) {
        element.className += ' active';
      }
    });
  }
  setInputValue(value) {
    this.setState({ inputValue: value });
  }
  onChangeInputValue(event) {
    this.setState({ inputValue: event.currentTarget.value });
  }
  cancelUpdate() {
    this.setState({ update: false, index: undefined });
    this.setInputValue('');
    this.setActiveItem();
  }
  updateValue() {
    this.props.updateValue(this.state.inputValue, this.state.index);
    this.cancelUpdate();
  }
  render() {
    const { values = [], name, label } = this.props;
    return (<div className="resource-type-table-form">
      <table className="table table-hover">
        <thead>
          <tr>
            <th colSpan={2} className="resource-type-table-controls-header">
              <div className="resource-type-control-group clear-fix">
                <div className="input-group col-sm-9 pull-left">
                  <div className="input-group-btn">
                    {!this.state.update && <button onClick={this.addFormValue} type="button" className="btn btn-success"><FontAwesome size="lg" fixedWidth={true} name="plus" /><span className="hidden-xs">&nbsp;{LABEL_ADD}</span></button>}
                    {this.state.update && <button onClick={this.updateFormValue} type="button" className="btn btn-primary"><FontAwesome size="lg" fixedWidth={true} name="floppy-o" /><span className="hidden-xs">&nbsp;{LABEL_UPDATE}</span></button>}
                    {this.state.update && <button onClick={this.cancelFormUpdate} type="button" className="btn btn-danger"><FontAwesome size="lg" fixedWidth={true} name="ban" /><span className="hidden-xs">&nbsp;{LABEL_CANCEL}</span></button>}
                  </div>
                  <input onChange={this.onChangeFormInputValue} value={this.state.inputValue} type="text" name={this.inputForm} placeholder={label} className="form-control" />
                  <input value={values} className="table-form-field-hidden" name={name} />
                </div>
                <div className="form-group col-sm-3 pull-right">
                  <select className="form-control">
                    {resourceTypesDefaultsForDropdown().map(type => <option value={type.value}>{type.label}</option>)}
                  </select>
                </div>
              </div>

            </th>
          </tr>
          <tr>
            <th>{LABEL_LABEL}</th>
            <th>{LABEL_TYPE}</th>
          </tr>
        </thead>

      </table>
    </div>);
  }
}
ResourceTypeTableForm.propTypes = {
  values: PropTypes.array,
  name: PropTypes.string.isRequired,
  addValue: PropTypes.func.isRequired,
  removeValue: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

