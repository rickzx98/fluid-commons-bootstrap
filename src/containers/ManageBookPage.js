import * as actions from '../actions/BookActions';

import { CancelModalBody, CancelModalFooter } from '../components/common/';

import Book from '../api/books/Book';
import { BookItemForm } from '../components/books/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import initialState from '../reducers/initialState';

export class ManageBookPage extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectTab = this.onTabChanged.bind(this);
        this.onChangeBookEditForForm = this.onChangeBookEdit.bind(this);
        this.addSubject = this.onAddSubject.bind(this);
        this.cancelManagedBook = this.cancelSubject.bind(this);
        this.modalConfirmCancel = this.confirmCancel.bind(this);
    }
    componentWillMount() {
        if (!this.props.managedBook.active && this.props.book) {
            const update = this.props.routeParams.id !== 'new';
            this.props.actions.loadManagedBookSuccess({ ...this.props.book, update });
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
    confirmCancel() {
        this.props.actions.closeDialog();
    }
    cancelBook() {
        if (this.props.managedBook.active && this.props.managedBook.touched) {
            this.props.actions.openDialogConfirmBookCancel({
                body: <CancelModalBody />,
                footer: <CancelModalFooter
                    onConfirmCancel={this.modalConfirmCancel}
                    closeDialog={this.props.actions.closeDialog} />
            });
        } else {
            this.goToPrevious();
        }
    }
    render() {
        return (<div className="books page">
            <BookItemForm
                managedBook={this.props.managedBook}
                addSubject={this.addSubject}
                onSelectTab={this.onSelectTab}
                onChange={this.onChangeBookEditForForm}
                tabEventKey={this.props.managedBook.tabEventKey}
                settings={this.props.settings} />
        </div>);
    }
}

ManageBookPage.propTypes = {
    actions: PropTypes.object.isRequired,
    managedBook: PropTypes.object.isRequired,
    book: PropTypes.object,
    settings: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        book: getBookById(state.books, ownProps.routeParams.id),
        managedBook: state.managedBook,
        settings: state.settings
    };
}

function getBookById(books, id) {
    if (id !== 'new') {
        const filtered = books.filter(book => book[Book.BOOK_ID] === id);
        return filtered ? filtered[0] : initialState.book;
    }
    return initialState.book;
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
