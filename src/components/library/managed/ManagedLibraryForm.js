import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from '../../common/';
import {LABEL_NAME, LABEL_DEPARTMENT,MESSAGE_NAME_REQUIRED, MESSAGE_DEPARTMENT_REQUIRED} from '../../../labels/';
import {Library} from '../../../api/library/';
import {ConnectedManagedLibraryBooks} from './ManagedLibraryBooks';
export const ManagedLibraryForm = ({onChange, onSubmit, managedLibrary})=> {
  return (<form name="managedLibrary" onChange={onChange} onSubmit={event=>{
      event.preventDefault();
      onSubmit(event);
  }}>
    <TextInput label={LABEL_NAME} name={Library.NAME}
               required={true} message={MESSAGE_NAME_REQUIRED}
               value={managedLibrary[Library.NAME]}/>
    <TextInput label={LABEL_DEPARTMENT} name={Library.DEPARTMENT}
               required={true} message={MESSAGE_DEPARTMENT_REQUIRED}
               value={managedLibrary[Library.DEPARTMENT]}/>
    <ConnectedManagedLibraryBooks/>
  </form>)
};

ManagedLibraryForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  managedLibrary: PropTypes.object.isRequired
};
