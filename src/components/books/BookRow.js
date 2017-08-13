import { FontAwesome, Img, Loading, ResponsiveButton } from '../common/';
import { LABEL_DELETE, LABEL_EDIT, LABEL_PREVIEW } from '../../labels/';

import { Book } from '../../api/books/';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

export const BookRow = ({ book, onRemove, onPreview }) => {
  return (<tr key={book._id} className="book-item">
    <td>
      <div className="book">
        <Img loader={<Loading className="text-primary" width={50} height={30} />} className="book-image"
          src={book[Book.IMAGE_URL]} />
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
      <ResponsiveButton onClick={() => { onPreview(book); }} className="btn btn-warning" label={LABEL_PREVIEW} icon={
        <FontAwesome name="search" size="lg" fixedWidth={true} />
      } />
      &nbsp;
      <Link className="btn btn-primary" to={'/books/' + book[Book.BOOK_ID]}>
        <FontAwesome name="pencil-square-o" size="lg" fixedWidth={true} /><span className="hidden-xs">{LABEL_EDIT}</span></Link>
      &nbsp;
      <ResponsiveButton onClick={() => { onRemove(book); }} className="btn btn-danger" label={LABEL_DELETE} icon={
        <FontAwesome name="trash" size="lg" fixedWidth={true} />
      } />
    </td>
  </tr>);
};

BookRow.propTypes = {
  book: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired
};
