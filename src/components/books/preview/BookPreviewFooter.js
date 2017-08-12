import { FontAwesome, ResponsiveButton } from '../../common/';
import { LABEL_ADD_BOOK, LABEL_CLOSE } from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export const BookPreviewFooter = ({ closeDialog, addBook }) => {
    return (<div className="btn-group btn-md">
        <ResponsiveButton onClick={addBook} className="btn btn-success" label={LABEL_ADD_BOOK} icon={
            <FontAwesome name="plus" fixedWidth={true} size="lg" />
        } />
        <ResponsiveButton onClick={closeDialog} className="btn btn-danger" label={LABEL_CLOSE} icon={
            <FontAwesome name="close" fixedWidth={true} size="lg" />
        } />
    </div>);
};

BookPreviewFooter.propTypes = {
    addBook: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired
};