import { FontAwesome, Img, ResponsiveButton, Slider, StarRating } from '../common/';
import { LABEL_ONLINE_BOOKS, LABEL_SEARCH, LABEL_SEARCH_BOOKS } from '../../labels/';

import { BookPreviewFooter } from '../books/';
import { ConnectedBookPreviewPage } from '../../containers/BookPreviewPage';
import PropTypes from 'prop-types';
import React from 'react';

export const BookNewestHeader = ({ newest, searchInput,
  searchSubmit, googleBooks, openDialog,
  closeDialog, addBook }) => {
  return (<div className="book-newest">
    <h3><FontAwesome name="globe" />&nbsp;{LABEL_ONLINE_BOOKS}</h3>
    <form name="newestBookSearch" className="book-search-bar"
      onSubmit={searchSubmit}
      onChange={searchInput}>
      <div className="input-group">
        <div className="input-group-btn">
          <ResponsiveButton type="submit" className="btn btn-warning" label={LABEL_SEARCH}
            icon={<FontAwesome name="search" size="lg" fixedWidth={true} />} />
        </div>
        <input placeholder={LABEL_SEARCH_BOOKS} value={googleBooks.search} type="text" className="form-control" />
      </div>
    </form>
    <Slider
      adaptiveHeight={true}
      arrow={false}
      swipeToSlide={true}
      variableWidth={true}
      slidesToShow={8}>
      {newest && newest.length > 0 ? newest.map((book, index) => (
        <div key={`${book.id}_${index}_key`}>
          <div className="books" key={book.id}>
            <a onClick={() => {
              openDialog({
                body: <ConnectedBookPreviewPage bookLink={book.selfLink} />,
                footer: <BookPreviewFooter addBook={() => {
                  addBook(book.id, book.selfLink);
                }} closeDialog={closeDialog} />
              });
            }}>
              <Img className="book book-image" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '/book_ph.png'} />
            </a>
          </div>
          <div className="padding-left-15px center">
            <StarRating name="googleBookRating" value={book.volumeInfo.averageRating ? book.volumeInfo.averageRating - 1 : 0} starCount={4} />
          </div>
          <p className="book-title">{book.volumeInfo.title}</p>
        </div>
      )) : <div />}
    </Slider>
  </div>);
};

BookNewestHeader.propTypes = {
  newest: PropTypes.array.isRequired,
  searchInput: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  googleBooks: PropTypes.object.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired
};
