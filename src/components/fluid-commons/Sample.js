import * as actions from '../../actions/BookActions';

import { FluidTable, FluidTableActions } from './fluid-table';

import { Book } from '../../api/books';
import FluidFunc from 'fluid-func';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const BookColumns = [
  { field: Book.TITLE, label: 'Title' },
  { field: Book.SUB_TITLE, label: 'Sub Title' },
  { field: Book.AUTHOR, label: 'Author' }
];

export class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editTable: false };
    this.thisSetEditTableMode = this.setEditTableMode.bind(this);
    FluidFunc
      .create(`${FluidTableActions.TABLE_SORT}sampleTable`)
      .connect(`${FluidTableActions.TABLE_EDIT_MODE}sampleTable`)
      .onStart(() => {
        this.thisSetEditTableMode();
      })
      .connect(`${FluidTableActions.TABLE_EDIT_SUBMIT}sampleTable`)
      .onStart(parameter => {
        const updatedValue = parameter.updatedValue();
        return this.props.actions.updateManagedBook(updatedValue[Book.BOOK_ID], updatedValue);
      });
  }
  componentWillMount() {
    this.setState({ editTable: false });
  }
  setEditTableMode() {
    this.setState({
      editTable: true
    });
  }
  render() {
    return (<div><h1>Sample Page</h1>
      <button type="button" onClick={() => {
        FluidFunc.start(`${FluidTableActions.TABLE_REFRESH}sampleTable`);
      }}>Refresh</button>
      {this.state.editTable && <button type="button" onClick={() => {
        FluidFunc.start(`${FluidTableActions.TABLE_CANCEL_EDIT}sampleTable`).then(() => {
          this.setState({ editTable: false });
        });
      }}>Cancel</button>}
      <FluidTable
        rowClass="row-class"
        className="table table-condensed table-hovered"
        name="sampleTable" value={this.props.actions.loadBooks}
        columnClass={'column-class'}
        columns={BookColumns} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    ajaxGlobal: state.ajaxGlobal,
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

Sample.propTypes = {
  books: PropTypes.array,
  actions: PropTypes.object.isRequired
};

export const ConnectSample = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);
