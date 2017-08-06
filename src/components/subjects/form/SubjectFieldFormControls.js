import PropTypes from 'prop-types';
import React from 'react';
import { SubjectFieldTable } from './SubjectFieldTable';
import { TextInput } from '../../common/';

export class SubjectFieldFormControls extends React.Component {
  constructor(props) {
    super(props);
    this.fields = [...props.subjectField];
    this.initialState();
    this.selectSubjectField = this.onSelectSubjectField.bind(this);
    this.newField = this.addNewField.bind(this);
    this.cancelField = this.cancelNewField.bind(this);
    this.inputChange = this.onInputChange.bind(this);
    this.removeField = this.onRemoveField.bind(this);
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
      newField: true,
      subjectOptions: [
        { label: '-- select --', value: '' },
        ...(this.fields.filter(field => !this.isFieldExists(field.value)))]
    });
  }
  cancelNewField() {
    this.setState({
      newField: false
    });
  }
  onRemoveField(index) {
    const fields = [...this.state.fields];
    fields.splice(index, 1);
    this.setState({ fields });
  }
  isFieldExists(selectedField) {
    return this.state.fields.filter(field => field.value === selectedField).length > 0;
  }
  onInputChange(event) {
    this.props.onChange(event.target.name, event.target.value);
  }
  render() {
    return (<div className="no-padding container-fluid">
      <TextInput
        onChange={this.inputChange}
        required={true}
        name={this.state.$a.value}
        value={this.props.data[this.state.$a.value]}
        label={this.state.$a.label} />
      <SubjectFieldTable
        fields={this.state.fields}
        subjectOptions={this.state.subjectOptions}
        onChange={this.props.onChange}
        data={this.props.data}
        isNewField={this.state.newField}
        newField={this.newField}
        cancelField={this.cancelField}
        selectSubjectField={this.selectSubjectField}
        removeField={this.removeField} />
    </div>);
  }
}

SubjectFieldFormControls.propTypes = {
  typeOfHeading: PropTypes.string.isRequired,
  subjectField: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  subjectOptions: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

SubjectFieldFormControls.defaultProps = {
  subjectOptions: [],
  data: {}
};
