import { TABLE_CANCEL_EDIT, TABLE_EDIT_SUBMIT } from './fluid.info';

import FluidFunc from 'fluid-func';
import PropTypes from 'prop-types';
import React from 'react';

export class TableEditableColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.thisOnChange = this.onChange.bind(this);
    this.thisOnSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.setValue(this.props.value[this.props.column.field]);
  }
  onSubmit(event) {
    event.preventDefault();
    if (FluidFunc.exists(`${TABLE_EDIT_SUBMIT}${this.props.tableName}`)) {
      const updatedValue = { ...this.props.value };
      updatedValue[this.props.column.field] = this.state.value;
      FluidFunc.start([`${TABLE_EDIT_SUBMIT}${this.props.tableName}`, `${TABLE_CANCEL_EDIT}${this.props.tableName}`], {
        updatedValue,
        currentValue: this.props.value
      });
    }
  }
  onChange(event) {
    this.setValue(event.target.value);
  }
  setValue(value) {
    this.setState({ value });
  }
  render() {
    let colElem = <td />;
    const className = `${this.props.column.className || ''} ${this.props.columnClass || ''}`;
    if (this.props.column.editableComponent) {
      colElem = (<td style={this.props.column.style} className={className}>
        <form onSubmit={this.thisOnSubmit} onChange={this.thisOnChange}
          className="editable-column-form">{colElem.editableComponent({
            value: this.props.value,
            column: this.props.column,
            currentValue: this.state.value
          })}</form></td>);
    } else {
      colElem = (<td style={this.props.column.style} className={className}>
        <form onSubmit={this.thisOnSubmit} onChange={this.thisOnChange} className="editable-column-form">
          <input name={this.props.column.field} className="editable-column"
            value={this.state.value} /></form>
      </td>);
    }
    return colElem;
  }
}

TableEditableColumn.propTypes = {
  column: PropTypes.object.isRequired,
  value: PropTypes.object,
  columnClass: PropTypes.string,
  tableName: PropTypes.string.isRequired,
};
