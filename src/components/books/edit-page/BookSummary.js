import { Book } from '../../../api/books/';
import { Img } from '../../common/';
import { LABEL_BOOK_INFORMATION } from '../../../labels/';
import PropTypes from 'prop-types';
import React from 'react';

export const BookSummary = ({ managedBook }) => {
    return (<div>
        <fieldset>
            <legend>{LABEL_BOOK_INFORMATION}</legend>
            <div className="col-sm-12">
                <div className="col-sm-2 books">
                    <div className="book">
                        <Img src={managedBook[Book.IMAGE_URL]} />
                    </div>
                </div>
                <div className="col-sm-10"></div>
            </div>
        </fieldset>
    </div>);
};

BookSummary.propTypes = {
    managedBook: PropTypes.object.isRequired
}