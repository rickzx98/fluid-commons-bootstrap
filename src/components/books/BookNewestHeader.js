import { FontAwesome, Img, Slider, StarRating } from '../common/';

import { LABEL_RECENT_BOOKS } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';

export const BookNewestHeader = ({ newest }) => {
  return (<div className="book-newest">
    <h3><FontAwesome name="globe" />&nbsp;{LABEL_RECENT_BOOKS}</h3>
    <Slider
      arrow={false}
      swipeToSlide={true}
      adaptiveHeight={true}
      variableWidth={true}
      slidesToShow={8}>
      {newest && newest.length > 0 ? newest.map(book => (
        <div key={book.id}>
          <div className="books" key={book.id}>
            <Img className="book book-image" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '/book_ph.png'} />
          </div>
          <div className="padding-left-15px center">
            <StarRating value={book.volumeInfo.averageRating ? book.volumeInfo.averageRating - 1 : 0} starCount={4} />
          </div>
          <p className="book-title">{book.volumeInfo.title}</p>
        </div>
      )) : <div />}
    </Slider>
  </div>);
};

BookNewestHeader.propTypes = {
  newest: PropTypes.array.isRequired
};
