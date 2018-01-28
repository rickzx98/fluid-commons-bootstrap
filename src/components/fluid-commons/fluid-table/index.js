import * as actions from './fluid.info';

import FluidFunc from 'fluid-func';
import PropTypes from 'prop-types';
import React from 'react';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

export const FluidTableActions = actions;
export class FluidTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.thisSort = this.sort.bind(this);
  }
  sort(prop) {
    const sort = { ...this.state.sort };
    sort[prop.field] = prop.sort;
    if (this.props.sort) {
      this.props.sort(sort);
    } else if (FluidFunc.exists(`${actions.TABLE_SORT}${this.props.name}`)) {
      FluidFunc.start(`${actions.TABLE_SORT}${this.props.name}`, {
        sort: sort
      });
    }
    this.setState({ sort });
  }
  render() {
    return (<table
      style={this.props.style}
      className={this.props.className}>
      <TableHead columnClass={this.props.columnClass} columns={this.props.columns} />
      <TableBody rowClass={this.props.rowClass}
        columnClass={this.props.columnClass} name={this.props.name}
        fieldKey={this.props.fieldKey} columns={this.props.columns} value={this.props.value} />
    </table>);
  }
}
FluidTable.propTypes = {
  fieldKey: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.object,
  PropTypes.array,
  PropTypes.func]),
  columns: PropTypes.array,
  sort: PropTypes.func,
  name: PropTypes.string.isRequired,
  columnClass: PropTypes.string,
  rowClass: PropTypes.string
};


