import { BackButton, ResponsiveButton } from '../common/';
import { LABEL_ADD_SUBJECT, LABEL_BACK, LABEL_NEW_BOOK, LABEL_SAVE, LABEL_SEARCH } from '../../labels/';

import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

export const BookFormButtonControls = ({ onCancel, addSubject, addNew, managedBook, tabEventKey, onSearch }) => {
  return (
    <div className="no-pad-left col-sm-12 form-group">
      <BackButton to="/books" label={LABEL_BACK} confirm={onCancel} />

      <ResponsiveButton disabled={!managedBook.touched} type="submit"
        className="btn btn-primary" icon={
          <FontAwesome fixedWidth={true} name="floppy-o" />
        } label={LABEL_SAVE} />
      {tabEventKey === 'bookSubjects' && <ResponsiveButton onClick={addSubject} className="btn btn-success" icon={
        <FontAwesome fixedWidth={true} name="plus-circle" />}
        label={LABEL_ADD_SUBJECT} />}
      {managedBook.update && <ResponsiveButton onClick={addNew} className="btn btn-success"
        icon={<FontAwesome fixedWidth={true} name="book" />}
        label={LABEL_NEW_BOOK} />}
      {!managedBook.update &&
        <ResponsiveButton label={LABEL_SEARCH} onClick={onSearch} className="btn btn-warning" icon={
          <FontAwesome name="search" size="lg" fixedWidth={true} />}
        />}
    </div>);
};

BookFormButtonControls.propTypes = {
  managedBook: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  addSubject: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired,
  tabEventKey: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};
