import { HiddenButton, TextInput } from '../../common/';
import { LABEL_DEPARTMENT, LABEL_NAME, MESSAGE_DEPARTMENT_REQUIRED, MESSAGE_NAME_REQUIRED } from '../../../labels/';

import { ConnectedManagedLibraryBooks } from './ManagedLibraryBooks';
import { Library } from '../../../api/library/';
import PropTypes from 'prop-types';
import React from 'react';

export const ManagedLibraryForm = ({ onChange, onSubmit, managedLibrary }) => {
  return (<form name="managedLibrary" onChange={onChange} onSubmit={event => {
    event.preventDefault();
    onSubmit(event);
  }}>
    <HiddenButton />
    <div className="form-group">
      <TextInput className="col-lg-6" label={LABEL_NAME} name={Library.NAME}
        required={true} message={MESSAGE_NAME_REQUIRED}
        value={managedLibrary[Library.NAME]} />
      <TextInput className="col-lg-6" label={LABEL_DEPARTMENT} name={Library.DEPARTMENT}
        required={true} message={MESSAGE_DEPARTMENT_REQUIRED}
        value={managedLibrary[Library.DEPARTMENT]} />
    </div>
    <ConnectedManagedLibraryBooks />
  </form>);
};

ManagedLibraryForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  managedLibrary: PropTypes.object.isRequired
};
