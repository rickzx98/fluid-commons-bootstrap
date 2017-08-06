import { BackButton, FontAwesome, ResponsiveButton } from '../../common/';
import { LABEL_CANCEL, LABEL_SAVE, LABEL_UPDATE } from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export const BookSubjectButtonControls = ({ cancelManagedSubject, managedSubject }) => {
  return (<div className="form-group">
    <BackButton label={LABEL_CANCEL}
      confirm={cancelManagedSubject} />
    <ResponsiveButton type="submit" className="btn btn-primary"
      label={managedSubject.update ? LABEL_UPDATE : LABEL_SAVE}
      icon={<FontAwesome size="lg" fixedWidth={true} name="save" />} />
  </div>);
};
BookSubjectButtonControls.propTypes = {
  cancelManagedSubject: PropTypes.func.isRequired,
  managedSubject: PropTypes.object.isRequired
};
