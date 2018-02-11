import * as actions from '../../actions/BookActions';

import { FluidPaginate, FluidTable } from './';

import { Book } from '../../api/books';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const BookColumns = [
  { field: Book.TITLE, label: 'Title', editable: true },
  { field: Book.SUB_TITLE, label: 'Sub Title' },
  { field: Book.AUTHOR, label: 'Author' }
];

export class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editTable: false };
    this.thisPaginateChange = this.paginateChange.bind(this);
    this.thisSetEditTableMode = this.setEditTableMode.bind(this);
    this.thisOnSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.setState({ editTable: false, paginate: { total: 100, size: 25, page: 1, hasNext: true, hasPrevious: false } });
  }
  componentDidMount() {
    FluidPaginate.refresh('samplePaginator');
  }
  setEditTableMode() {
    this.setState({
      editTable: true
    });
  }
  paginateChange(paginate) {
    this.setState({ paginate });
  }
  onSubmit(parameter) {
    if (parameter.isNew && parameter.isNew()) {
      console.log('newSubmitted', parameter);
    } else {
      const updatedValue = parameter.updatedValue();
      return this.props.actions.updateManagedBook(updatedValue[Book.BOOK_ID], updatedValue)
        .then(() => {
          return FluidTable.refresh('sampleTable')
            .then(() => {
              this.setState({ editTable: false });
            });
        });
    }
  }
  render() {
    return (<div><h1>Sample Page</h1>
      <FluidPaginate className="btn-group btn-group-xs"
        onChange={this.thisPaginateChange}
        total={this.state.paginate.total}
        size={this.state.paginate.size}
        page={this.state.paginate.page}
        name="samplePaginator">
        <button className="btn btn-info" onClick={() => {
          FluidPaginate.first('samplePaginator');
        }} type="button">First</button>
        <button className="btn btn-info" disabled={!this.state.paginate.hasPrevious} onClick={() => {
          FluidPaginate.previous('samplePaginator');
        }} type="button">Previous</button>
        <button className="btn btn-info" disabled={!this.state.paginate.hasNext} onClick={() => {
          FluidPaginate.next('samplePaginator');
        }} type="button">Next</button>
        <button className="btn btn-info" onClick={() => {
          FluidPaginate.last('samplePaginator');
        }} type="button">Last</button>
      </FluidPaginate>
      <div className="btn-group btn-group-xs">
        <button className="btn btn-info" type="button" onClick={() => {
          FluidTable.addRow('sampleTable').then(() => {
            this.setState({ editTable: true });
          });
        }}>Add</button>
        <button className="btn btn-info" type="button" onClick={() => {
          FluidTable.refresh('sampleTable');
        }}>Refresh</button>
        {
          this.state.editTable && <button className="btn btn-danger" type="button" onClick={() => {
            FluidTable.cancelEdit('sampleTable').then(() => {
              this.setState({ editTable: false });
            });
          }}>Cancel</button>
        }
      </div>
      <ul className="pagination">
        {this.state.paginate.pages && this.state.paginate.pages.map(page => {
          return (<li className={`${page.selected && 'active'}`} key={page.page}>
            <a href="#" disabled={page.selected} onClick={page.onClick}>{page.page}</a></li>);
        })}
      </ul>
      <FluidTable
        onSubmit={this.thisOnSubmit}
        onEdit={this.thisSetEditTableMode}
        rowClass="row-class"
        className="table table-condensed table-hovered"
        name="sampleTable"
        value={this.props.actions.loadBooks}
        columnClass={'column-class'}
        columns={BookColumns} />
    </div >);
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
