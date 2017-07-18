import PropTypes from 'prop-types';
import React from 'react';

export const BookItemEdit = ({ book }) => {
    return (<form className="form container-fluid">
        <div className="col-lg-4">
        <div className="form-group">
            <label for="bookTitle">Title</label>
            <input required id="bookTitle" className="form-control" placeholder="Title" />
        </div>
        <div className="form-group">
            <label for="subTitle">Sub Title</label>
            <input id="subTitle" className="form-control" placeholder="Sub title" />
        </div>
        <div className="form-group">
            <label for="bookAuthor">Author</label>
            <input required id="bookAuthor" className="form-control" placeholder="Author" />
        </div>
        </div>
        
    </form>);
}

BookItemEdit.propTypes = {
    book: PropTypes.object.isRequired
};