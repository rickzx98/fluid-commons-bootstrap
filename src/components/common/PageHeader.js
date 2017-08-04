import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
export const PageHeader = ({ label, iconName }) => {
  return (<div className="page-header animated fadeIn">
    <div className="page-background-fader" />
    <h3 className="page-header-title animated slideInDown">
      <FontAwesome name={iconName} size="lg" fixedWidth={true} /><p> {label} </p></h3>
  </div>);
};

PageHeader.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};
