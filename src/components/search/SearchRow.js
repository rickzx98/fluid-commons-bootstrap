import '../../images/book_ph.png';

import { Img, Loading, ResponsiveButton } from '../common/';

import FontAwesome from 'react-fontawesome';
import { LABEL_ADD_BOOK } from '../../labels/';
import PropTypes from 'prop-types';
import React from 'react';

export const SearchRow = ({ volumeInfo, id, createBook, selfLink }) => {
  return (<tr key={id} className="book-item">
    <td>
      <div className="book">
        <Img loader={<Loading className="text-primary" width={50} height={30} />} className="book-image" src={[
          (volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : ''),
          '/book_ph.png'
        ]} />
      </div>
    </td>
    <td className="hidden-xs">
      <span className="book-title">{volumeInfo.title}</span> <br />
      {volumeInfo.subtitle}
    </td>
    <td className="hidden-xs">
      {volumeInfo.authors && volumeInfo.authors.map((author, index) => (
        <span key={`auth_${index}_${index}`}>{author}<br /></span>))}
    </td>
    <td className="hidden-xs">
      {volumeInfo.publisher}
    </td>
    <td className="hidden-xs">
      {volumeInfo.publishedDate}
    </td>
    <td>
      <p className="hidden-sm hidden-md hidden-lg">
        <span className="book-title">{volumeInfo.title}</span> <br />
        <span className="book-title">{volumeInfo.subtitle}</span> <br />
        {volumeInfo.authors && volumeInfo.authors.map((author, index) => (
          <span key={`action_${index}_${index}`}>{author}<br /></span>))}
      </p>
      <div className="btn btn-group btn-group-xs">
        <ResponsiveButton onClick={() => {
          createBook(id, selfLink);
        }} label={LABEL_ADD_BOOK} icon={
          <FontAwesome name="plus" size="lg" fixedWidth={true} />
        } className="btn btn-success" />
      </div>

    </td>
  </tr>);
};

SearchRow.propTypes = {
  id: PropTypes.string.isRequired,
  volumeInfo: PropTypes.object.isRequired,
  createBook: PropTypes.func.isRequired,
  preview: PropTypes.func.isRequired,
  selfLink: PropTypes.string.isRequired
};
