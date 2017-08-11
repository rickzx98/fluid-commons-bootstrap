import * as actions from '../actions/BookActions';

import { CancelModalBody, CancelModalFooter, PageBody, PageHeader } from '../components/common/';
import { LABEL_BOOKS, LABEL_CONFIRM_PAGE_LEAVE_UNSAVED_CHANGES } from '../labels/';

import { Book } from '../api/books/';
import { BookItemForm } from '../components/books/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
//import initialState from '../reducers/initialState';
import { printA4 } from '../utils/';

export class ManageBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectTab = this.onTabChanged.bind(this);
    this.onChangeBookEditForForm = this.onChangeBookEdit.bind(this);
    this.addSubject = this.onAddSubject.bind(this);
    this.cancelManagedBook = this.cancelBook.bind(this);
    this.modalConfirmCancel = this.confirmCancel.bind(this);
    this.onPageLeave = this.routerWillLeave.bind(this);
    this.saveManagedBookForm = this.saveManagedBook.bind(this);
    this.addNew = this.onNewBook.bind(this);
    this.onSearch = this.onSearchBook.bind(this);
    this.printSummary = this.print.bind(this);
  }

  componentWillMount() {
    if (!this.props.managedBook.active && this.props.routeParams.id) {
      this.props.actions.getBookById(this.props.routeParams.id);
    }
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.onPageLeave);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.route.path === 'books/new' && nextProps.managedBook._id) {
      browserHistory.push('/books/' + nextProps.managedBook._id);
    }
  }

  onTabChanged(activeKey) {
    this.props.actions.setTabEventKey(activeKey);
  }

  onChangeBookEdit(form) {
    this.props.actions.setManagedBookFieldValue(form.name, form.value);
  }

  onAddSubject() {
    browserHistory.push('/books/subjects/new');
  }

  onNewBook() {
    browserHistory.push('/books/new');
  }

  confirmCancel() {
    this.props.actions.cancelManagedBook();
    this.props.actions.closeDialog();
  }

  cancelBook() {
    return new Promise((resolve, reject) => {
      if (this.props.managedBook.active && this.props.managedBook.touched) {
        this.props.actions.openDialogConfirmBookCancel({
          body: <CancelModalBody />,
          footer: <CancelModalFooter
            reject={reject}
            resolve={resolve}
            confirmCancel={this.modalConfirmCancel}
            closeDialog={this.props.actions.closeDialog} />
        });
      } else {
        this.props.actions.cancelManagedBook();
        resolve();
      }
    });
  }

  routerWillLeave(next) {
    if (this.props.managedBook.active && this.props.managedBook.touched) {
      return LABEL_CONFIRM_PAGE_LEAVE_UNSAVED_CHANGES;
    } else if (next.pathname.indexOf('subjects/new') > -1 ||
      next.pathname.indexOf('subjects') > -1) {
      return true;
    } else if (next.pathname === this.props.router.location.pathname) {
      return true;
    } else {
      this.props.actions.cancelManagedBook();
    }
  }

  saveManagedBook() {
    const newBook = Object.assign({}, {
      ...this.props.managedBook,
      update: undefined,
      active: undefined,
      touched: undefined,
      tabEventKey: undefined,
      invalid: undefined,
      invalidMessage: undefined,
      invalidField: undefined
    });
    if (!this.props.managedBook.update && !!this.props.managedBook.touched) {
      this.props.actions.createManagedBook(newBook);
    } else if (this.props.managedBook.update && this.props.managedBook.touched) {
      this.props.actions.updateManagedBook(newBook[Book.BOOK_ID], newBook);
    }
  }

  onSearchBook() {
    browserHistory.push('/books/new/search');
  }

  print() {
    printA4('books-summary');
  }
  render() {
    return (<div className="books page">
      <PageHeader loading={this.props.ajaxGlobal.started}
        spinIcon={false}
        label={LABEL_BOOKS}
        iconName="book" />
      <PageBody>
        <BookItemForm
          onSearch={this.onSearch}
          addNew={this.addNew}
          saveManagedBook={this.saveManagedBookForm}
          onCancel={this.cancelManagedBook}
          managedBook={this.props.managedBook}
          addSubject={this.addSubject}
          onSelectTab={this.onSelectTab}
          onChange={this.onChangeBookEditForForm}
          tabEventKey={this.props.managedBook.tabEventKey}
          settings={this.props.settings}
          printSummary={this.printSummary} />
      </PageBody>
    </div>);
  }
}

ManageBookPage.propTypes = {
  actions: PropTypes.object.isRequired,
  managedBook: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  ajaxGlobal: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ajaxGlobal: state.ajaxGlobal,
    managedBook: state.managedBook,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export const ConnectedManageBookPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBookPage);
