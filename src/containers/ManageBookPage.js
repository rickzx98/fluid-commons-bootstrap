import * as actions from '../actions/BookActions';

import Book from '../api/books/Book';
import { BookItemEdit } from '../components/books/BookItemEdit';
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
    }
    componentWillMount() {
        if (!this.props.managedBook.active) {
            this.props.actions.loadManagedBookSuccess(this.props.book);
        }
    }
    onTabChanged(activeKey) {
        this.props.actions.setTabEventKey(activeKey);
    }
    onChangeBookEdit() {
        //console.log('bookForm', bookForm);
    }
    onAddSubject() {
        browserHistory.push('/books/subjects/new');
    }
    render() {
        return (<div className="books page">
            <BookItemEdit
                addSubject={this.addSubject}
                onSelectTab={this.onSelectTab}
                onChange={this.onChangeBookEditForForm}
                tabEventKey={this.props.managedBook.tabEventKey} />
        </div>);
    }
}

ManageBookPage.propTypes = {
    actions: PropTypes.object.isRequired,
    managedBook: PropTypes.object.isRequired,
    book: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        book: getBookById(state.books, ownProps.routeParams.id),
        managedBook: state.managedBook
    };
}

function getBookById(books, id) {
    const filtered = books.filter(book => book[Book.BOOK_ID] === id);
    return filtered ? filtered[0] : initialState.book;
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
