import {PageBody, PageHeader} from '../../common/';

import {LABEL_LIBRARY} from '../../../labels/';
import {ManagedLibraryForm} from './ManagedLibraryForm';
import PropTypes from 'prop-types';
import React from 'react';

export const ManagedLibraryPageBody = ({ajaxGlobal, managedLibrary, onFormChange, onFormSubmit})=> {
  const managedLibraryFormProps = {managedLibrary, onChange: onFormChange, onSubmit: onFormSubmit};
  return (<div className="page library">
    <PageHeader loading={ajaxGlobal.started}
                spinIcon={false} iconName="bookmark"
                label={LABEL_LIBRARY}/>
    <PageBody>
      <ManagedLibraryForm {...managedLibraryFormProps}/>
    </PageBody>
  </div>);
};

ManagedLibraryPageBody.propTypes = {
  managedLibrary: PropTypes.object.isRequired,
  ajaxGlobal: PropTypes.object.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};
