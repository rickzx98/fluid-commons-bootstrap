import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export class ProfilePage extends React.Component {
    render() {
        return null;
    }
}

ProfilePage.propTypes = {
    security: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        security: state.security
    };
}

export const ConnectProfilePage = connect(mapStateToProps)(ProfilePage);

ProfilePage.defaultProps = {
    access: ['admin', 'librarian', 'student']
};
