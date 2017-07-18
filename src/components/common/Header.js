import { APP_NAME } from '../../labels/';
import React from 'react';

export class Header extends React.Component {
    render() {
        return (<nav className="navbar navbar-default">
            <div className="container-fluid">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
            </div>
        </nav>);
    }
}