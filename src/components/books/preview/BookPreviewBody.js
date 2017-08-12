import { FormGroup, Img, Loading, StarRating } from '../../common/';
import {
    LABEL_AUTHOR,
    LABEL_ISBN_10,
    LABEL_ISBN_13,
    LABEL_NA,
    LABEL_NUMBER_OF_PAGES,
    LABEL_PUBLISHED_DATE,
    LABEL_PUBLISHER,
    LABEL_STUDY_PROGRAM,
    LABEL_SUB_TITLE,
    LABEL_SUMMARY,
    LABEL_TITLE,
    LABEL_VENDOR
} from '../../../labels/';

import { Book } from '../../../api/books/';
import PropTypes from 'prop-types';
import React from 'react';

export const BookPreviewBody = ({ bookPreview, ajaxGlobal }) => {
    return (<div className="book-preview page books clearfix">
        {ajaxGlobal.started && <Loading />}
        {!ajaxGlobal.started && <div>
            <div className="col-sm-2 ">
                <div className="book">
                    <Img className="book-image" src={bookPreview[Book.IMAGE_URL]} />
                </div>
                <div className="padding-left-15px">
                    <StarRating value={bookPreview[Book.TITLE_POINTS]} starCount={4} />
                </div>
            </div>
            <div className="col-sm-10">
                <div className="col-sm-6 col-sm-offset-1">
                    <FormGroup label={LABEL_TITLE} name={Book.TITLE}>
                        <span>{bookPreview[Book.TITLE] || LABEL_NA}</span>
                    </FormGroup>
                    <FormGroup label={LABEL_ISBN_10} name={Book.ISBN10}>
                        <span>{bookPreview[Book.ISBN10] || LABEL_NA}</span>
                    </FormGroup>
                    <FormGroup label={LABEL_ISBN_13} name={Book.ISBN13}>
                        <span>{bookPreview[Book.ISBN13] || LABEL_NA}</span>
                    </FormGroup>
                    <FormGroup label={LABEL_PUBLISHER} name={Book.PUBLISHER}>
                        <span>{bookPreview[Book.PUBLISHER] || LABEL_NA}</span>
                    </FormGroup>
                    <FormGroup label={LABEL_AUTHOR} name={Book.AUTHOR}>
                        <span>{bookPreview[Book.AUTHOR] || LABEL_NA}</span>
                    </FormGroup>
                </div>
                <div className="col-sm-5">
                    <FormGroup label={LABEL_PUBLISHED_DATE}>
                        <span>{bookPreview[Book.PUBLISHED_DATE] || LABEL_NA}</span>
                    </FormGroup>
                    <FormGroup label={LABEL_SUB_TITLE}>
                        <span>{bookPreview[Book.SUB_TITLE] || LABEL_NA}</span>
                    </FormGroup>
                    <FormGroup label={LABEL_NUMBER_OF_PAGES}>
                        <span>{bookPreview[Book.NUMBER_OF_PAGES] || LABEL_NA}</span>
                    </FormGroup>
                </div>
            </div>
            <div className="col-sm-12">
                <FormGroup label={LABEL_SUMMARY} name={Book.SUMMARY}>
                    <p>{bookPreview[Book.SUMMARY] || LABEL_NA}</p>
                </FormGroup>
            </div>
        </div>}
    </div>);
};

BookPreviewBody.propTypes = {
    bookPreview: PropTypes.object.isRequired,
    ajaxGlobal: PropTypes.object.isRequired
};