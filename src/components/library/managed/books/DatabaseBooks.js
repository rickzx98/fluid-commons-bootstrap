import React from 'react';
import PropTypes from 'prop-types';
import {LABEL_AUTHOR, LABEL_EDITION, LABEL_PUBLISHER,
  LABEL_TITLE, LABEL_BOOKS, LABEL_SUB_TITLE,
  LABEL_SEARCH} from '../../../../labels/';
import {Book} from '../../../../api/books/';
import {ResponsiveButton, FontAwesome} from '../../../common/';
export const DatabaseBooks = ({books, onAdd, bookActions})=> {
  return (
    <div className="col-lg-6">
      <fieldset>
        <legend>{LABEL_BOOKS}</legend>
        <div className="form-group">
          <input className="form-control" name="search" placeholder={LABEL_SEARCH} onChange={(event)=>{
                    bookActions.searchBooks(event.target.value);
          }}/>
        </div>
        <table className="table table-hover table-condensed table-striped">
          <thead>
          <th></th>
          <th>{LABEL_TITLE}</th>
          <th>{LABEL_SUB_TITLE}</th>
          <th>{LABEL_EDITION}</th>
          <th>{LABEL_AUTHOR}</th>
          <th>{LABEL_PUBLISHER}</th>
          </thead>
          <tbody>
          {books.map(book=>(
            <tr key={book[Book.BOOK_ID]}>
              <td>
                <ResponsiveButton label="" onClick={()=>{onAdd(book);}} className="btn btn-success"
                                  icon={<FontAwesome name="plus" size="lg" fixedWidth={true}/>}/>
              </td>
              <td>{book[Book.TITLE]}</td>
              <td>{book[Book.SUB_TITLE]}</td>
              <td>{book[Book.EDITION]}</td>
              <td>{book[Book.AUTHOR]}</td>
              <td>{book[Book.PUBLISHER]}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </fieldset>
    </div>);
};

DatabaseBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  bookActions: PropTypes.object.isRequired
};
