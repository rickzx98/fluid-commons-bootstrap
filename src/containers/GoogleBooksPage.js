import '../images/search-header.jpg';
import * as headerActions from '../actions/HeaderActions';
import * as actions from '../actions/GoogleBookActions';
import * as alertActions from '../actions/NotificationActions';

import { IFrame, PageBody, PageHeader, ResponsiveButton } from '../components/common/';

import { LABEL_ONLINE_SEARCH , LABEL_BACK} from '../labels/';
import PropTypes from 'prop-types';
import React from 'react';
import { SearchList } from '../components/search/';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class GoogleBooksPage extends React.Component {

  constructor(props) {
    super(props);
    this.onSearchFilterChange = this.onFormFilterChange.bind(this);
    this.onSearchFilterSubmit = this.onFormFilterSubmit.bind(this);
    this.createBook = this.createFormBook.bind(this);
    this.preview = this.previewBook.bind(this);
  }
  componentWillMount(){
    this.setHeader();
  }
  comonentDidUpdate(){
    this.setHeader();
  }
  setHeader() {
    const header = {};
    header[LABEL_BACK] = {
      confirm: ()=> new Promise(resolve=> {
        resolve();
      })
    };
    this.props.headerActions.setHeaderControls(header);
  }

  closePreview() {
    this.props.actions.closeDialog();
  }

  previewBook(book) {
    this.props.actions.previewBook({
      title: book.title,
      body: (<IFrame url={`${book.previewLink}&key=${process.env.GOOGLE_BOOKS_API_KEY}`}
                     display="initial"
                     position="relative"
                     allowFullScreen/>),
      footer: (<div className="btn btn-group btn-group-xs">
        <ResponsiveButton onClick={this.closePreview.bind(this)} label="close" className="btn btn-primary"/></div>)
    });
  }

  onFormFilterChange(event) {
    this.props.actions.setGoogleFilterValue(event.target.name, event.target.value);
  }

  onFormFilterSubmit(event) {
    event.preventDefault();
    if (this.props.googleBooks.touched && this.props.googleBooks.active) {
      this.props.actions.searchBooks(this.props.googleBooks.query);
    }
  }

  createFormBook(bookId, selfLink) {
    this.props.actions.createNewBookFromGoogle(bookId, selfLink)
      .then(() => {
        browserHistory.push('/books/new?bookId=' + bookId);
      })
      .catch(err => {
        this.props.alertActions.alertDanger(err.message);
      });
  }

  render() {
    return (<div className="google-books page">
      <PageHeader loading={this.props.ajaxGlobal.started} label={LABEL_ONLINE_SEARCH} iconName="globe"/>
      <PageBody>
        <SearchList
          ajaxGlobal={this.props.ajaxGlobal}
          preview={this.preview}
          createBook={this.createBook}
          googleBooks={this.props.googleBooks}
          onSearchFilterSubmit={this.onSearchFilterSubmit}
          onSearchFilterChange={this.onSearchFilterChange}/>
      </PageBody>
    </div>);
  }
}

GoogleBooksPage.propTypes = {
  actions: PropTypes.object.isRequired,
  googleBooks: PropTypes.object.isRequired,
  ajaxGlobal: PropTypes.object.isRequired,
  alertActions: PropTypes.object.isRequired,
  headerActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ajaxGlobal: state.ajaxGlobal,
    googleBooks: state.googleBooks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    alertActions: bindActionCreators(alertActions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

export const ConnectedGoogleBooksPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleBooksPage);

GoogleBooksPage.defaultProps = {
  access: ['admin', 'librarian']
};
