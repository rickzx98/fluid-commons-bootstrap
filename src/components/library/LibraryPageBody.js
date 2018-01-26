import { PageBody, PageHeader } from '../common/';

import { LABEL_LIBRARY } from '../../labels/';
import { LibraryTable } from './table/LibraryTable';
import PropTypes from 'prop-types';
import React from 'react';

export const LibraryPageBody = ({ ajaxGlobal, library, removeLibrary }) => {
  return (<div className="page library">
    <PageHeader loading={ajaxGlobal.started}
      spinIcon={false} iconName="bookmark"
      label={LABEL_LIBRARY} />
    <PageBody>
      <span>
        <LibraryTable removeLibrary={removeLibrary} library={library} />
      </span>
    </PageBody>
  </div>);
};

LibraryPageBody.propTypes = {
  removeLibrary: PropTypes.func.isRequired,
  library: PropTypes.array.isRequired,
  ajaxGlobal: PropTypes.object.isRequired
};
