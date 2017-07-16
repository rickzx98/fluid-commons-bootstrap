import { APP_NAME } from '../../labels/';
import AppBar from 'material-ui/AppBar';
import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <AppBar title={APP_NAME} iconStyleLeft={{ display: 'none' }} />);
    }
}