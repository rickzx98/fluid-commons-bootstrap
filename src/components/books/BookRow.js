import {Book} from '../../api/books/Book';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
export const BookRow = ({ book }) => {
  return (<tr key={book._id} className="book-item">
    <td>
      <div className="book">
        <img className="book-image" src={book[Book.IMAGE_URL]}/>
      </div>
    </td>
    <td className="hidden-xs">
      <span className="book-title">{book[Book.TITLE]}</span> <br />
      {book[Book.SUB_TITLE]}
    </td>
    <td className="hidden-xs">
      {book[Book.EDITION]}
    </td>
    <td className="hidden-xs">
      {book[Book.AUTHOR]}
    </td>
    <td className="hidden-xs">
      {book[Book.PUBLISHER]}
    </td>
    <td>
      <p className="hidden-sm hidden-md hidden-lg">
        <span className="book-title">{book[Book.TITLE]}</span> <br />
        <span className="book-title">{book[Book.SUB_TITLE]}</span> <br />
        {book[Book.EDITION]} <br />
        {book[Book.AUTHOR]}
      </p>
      <Link className="btn btn-primary" to={'/books/' + book[Book.BOOK_ID]}>
        <FontAwesome name="pencil-square-o" size="lg" fixedWidth={true}/><span className="hidden-xs">Edit</span></Link>
    </td>
  </tr>);
};

BookRow.propTypes = {
  book: PropTypes.object.isRequired
};

//  onTouchTap={() => browserHistory.push(`books/${book[Book.BOOK_ID]}`)}
