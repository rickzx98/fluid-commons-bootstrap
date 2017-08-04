import { FontAwesome, ResponsiveButton } from '../common/';
import { LABEL_ADD, LABEL_CANCEL, LABEL_EDIT, LABEL_LABEL, LABEL_REMOVE, LABEL_TYPE, LABEL_UPDATE } from '../../labels/';

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
    this.onChangeFormTypeValue = this.onChangeType.bind(this);
    this.cancelFormUpdate = this.cancelUpdate.bind(this);
    this.updateFormValue = this.updateValue.bind(this);
  }
  componentWillMount() {
    this.setState({});
  }
  addValue() {
    if (this.state.inputValue && this.state.typeValue) {
      this.props.addValue({
        value: this.state.typeValue,
        label: this.state.inputValue
      });
      this.setInputValue('');
      this.setTypeValue('');
    }
  }
  removeValue(index) {
    this.props.removeValue(index);
  }
  setUpdateMode(resourceType, index) {
    this.setState({ update: true, index });
    this.setInputValue(resourceType.label);
    this.setTypeValue(resourceType.value);
  }
  setInputValue(value) {
    this.setState({ inputValue: value });
  }
  setTypeValue(value) {
    this.setState({ typeValue: value });
  }
  onChangeInputValue(event) {
    this.setState({ inputValue: event.currentTarget.value });
  }
  onChangeType(event) {
    this.setState({ typeValue: event.currentTarget.value });
  }
  cancelUpdate() {
    this.setState({ update: false, index: undefined });
    this.setInputValue('');
    this.setTypeValue('');
  }
  updateValue() {
    this.props.updateValue({
      value: this.state.typeValue,
      label: this.state.inputValue
    }, this.state.index);
    this.cancelUpdate();
  }
  render() {
    const { values = [], name, label } = this.props;
    return (<div className="resource-type-table-form">
      <table className="table table-hover">
        <thead>
          <tr>
            <th colSpan={3} className="resource-type-table-controls-header">
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
                  <select onChange={this.onChangeFormTypeValue} value={this.state.typeValue} className="form-control">
                    {resourceTypesDefaultsForDropdown().map(type => <option key={`${name}_${type.value}`} value={type.value}>{type.label}</option>)}
                  </select>
                </div>
              </div>

            </th>
          </tr>
          <tr>
            <th>{' '}</th>
            <th className="hidden-xs">{LABEL_LABEL}</th>
            <th className="hidden-xs">{LABEL_TYPE}</th>
          </tr>
        </thead>
        <tbody>
          {values.map((resourceType, index) =>
            (<tr key={`${name}_value_$i${index}`}>
              <td className="hidden-xs" width="15%">
                <div className="btn-toolbar">
                  <ResponsiveButton className="btn btn-primary btn-xs" onClick={() => {
                    this.setFormUpdateMode(resourceType, index);
                  }} name={`a_${name}_$i${index}`}
                    label={LABEL_EDIT} icon={<FontAwesome name="pencil" size="lg" fixedWidth={true} />} />
                  <button disabled={!!this.state.update} type="button" className="btn btn-danger btn-xs" name={`button_${name}_$i${index}`}
                    onClick={() => {
                      this.removeFormValue(index);
                    }}><FontAwesome fixedWidth={true} name="trash" /><span className="hidden-xs">&nbsp;{LABEL_REMOVE}</span></button>
                </div>
              </td>
              <td className="hidden-sm hidden-md hidden-lg">
                <div className="btn-toolbar pull-left clear-fix">
                  <ResponsiveButton className="btn btn-primary btn-xs" onClick={() => {
                    this.setFormUpdateMode(resourceType, index);
                  }} name={`a_${name}_$i${index}`}
                    label={LABEL_EDIT} icon={<FontAwesome name="pencil" size="lg" fixedWidth={true} />} />
                  <button disabled={!!this.state.update} type="button" className="btn btn-danger btn-xs" name={`button_${name}_$i${index}`}
                    onClick={() => {
                      this.removeFormValue(index);
                    }}><FontAwesome fixedWidth={true} name="trash" /><span className="hidden-xs">&nbsp;{LABEL_REMOVE}</span></button>
                </div>
                <p className="pull-right clear-fix hidden-sm hidden-md hidden-lg">
                  <span className="resoure-type-item-label">{resourceType.label}</span>&nbsp;-&nbsp;
                  <span className="resoure-type-item-value">{resourceType.value}</span>
                </p>
              </td>
              <td className="hidden-xs">{resourceType.label}</td>
              <td className="hidden-xs">{resourceType.value}</td>
            </tr>))}
        </tbody>
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

