import { TABLE_CANCEL_EDIT, TABLE_EDIT, TABLE_REFRESH } from './fluid.info';

import FluidFunc from 'fluid-func';
import PropTypes from 'prop-types';
import React from 'react';
import { TableRow } from './TableRow';
export class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [], editable: false, column: '', editableIndex: 0 };
    this.thisRefresh = this.refresh.bind(this);
    this.thisSetEditable = this.setEditable.bind(this);
    this.thisCancelEditable = this.cancelEditable.bind(this);
    FluidFunc
      .create(`${TABLE_REFRESH}${this.props.name}`)
      .onStart(() => {
        this.thisRefresh();
      })
      .connect(`${TABLE_EDIT}${this.props.name}`)
      .onStart(parameter => {
        const field = parameter.field();
        const index = parameter.index();
        this.thisSetEditable(field, index);
      })
      .spec('field', { require: true })
      .spec('index', { require: true })
      .connect(`${TABLE_CANCEL_EDIT}${this.props.name}`)
      .onStart(() => {
        this.thisCancelEditable();
      });
  }
  componentWillMount() {
    this.setTableValue(this.props);
    this.refresh();
  }
  componentWillReceiveProps(nextProps) {
    let value = nextProps.value;
    if (!(value instanceof Function)) {
      if (this.state.value != value) {
        this.setTableValue(nextProps);
      } else if ((this.state.value && value instanceof Array && !!value) && this.state.value.length !== value.length) {
        this.setTableValue(nextProps);
      } else if (value instanceof Promise) {
        this.setTableValue(nextProps);
      }
    }
  }
  refresh() {
    if (this.props.value instanceof Function) {
      const value = this.props.value();
      this.setTableValue(value);
    }
  }
  setTableValue(value) {
    if (value) {
      if (value instanceof Promise) {
        value.then(result => {
          this.setValue(result);
        });
      } else {
        this.setValue(value);
      }
    }
  }
  setValue(value) {
    if (this.state.value != value) {
      this.setState({ value });
    }
    else if (this.state.value && value && this.state.value.length !== value.length) {
      this.setState({ value });
    }
  }
  setEditable(column, editableIndex) {
    this.setState({
      editable: true, column,
      editableIndex
    });
  }
  cancelEditable() {
    this.setState({
      editable: false,
      column: '',
      editableIndex: 0
    });
  }
  render() {
    return (<tbody>
      {this.state.value && this.state.value.map && this.state.value.map((row, index) =>
        (<TableRow
          editableIndex={this.state.editableIndex}
          editable={this.state.editable}
          column={this.state.column}
          tableName={this.props.name}
          rowClass={this.props.rowClass}
          columnClass={this.props.columnClass}
          index={index}
          key={this.props.fieldKey ? row[this.props.fieldKey] : index}
          value={row}
          columns={this.props.columns} />))}
    </tbody>);
  }
}
TableBody.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.array, PropTypes.object,
    PropTypes.func
  ]),
  columnClass: PropTypes.string,
  columns: PropTypes.array,
  fieldKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  rowClass: PropTypes.string
};
