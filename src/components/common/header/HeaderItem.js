import { BackHeaderItem } from './BackHeaderItem';
import FontAwesome from 'react-fontawesome';
import NavItem from 'react-bootstrap/lib/NavItem';
import PropTypes from 'prop-types';
import React from 'react';
export const HeaderItem = ({ itemProperties, field }) => {
    if (field === 'Back') {
        return <BackHeaderItem itemProperties={itemProperties} label={field} />
    }
    return (<NavItem onClick={itemProperties.onClick}>
        <FontAwesome size="lg" name={itemProperties.fontIcon}
            fixedWidth={true} />&nbsp;{field}</NavItem>);
};

HeaderItem.propTypes = {
    itemProperties: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired
};