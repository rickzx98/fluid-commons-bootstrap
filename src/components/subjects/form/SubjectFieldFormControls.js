import { FontAwesome, ResponsiveButton, Selector, TextInput } from '../../common/';
import { LABEL_ADD_MORE, LABEL_CANCEL, LABEL_SUBJECT_FIELD } from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export class SubjectFieldFormControls extends React.Component {
  constructor(props) {
    super(props);
    this.fields = [...props.subjectField];
    this.initialState();
    this.selectSubjectField = this.onSelectSubjectField.bind(this);
    this.newField = this.addNewField.bind(this);
    this.cancelField = this.cancelNewField.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.fields = [...nextProps.subjectField];
    this.initialState();
  }
  initialState() {
    const initState = {
      newField: false,
      fields: [],
      $a: this.fields.shift(),
      subjectOptions: []
    };
    if (this.state) {
      this.setState({ ...initState });
    } else {
      this.state = initState;
    }
  }
  onSelectSubjectField(name, selectedField) {
    const fieldToBeAdded = this.fields.filter(field => field.value === selectedField)[0];
    const valid = fieldToBeAdded.repeatable || (!fieldToBeAdded.repeatable && !this.isFieldExists(selectedField));
    if (valid) {
      const fields = [...this.state.fields, { ...fieldToBeAdded }];
      this.setState({ fields, newField: false });
    }
  }
  addNewField() {
    this.setState({
      newField: true, subjectOptions: [
        { label: '-- select --', value: '' },
        ...(this.fields.filter(field => !this.isFieldExists(field.value)))]
    });
  }
  cancelNewField() {
    this.setState({
      newField: false
    });
  }
  removeField(index) {
    const fields = [...this.state.fields];
    fields.splice(index, 1);
    this.setState({ fields });
  }
  isFieldExists(selectedField) {
    return this.state.fields.filter(field => field.value === selectedField).length > 0;
  }
  render() {
    return (<div className="no-padding container-fluid">
      <TextInput
        required={true}
        name={this.state.$a.value}
        value={this.props.data[this.state.$a.value]}
        label={this.state.$a.label} />
      <table className="table width100pc no-padding">
        <thead>
          <tr>
            <th>{' '}</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.fields.map((field, index) =>
            (
              <tr key={`${field.value}_${index}`}>
                <td className="padding-left-15px" width="3%">
                  <ResponsiveButton onClick={() => {
                    this.removeField(index);
                  }}
                    icon={<FontAwesome name="close" size="lg" fixedWidth={true} />}
                    className="btn btn-danger btn-xs"
                    label={''} />
                </td>
                <td>
                  <TextInput key={`${field.value}_${index}`}
                    label={field.label}
                    name={field.value}
                    value={this.props.data[field.value]} />
                </td>
              </tr>))}
        </tbody>
      </table>
      {this.state.newField && <Selector
        onChange={this.selectSubjectField}
        label={LABEL_SUBJECT_FIELD}
        name="subjectField"
        options={this.state.subjectOptions} />}
      <div className="btn-toolbar padding-left-15px">
        {!this.state.newField &&
          <ResponsiveButton onClick={this.newField} className="btn btn-success"
            icon={<FontAwesome name="plus" size="lg" fixedWidth={true} />}
            label={LABEL_ADD_MORE} />}
        {this.state.newField &&
          <ResponsiveButton onClick={this.cancelField} className="btn btn-danger"
            icon={<FontAwesome name="close" size="lg" fixedWidth={true} />}
            label={LABEL_CANCEL} />}
      </div>
    </div>)
  }
}


SubjectFieldFormControls.propTypes = {
  typeOfHeading: PropTypes.string.isRequired,
  subjectField: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
}
