import * as actions from '../actions/BookActions';

import Book from '../api/books/Book';
import { BookItemEdit } from '../components/books/BookItemEdit';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class ManageBookPage extends React.Component {
    componentWillMount() {
        this.props.actions.loadManagedBookSuccess(this.props.book);
    }
    constructor(props) {
        super(props);
        this.onSelectTab = this.onTabChanged.bind(this);
        this.onChangeBookEditForForm = this.onChangeBookEdit.bind(this);
    }
    render() {
        return (<div className="books page">
            <BookItemEdit
                onSelectTab={this.onSelectTab}
                onChange={this.onChangeBookEditForForm}
                tabEventKey={this.props.managedBook.tabEventKey} />
        </div>);
    }
    onTabChanged(activeKey) {
        this.props.actions.setTabEventKey(activeKey);
    }
    onChangeBookEdit(bookForm) {
        console.log('bookForm', bookForm);
    }
}

ManageBookPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        book: getBookById(state.books, ownProps.routeParams.id),
        managedBook: state.managedBook
    };
}

function getBookById(books, id) {
    const filtered = books.filter(book => book[Book.BOOK_ID] === id);
    return filtered ? filtered[0] : undefined;
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
