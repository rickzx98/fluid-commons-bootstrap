import FontAwesome from 'react-fontawesome';
import { LABEL_SETTINGS } from '../../labels/';
import React from 'react';

export const SettingsPageHeader = () => {
    return (<h3 className="page-header-title text-primary"><FontAwesome name="gears" size="lg" fixedWidth={true} />{LABEL_SETTINGS}</h3>);
};